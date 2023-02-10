import React from 'react'

const GranulatFiltreringShowcase = ({toggleAccordion, openAccordion}) => {
    return (
        <div className='showcase-granulat'>
            <div className='d-flex-a'>
                <div className='gap'>
                    <div>
                        <h3>FlexiCleans Granulatkassetter för dagvattenrening och Granulatfiltrering (fotbollskassetten)</h3>
                        <p>FlexiCleans granulatfilter för rening av dagvatten samt filtrering av granulat renar tungmetaller, näringsämnen, oljor, PAH och Pfas, samt filtrerar partiklar ned till 42 mikrometer. Kassetten rymmer 45 l/min filtrerat vatten. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</p>
                    </div>
                    <div>
                        <h4>Montage</h4>
                        <p>Att tänka på vid montaget är att filterkassetten kräver minst 8000/1000 mm djup i brunnen och med slät innersida på brunnen. Självaste "hålet" i beteckning måste vara 330 mm i diameter. Dessutom kan teleskopbeteckning försvåra montaget. </p>
                    </div>

                    <button className="products-accordion btn" onClick={toggleAccordion}>Hitta filterstorlek: </button>
                    { openAccordion && (

                    <table>
                        <thead>
                            <tr>
                                <th>Artikelnummer</th>
                                <th>Passar till brunn</th>
                                <th>Filtertyp</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>200100 FC 408 Granulat</td>
                                <td>350-450mm</td>
                                <td>Bark/flis</td>
                            </tr>
                            <tr>
                                <td>200102 FC 508 Granulat</td>
                                <td>500 mm</td>
                                <td>Bark/flis</td>
                            </tr>
                            <tr>
                                <td>200103 FC 608 Granulat</td>
                                <td>600 mm</td>
                                <td>Bark/flis</td>
                            </tr>
                            <tr>
                                <td>200104 FC 1008 Granulat</td>
                                <td>1000 mm</td>
                                <td>Bark/flis</td>
                            </tr>
                            <br />
                            <tr>
                                <td>100113 Filterdyna 600mm</td>
                                <td>600 mm</td>
                                <td>Bark/flis</td>
                            </tr>
                        </tbody>
                    </table>
                    )}
                </div>
                <img src="https://h24-original.s3.amazonaws.com/252829/29670684-zGYJd.jpg" alt="" />
            </div>
        </div>
    )
}

export default GranulatFiltreringShowcase