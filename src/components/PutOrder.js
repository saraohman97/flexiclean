import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ProductInfo from './forms/ProductInfo'
import BillingInfo from './forms/BillingInfo'
import DeliveryInfo from './forms/DeliveryInfo'
import Overview from './forms/Overview'

const PutOrder = ({ setOrder }) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        fistName: '',
        lastName: '',
        email: '',
        product: '',
        call: '',
        number: '',

        deliveryAdress: '',
        deliveryCounty: '',
        deliveryPostcode: '',

        adress: '',
        county: '',
        postcode: ''
    })
  const [yes, setYes] = useState(false)

    const FormTitles = ["Välj produkt", "Leverans adress", "Faktura adress", "Bekräfta"]

    const PageDisplay = () => {
        if (page === 0) {
            return <ProductInfo data={data} setData={setData} />
        } else if (page === 1) {
            return <DeliveryInfo data={data} setData={setData} />
        } else if (page === 2) {
            return <BillingInfo data={data} setData={setData} setOrder={setOrder} yes={yes} setYes={setYes} />
        } else {
            return <Overview data={data} setData={setData} yes={yes} />
        }
    }

    // useEffect(() => {
    //     yes ? (
    //         setData(prev => ({
    //             ...prev, 
    //             adress: prev.deliveryAdress,
    //             county: prev.deliveryCounty,
    //             postcode: prev.deliveryPostcode,
    //         }))
    //     ) : (
    //         setData(prev => ({
    //             ...prev, 
    //             adress: '',
    //             county: '',
    //             postcode: '',
    //         }))
    //     )
    // }, [yes])

    return (
        <div className='fixed inset-0 z-50'>
            <div onClick={() => setOrder(false)} className="fixed inset-0 w-full h-screen bg-black bg-opacity-30" />

            <div className='absolute top-0 right-0 bg-white w_450 h-screen p-10 flex flex-col border justify-between border-slate-100'>
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
                    <button
                        className={`border`}
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                console.log(data)
                                setOrder(false)
                            } else {
                                setPage((currPage) => currPage + 1)
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? 'submit' : 'next'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PutOrder