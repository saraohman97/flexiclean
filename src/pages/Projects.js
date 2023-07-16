import React from 'react'
import img from '../assets/project/project.jpg'
import ovako from '../assets/project/ovako.svg'
import eskiltuna from '../assets/project/eskiltuna2.svg'
import project2 from '../assets/project/project2.jpg'
import project3 from '../assets/project/project3.jpg'
import { Link, Navigate } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='container mx-auto mt-40 px-20 max-md:px-2'>
      {/* first section */}
      <section>
        <div className="flex justify-between px-10 max-md:flex-col max-md:px-0">
          <h1 className='text-4xl'>Minnesvärda projekt</h1>
          <p className='text-gray-400'>Upptäck vårt utbud av kassetter</p>
        </div>
        <img src={img} className='w-full h-screen object-cover pt-10' alt="flexiclean monterar filtervägg i skärgården" />
      </section>

      {/* second section */}
      <section className='text-center w-4/6 mx-auto my-20 max-md:w-auto'>
        <h1 className='text-2xl'>Kunden i center</h1>
        <p>Prioriteringar har alltid varit att kunna lösa kundernas problem avseende process- eller dag-vattenfrågor oavsett om FlexiClean är lösningen eller om vi gemensamt med våra samarbetspartners kan lösa problemen. Vi känner att vi är ett litet företag men stora resurser för att lösa de problem just ni har.</p>
      </section>

      {/* third section */}
      {/* <section> */}
        <div className="flex items-center max-md:flex-col mb-20">
          <div className="flex-1 h_450"><img src={ovako} className='h-full w-full object-cover' alt="Samlingsbrunn för Ovako Steels dagvattensystem" /></div>
          <div className="flex-1 pl-10 max-md:pl-0">
            <h1 className='text-4xl'>Ovako Steel Hofors</h1>
            <p className='pt-4 pb-2'><strong>Samlingsbrunn för Ovako Steels dagvattensystem</strong></p>
            <p>Brunnen är framtagen tillsammans med Meag. Komplett brunn med stigarrör, beteckning, servicebrygga, förfilter och filterinstallation för 130 000:-.</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center max-md:flex-col">
          <div className="flex-1 h_450"><img src={eskiltuna} className='h-full w-full object-cover' alt="bilhall i Eskilstuna problem med mystiskt oljeutsläpp" /></div>
          <div className="flex-1 pr-10">
            <h1 className='text-4xl'>Bilhall i Eskilstuna</h1>
            <p className='pt-4 pb-2'><strong>Problem med mystiskt oljeutsläpp</strong></p>
            <p>Tillsammans med AB Aros Rör & Svets och Enebo Entreprenad monterades denna vägg för 60 000:- och problemet var löst.</p>
          </div>
        </div>
      {/* </section> */}

      {/* forth section */}
      <section className='my-40 flex flex-col justify-center text-center items-center max-md:my-32'>
        <h1 className='text-4xl mb-10'>Titta på vår Google Maps karta över <br /> våra leveranse.</h1>
        <a href="https://www.google.com/maps/d/edit?mid=1NgcNrP7tE1DlDEef-NoOcD4AiQb0tChd&usp=sharing" rel="noreferrer" target="_blank"><button className='btn btn-gray'>Kolla karta</button></a>
      </section>

      {/* fifth section */}
      <section className='bg-gray-100 p-20 flex gap-20 max-md:flex-col max-md:px-0'>
        <div className="flex-1">
          <img src={project2} className='w-full' alt="flexiClean filterbrunnar för dagvattenrening" />
          <h1 className='text-4xl my-6'>FlexiClean filterbrunnar för dagvattenrening</h1>
          <p>FlexiClean filterbrunnar för rening av dagvatten. Dessa är för permanent placering men kan även användas mobilt. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Filterbrunnen är fördelad på en sedimenteringsdel samt en filtreringsdel . Filterbrunnen flödar 320-640 l/min filtrerat vatten beroende på dimension Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</p>
          <div className="flex gap-4 mt-6">
            <div onClick={Navigate('/kontakta-oss')} className='btn btn-blue'>Ta kontakt</div>
            <details>
                <summary className='btn btn-gray'>
                  Se storlekar
                </summary>
              <table>
                <tr>
                  <th><p>Artikelnummer</p></th>
                  <th><p>Antal kassetter</p></th>
                  <th><p>Volym kapacitet</p></th>
                </tr>
                <tr>
                  <td>79 122. Filterbrunn Dagvatten DN600</td>
                  <td>2 st</td>
                  <td>19 m3/h</td>
                </tr>
                <tr>
                  <td>79 123. Filterbrunn Dagvatten DN1000</td>
                  <td>3 st</td>
                  <td>29 m3/h</td>
                </tr>
                <tr>
                  <td>79 124. Filterbrunn Dagvatten DN1200</td>
                  <td>4 st</td>
                  <td>38 m3/h</td>
                </tr>
              </table>
            </details>
          </div>
        </div>
        <div className="flex-1">
          <img src={project3} className='w-full' alt="flexiClean filterväggar för dagvattenrening" />
          <h1 className='text-4xl my-6'>FlexiClean filterväggar för dagvattenrening</h1>
          <p>FlexiClean filterväggar för rening av dagvatten. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Och är godkänd som oljeavskiljare på parkeringsplatser. Flödet beror på hur många kassetter man använder.Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</p>
          <Link to='/kontakta-oss'>
            <button className='btn btn-blue mt-6'>Ta kontakt</button>
          </Link>
        </div>
      </section>

      {/* sixth section */}
      <section className='my-40 text-center flex flex-col gap-4 max-md:my-32'>
        <h1 className='text-4xl'>Uthyrning</h1>
        <p>Filterbrunnen för dagvattenrening finns för uthyrning via Terana AB. <br /> Kontakta oss för närmare information.</p>
        <div className="flex gap-6 self-center">
          <Link to='/kontakta-oss'><button className='btn btn-blue'>Kontakta oss</button></Link>
          <details>
            <summary className='btn btn-gray btn-filter'>Se storlek</summary>
            <table className='showcase6-table'>
              <tr>
                <th><p>Artikelnummer</p></th>
                <th><p>Antal kassetter</p></th>
                <th><p>Volym kapacitet</p></th>
              </tr>
              <tr>
                <td>79 123. Filterbrunn Dagvatten DN1000</td>
                <td>3 st</td>
                <td>29 m3/h</td>
              </tr>
            </table>
          </details>
        </div>
      </section>
    </div>
  )
}

export default Projects