import React, { useState } from 'react'
import logo from '../assets/logotype.png'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const PutOrder = ({ setOrderModalOpen }) => {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [order, setOrder] = useState({
        fullName: "",
        email: "",
        number: "",
        width: "",
        length: "",
        type: "",
        message: "",
        company: "",
        billingEmail: "",
        billingFullName: "",
        billingAddress: "",
        billingCounty: "",
        billingNumber: "",
    })
    const navigate = useNavigate()
    const [nextView, setNextView] = useState(false)
    const onNextClick = async () => {
        if (order.fullName === '' || order.email === '' || order.width === '' || order.length === '' || order.type === '') {
            setError(true)
        } else {
            setError(false)
            setNextView(true)
        }
    }

    const handleChangeInput = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (order.billingEmail === '' || order.billingFullName === '' || order.billingAddress === '' || order.billingCounty === '' || order.billingNumber === '') {
            setError(true)
        } else {
            emailjs.sendForm('service_wp153qc', 'template_5y9kw8e', e.target, 'bxhMD_7j9kjdXdrQf')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setOrder('')
            setError(false)
            setSuccess(true)
            navigate('/')
            setOrderModalOpen(false)
        }
    }

    return (
        <div className='order-content'>
            <div className="order-header">
                <div>
                    <img className='nav-logo' src={logo} alt="logotype flexiclean blue gray grey logo" />
                </div>
                <Link to='/' className="btn-close" onClick={() => setOrderModalOpen(false)}>X</Link>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={nextView === false ? 'order-form' : 'd-none'}>
                    <div className='order-form-left'>
                        <h1 className='order-title'>Beställning</h1>
                        <p className='order-subtitle'>Går bara att beställa inom Sverige. Kontakta oss för samarbeten utanför Sverige. </p>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>För- och efternamn*</label>
                            <input name='fullName' value={order['fullName']} onChange={handleChangeInput} type="text" className='input-field' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Epost adress *</label>
                            <input name='email' value={order['email']} onChange={handleChangeInput} type="email" className='input-field' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Telefon nummer</label>
                            <input name='number' value={order['number']} onChange={handleChangeInput} type="number" className='input-field' />
                        </div>
                        <div className="order-size-inputs">
                            <div className='order-size input-group'>
                                <label htmlFor="text" className='label'>Bredd*</label>
                                <input name='width' value={order['width']} onChange={handleChangeInput} type="number" min={0} className='input-field' />
                            </div>
                            <div className='order-size input-group'>
                                <label htmlFor="text" className='label'>Längd*</label>
                                <input name='length' value={order['length']} onChange={handleChangeInput} type="number" min={0} className='input-field' />
                            </div>
                        </div>
                    </div>
                    <div className="order-form-right">
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Kassett eller filter typ*</label>
                            <select name='type' value={order['type']} onChange={handleChangeInput} className='input-field'>
                                <option value="default">Välj</option>
                                <option value="kassett 1">Kassett 1</option>
                                <option value="kassett 2">Kassett 2</option>
                                <option value="kassett 1">Filter 1</option>
                                <option value="kassett 2">Filter 2</option>
                            </select>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Meddelande</label>
                            <textarea name='message' value={order['message']} onChange={handleChangeInput} className='input-field' cols="30" rows="10"></textarea>
                        </div>
                        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>Fälten kan inte vara tomma. </p>}
                        <div className='btn btn-gray'
                            onClick={() => onNextClick()}
                        >Nästa</div>
                    </div>
                </div>

                <div className={nextView === true ? 'order-form' : 'd-none'}>
                    <div className='order-form-left'>
                        <h1 className='order-title'>Leverans- <br /> och faktureringsadress</h1>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Företagsnamn</label>
                            <input name='company' value={order['company']} onChange={handleChangeInput} type="text" className='input-field' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Faktura email*</label>
                            <input name='billingEmail' value={order['billingEmail']} onChange={handleChangeInput} type="email" className='input-field' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>För- och efternamn*</label>
                            <input type="text" name='billingFullName' value={order['billingFullName']} onChange={handleChangeInput} className='input-field' />
                        </div>
                    </div>
                    <div className="order-form-right">
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Postadress*</label>
                            <input name='billingAddress' value={order['billingAddress']} onChange={handleChangeInput} type="text" className='input-field' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Ort*</label>
                            <input name='billingCounty' value={order['billingCounty']} onChange={handleChangeInput} type="text" className='input-field' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text" className='label'>Postnummer*</label>
                            <input name='billingNumber' value={order['billingNumber']} onChange={handleChangeInput} type="number" className='input-field' />
                        </div>
                        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>Fälten kan inte vara tomma. </p>}
                        {success && <p style={{ color: 'green', marginBottom: '1rem' }}>Ditt meddelande har skickats. </p>}
                        <div className="order-btn-wrapper">
                            <div className='btn btn-gray' onClick={() => setNextView(false)}>Tillbaka</div>
                            <button className='btn btn-blue' type='submit'>Lägg beställning</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PutOrder