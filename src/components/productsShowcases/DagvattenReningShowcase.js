const DagvattenReningShowcase = ({ toggleAccordion, openAccordion }) => {
    return (
        <div className="showcase-products">
            <h2>Våra filter</h2>

            <div className='d-flex-a'>
                <div className="gap">
                    <div>
                        <h3>FlexiCleans filterkassett för dagvattenrening</h3>
                        <p>FlexiCleans filterkassett för dagvattenrening renar tungmetaller, näringsämnen, oljorna PAH och Pfas. Kassetten rymmer 160 l/min filtrerat vatten och är försedd med en bypassfunktion vid höga vattenmängder. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. </p>
                    </div>
                    <div>
                        <h4>Montage</h4>
                        <p>Att tänka på vid montaget är att filterkassetten kräver minst 8000/1000 mm djup i brunnen och med slät innersida på brunnen. Självaste "hålet" i beteckning måste vara 300 mm i diameter. Dessutom kan teleskopbeteckning försvåra montaget. </p>
                    </div>

                    <div>
                        <div className="products-accordion" onClick={toggleAccordion}>
                            <p>Filter storlekar</p>
                            <p>{openAccordion ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</p>
                        </div>

                        {openAccordion && (
                            <table className="products-panel">
                                <thead>
                                    <tr>
                                        <th>Artikelnummer</th>
                                        <th>Passar till brunn</th>
                                        <th>Filterlängd</th>
                                        <th>Filtertyp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>100100 FC408SA</td>
                                        <td>350-450mm</td>
                                        <td>600mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100101 FC410SA</td>
                                        <td>350-450mm</td>
                                        <td>800mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100102 FC508SA</td>
                                        <td>500 mm</td>
                                        <td>600mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100103 FC510SA</td>
                                        <td>500 mm</td>
                                        <td>800mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100104 FC608SA</td>
                                        <td>600 mm</td>
                                        <td>600mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100105 FC610SA</td>
                                        <td>600 mm</td>
                                        <td>800mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100106 FC1008SA</td>
                                        <td>1000 mm</td>
                                        <td>600mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <td>100107 FC1010SA</td>
                                        <td>1000 mm</td>
                                        <td>800mm</td>
                                        <td>Bark/flis</td>
                                    </tr>

                                    <tr>
                                        <br />
                                    </tr>

                                    <tr>
                                        <td>100113 Filterdyna 600mm</td>
                                        <td></td>
                                        <td>600mm</td>
                                        <td>Bark/flis</td>
                                    </tr>
                                    <tr>
                                        <td>100114 Filterdyna 800mm</td>
                                        <td></td>
                                        <td>800mm</td>
                                        <td>Bark/flis</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
                <img src="https://h24-original.s3.amazonaws.com/252829/29670650-RH8xG.jpg" className="img-hover" alt="" />
            </div>
        </div>
    )
}

export default DagvattenReningShowcase