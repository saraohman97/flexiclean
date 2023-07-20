import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ProductInfo from './forms/ProductInfo'
import BillingInfo from './forms/BillingInfo'
import DeliveryInfo from './forms/DeliveryInfo'
import Overview from './forms/Overview'

const PutOrder = ({ setOrder }) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        product: '',
        call: false,
        number: null,

        deliveryAdress: '',
        deliveryCounty: '',
        deliveryPostcode: '',

        adress: '',
        county: '',
        postcode: null
    })
    const [yes, setYes] = useState(false)
    const [error, setError] = useState('')

    const FormTitles = ["Välj produkt", "Leverans adress", "Faktura adress", "Bekräfta"]

    const PageDisplay = () => {
        if (page === 0) {
            return <ProductInfo data={data} setData={setData} error={error} />
        } else if (page === 1) {
            return <DeliveryInfo data={data} setData={setData} error={error} />
        } else if (page === 2) {
            return <BillingInfo data={data} setData={setData} setOrder={setOrder} yes={yes} setYes={setYes} error={error} />
        } else {
            return <Overview data={data} setData={setData} yes={yes} />
        }
    }

    //if the billingInfo is the same as deliveryInfo
    useEffect(() => {
        yes ? (
            setData(prev => ({
                ...prev,
                adress: prev.deliveryAdress,
                county: prev.deliveryCounty,
                postcode: prev.deliveryPostcode,
            }))
        ) : (
            setData(prev => ({
                ...prev,
                adress: '',
                county: '',
                postcode: '',
            }))
        )
    }, [yes])

    const handleSubmit = (e) => {
        if (page === FormTitles.length - 1) {
            if (data.firstName === '') {
                alert('error')
            } else {
                setOrder(false)
                console.log(data)
            }
        } else {
            setPage((currPage) => currPage + 1)
        }
    }

    //Validation
    const steps = () => {
        if (page === 0) {
            if (data.firstName === '') {
                setError('firstName')
            } else if (data.lastName === '') {
                setError('lastName')
            } else if (data.email === '') {
                setError('email')
            } else if (data.product === '') {
                setError('product')
            } else {
                setPage(1)
                setError('')
            }

        } else if (page === 1) {
            if(data.deliveryAdress === '') {
                setError('deliveryAdress')
            } else if (data.deliveryCounty === '') {
                setError('deliveryCounty')
            } else if (data.deliveryPostcode === '') {
                setError('deliveryPostcode')
            } else {
                setPage(2)
                setError('')
            }

        } else if (page === 2) {
            if(data.adress === '') {
                setError('adress')
            } else if (data.county === '') {
                setError('county')
            } else if (data.postcode === '') {
                setError('postcode')
            } else {
                setPage(3)
                setError('')
            }

        } else if (page === 3) {
            handleSubmit()

        } else return null
    }

    return (
        <div className='fixed inset-0 z-50'>
            <div onClick={() => setOrder(false)} className="fixed inset-0 w-full h-screen bg-black bg-opacity-30" />

            <div className='absolute top-0 right-0 bg-white w-96 max-sm:w-full overflow-y-scroll h-screen p-10 flex flex-col border justify-between border-slate-100'>
                <div className='self-end text-xl' onClick={() => setOrder(false)}><AiOutlineClose /></div>

                {/* Title */}
                <div>
                    <h2 className='text-4xl'>Beställning</h2>
                    <h3 className='text-2xl'>{FormTitles[page]}</h3>
                </div>

                {/* Form content */}
                <div className='py-10 flex-1'>
                    {PageDisplay()}
                </div>

                {/* Buttons */}
                <div className='flex gap-4'>
                    <button
                        className={`border ${page === 0 ? 'bg-slate-300' : ''}`}
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                    >
                        prev
                    </button>
                    <button className='border' onClick={() => steps()}>
                        {page === FormTitles.length - 1 ? 'submit' : 'next'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PutOrder