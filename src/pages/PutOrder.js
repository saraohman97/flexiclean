import React, { useState } from 'react'
import SignUp from '../components/forms/SignUp'
import PersonalInfo from '../components/forms/PersonalInfo'
import Other from '../components/forms/Other'

const PutOrder = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        name: '',
        email: '',
        adress: '',
        card: ''
    })

    const FormTitles = ["Sign up", "Personal info", "Other"]

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUp data={data} setData={setData} />
        } else if (page === 1) {
            return <PersonalInfo data={data} setData={setData} />
        } else {
            return <Other data={data} setData={setData} />
        }
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>

            <div>
                <h2 className='text-4xl'>{FormTitles[page]}</h2>

                <div className='py-10'>
                    {PageDisplay()}
                </div>

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
                            if(page === FormTitles.length - 1) {
                                // alert('form submitted')
                                console.log(data)
                                setData({
                                    name: '',
                                    email: '',
                                    adress: '',
                                    card: ''
                                })
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