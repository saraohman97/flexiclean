import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookModal = ({ handleBookIconClick }) => {
    const [bookingNumber, setBookingNumber] = useState('')
    const [password, setPassword] = useState('')
    const [amount, setAmount] = useState('')
    const [bookerName, setBookerName] = useState('')

    const [showInfo, setShowInfo] = useState(false)

    const handleSubmitForm = e => {
        e.preventDefault()

        const addBooking = { bookingNumber, password, amount, bookerName }

        fetch('http://localhost:4000/booking', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addBooking)
        }).then(() => {
            console.log(addBooking)
        })
    }

    return (
        <div className='book-modal'>
            {!showInfo && (

                <form onSubmit={handleSubmitForm}>

                    <div className='book-title'>
                        <h2>Beställa filterpåse</h2>
                        <button className='x-btn' onClick={handleBookIconClick}><i className="fa-solid fa-x"></i></button>
                    </div>

                    <div className="form-inputs">
                        <div className="input-group">
                            <label htmlFor="number">Bokningsnummer</label>
                            <input type="number" value={bookingNumber} onChange={e => setBookingNumber(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">Lösenord</label>
                            <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="number">Antal kassetter</label>
                            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">Ansvaig</label>
                            <input type="text" value={bookerName} onChange={e => setBookerName(e.target.value)} />
                        </div>
                    </div>
                    <div className='book-bottom'>
                        <button className='btn'>Beställ</button>
                        <small className='btn' onClick={() => setShowInfo(true)}>Mer information</small>
                    </div>
                </form>

            )}

            {showInfo && (
                <>
                    <div className='book-title'>
                        <h2>Information om beställning</h2>
                        <button className='x-btn' onClick={handleBookIconClick}><i className="fa-solid fa-x"></i></button>
                    </div>

                    <div className="book-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat dolore corporis tempore dicta maiores veritatis laudantium. Nisi quas sequi ullam, distinctio eos vero eligendi dolore pariatur eius.

                        <br /> <br />

                        Dignissimos, ipsam voluptates! Optio accusamus fuga mollitia consequuntur quam reprehenderit corrupti a quis, voluptatem nihil repellendus fugiat, vel facilis dolorem odit placeat et maiores, laborum aspernatur accusantium magnam non inventore nemo eaque.
                    </div>

                    <div className='book-bottom'>
                        <button className='btn' onClick={() => setShowInfo(false)}>Tillbaka</button>
                        <Link to='/products'>
                            <button className='btn'>Se installations instruktioner</button>
                        </Link>
                    </div>
                </>
            )}

        </div>
    )
}

export default BookModal