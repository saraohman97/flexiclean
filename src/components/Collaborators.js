import React from 'react'

const Collaborators = () => {
    return (
        <div className='collaborators-showcase'>
            <h2>Samarbeten</h2>
            <div className="container">

                <div className='collaborator'>

                    <div className='aros-img'>
                        <img src="https://dst15js82dk7j.cloudfront.net/252829/71094620-PeXgW.jpg" alt="" />
                    </div>
                    <div className="collaborator-overlay"></div>
                    <div className='collaborator-text'>
                        <h3>Delägare i AB Aros Rör & Svets</h3>
                        <p>
                            Svets, smide och installationer</p>
                        <a href="http://www.arosrorsvets.se/">www.arosrorsvets.se/</a>
                    </div>
                </div>

                <div className='collaborator'>
                    <img src="https://dst15js82dk7j.cloudfront.net/252829/71094842-cyKZY.jpg" alt="" />
                    <div className="collaborator-overlay"></div>
                    <div className='collaborator-text'>
                        <h3>Rent Dagvatten AB</h3>
                        <p>
                            {/* Abonnera på rent dagvatten */}
                            Analys-projektering-entrepenad-service-efteranalys
                            Utbildningar</p>
                        <a href="http://www.rent-dagvatten.se/">http://www.rent-dagvatten.se/</a>
                    </div>
                </div>

                <div className='collaborator'>
                    <img src="https://dst15js82dk7j.cloudfront.net/252829/72745545-7sJQ6.png" alt="" />
                    <div className="collaborator-overlay"></div>
                    <div className='collaborator-text'>
                        <h3>Remedy By Sweden AB</h3>
                        <p>
                            Konsulter för avancerad forskning, problemlösning och metodutveckling.</p>
                        <a href="http://remedybysweden.se/">http://remedybysweden.se/</a>
                    </div>
                </div>

                <div className='collaborator'>
                    <img src="https://dst15js82dk7j.cloudfront.net/252829/71094915-vnRie.jpg" alt="" />
                    <div className="collaborator-overlay"></div>
                    <div className='collaborator-text'>
                        <h3>Minrent - Jernkontoret</h3>
                        <p>Vattenfiltrering med mineralbaserade restprodukter som reningsteknik för hållbara samhällslösningar.</p>
                        <a href="https://www.kth.se/profile/agak/page/project-minrent">https://www.kth.se/</a>
                    </div>
                </div>

                <div className='collaborator'>
                    <img src="https://dst15js82dk7j.cloudfront.net/252829/71095016-S1gDt.png" alt="" />
                    <div className="collaborator-overlay"></div>
                    <div className='collaborator-text'>
                        <h3>Stockholm Cleantech</h3>
                        <a href="www.smtc.se">www.smtc.se/</a>
                    </div>
                </div>

                <div className='collaborator'>
                    <img src="https://dst15js82dk7j.cloudfront.net/252829/71095154-aTjD6.png" alt="" />
                    <div className="collaborator-overlay"></div>
                    <div className='collaborator-text'>
                        <h3>Baltic Flows.</h3>
                        <p>Ett samarbete runt Österjön.</p>
                        <a href="https://www.balticflows.eu/">https://www.balticflows.eu/</a>
                    </div>
                </div>

                {/* NOT IN BUSINESS */}
                {/* <div className='collaborator'>
                    <p>Sustainable Business Mälardalen.
                        Miljöteknik i Mälardalen.</p>

                    <img src="https://h24-original.s3.amazonaws.com/252829/24428371-AfQIF.png" alt="" />
                </div> */}

            </div>
        </div>
    )
}

export default Collaborators