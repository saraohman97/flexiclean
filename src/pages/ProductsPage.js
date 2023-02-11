import React, { useState } from 'react'
import DagvattenReningShowcase from '../components/productsShowcases/DagvattenReningShowcase'
import GranulatFiltreringShowcase from '../components/productsShowcases/GranulatFiltreringShowcase'

const ProductsPage = () => {
  const [openAccordion, setOpenAccordion] = useState(false)
  const [openSecondAccordion, setOpenSecondAccordion] = useState(false)
  const [openThirdAccordion, setOpenThirdAccordion] = useState(false)

  const toggleAccordion = () => {
    openAccordion
      ? setOpenAccordion(false)
      : setOpenAccordion(true)
  }

  const toggleSecondAccordion = () => {
    openSecondAccordion
      ? setOpenSecondAccordion(false)
      : setOpenSecondAccordion(true)
  }

  const toggleThirdAccordion = () => {
    openThirdAccordion
      ? setOpenThirdAccordion(false)
      : setOpenThirdAccordion(true)
  }

  return (
    <div className='products-page'>
      <div className="container">

        <DagvattenReningShowcase toggleAccordion={toggleSecondAccordion} openAccordion={openSecondAccordion} />

        <GranulatFiltreringShowcase toggleAccordion={toggleThirdAccordion} openAccordion={openThirdAccordion} />

        <div className="showcase-wall">
          <div className='d-flex'>
            <div>
              <h3>FlexiClean filterväggar för dagvattenrening</h3>
              <p>FlexiClean filterväggar för rening av dagvatten. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Och är godkänd som oljeavskiljare på parkeringsplatser. Flödet beror på hur många kassetter man använder.Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.

                Kontakta oss för närmare information.</p>
            </div>

            <img src="https://h24-original.s3.amazonaws.com/252829/29671418-qZqDq.jpg" alt="" />
          </div>
        </div>

        <div className="showcase-brunn">
          <div className='d-flex-a'>
            <div className='gap'>
              <h3>FlexiClean filterbrunnar för dagvattenrening</h3>
              <p>
                FlexiClean filterbrunnar för rening av dagvatten. Dessa är för permanent placering men kan även användas mobilt. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Filterbrunnen är fördelad på en sedimenteringsdel samt en filtreringsdel . Filterbrunnen flödar 320-640 l/min filtrerat vatten beroende på dimension Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.
              </p>
              <p>
                Kontakta oss för närmare information.
              </p>

              <div>
                <div className="products-accordion" onClick={toggleAccordion}>
                  <p>Filter storlekar</p>
                  <p>{openAccordion ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</p>
                </div>
                {openAccordion && (

                  <table>
                    <thead>
                      <tr>
                        <th>Artikelnummer</th>
                        <th>Antal filterkassetter</th>
                        <th>Annat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>79 122 Filterbrunn Dagvatten DN600</td>
                        <td>2 st</td>
                        <td>FlexiClean 408, 19 m3/h</td>
                      </tr>
                      <tr>
                        <td>79 123 Filterbrunn Dagvatten DN1000</td>
                        <td>3 st</td>
                        <td>FlexiClean 408, 29 m3/h</td>
                      </tr>
                      <tr>
                        <td>79 124 Filterbrunn Dagvatten DN1200</td>
                        <td>4 st</td>
                        <td>FlexiClean 408, 38 m3/h</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <img src="https://h24-original.s3.amazonaws.com/252829/29670696-DJXfM.jpg" alt="" />
          </div>
        </div>

        <div className="showcase-clean">
          <div className='d-flex'>
            <div>
              <h3>FlexiCleans Målartvätt</h3>
              <p>FlexiClean målartvätt. En enkel icke mekanisk filtrering som kopplas till befintligt avlopp under diskbänken. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas.
                Kontakta oss för närmare information.</p>
            </div>

            <img src="https://h24-original.s3.amazonaws.com/252829/30249150-teMDG.jpg" alt="" />
          </div>
        </div>

        <div className="showcase-clean">
          <div className='d-flex'>
            <div>
              <h3>FlexiCleans Brunnslock</h3>
              <p>FlexiClean brunnslock. Förhindra effektivt större fragment att hamna i dagvattenbrunnen.
                Kontakta oss för närmare information.</p>
            </div>

            <img src="https://h24-original.s3.amazonaws.com/252829/30249151-LghYS.jpg" alt="" />
          </div>
        </div>

        <div className="showcase-clean">
          <div className='d-flex'>
            <div>
              <h3>FlexiCleans Filterkorg</h3>
              <p>FlexiClean filterkorg. Förhindrar effektivt större fragment att hamna i dagvattnet. Korgen placeras i dagvattenbrunnen.
                Kontakta oss för närmare information.</p>
            </div>

            <img src="https://h24-original.s3.amazonaws.com/252829/30249156-WiNiq.png" alt="" />
          </div>
        </div>

      </div>
    </div >
  )
}

export default ProductsPage