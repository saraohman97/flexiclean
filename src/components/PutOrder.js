import React, { useState } from 'react'
import SignUp from './forms/SignUp'
import PersonalInfo from './forms/PersonalInfo'
import Other from './forms/Other'
import { AiOutlineClose } from 'react-icons/ai'

const PutOrder = ({ setOrder }) => {
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
        <div className='fixed inset-0 z-50'>
            <div onClick={() => setOrder(false)} className="fixed inset-0 w-full h-screen bg-black bg-opacity-30" />

            <div className='absolute top-0 right-0 bg-white w-96 h-screen p-10 flex flex-col'>
                <div className='self-end text-xl' onClick={() => setOrder(false)}><AiOutlineClose /></div>

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
                            if (page === FormTitles.length - 1) {
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