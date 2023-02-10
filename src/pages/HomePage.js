import React from 'react'
import { Link } from 'react-router-dom'
import Collaborators from '../components/Collaborators'

const HomePage = () => {
  return (
    <div className='home-page'>

      <div className="home-header">
        <div className="container">
          <div className="home-text">
            <h1>Det finns inga önskebrunnar. Men väl en lyckosam lösning.</h1>
            <p>FlexiClean är en ﬁlterhållare för rening av process- och dagvatten. Produkten bygger på djup kunskap om dagvatten och dagvattenbrunnar och en förståelse för de utmaningar kommuner och privata aktörer ställs inför varje dag. FlexiClean är laddad med egenskaper som avsevärt förbättrar och förenklar arbetet med inspektion och underhåll av brunnen. Och den kan anpassas för rening i alla tänkbara miljöer. <Link to='/documentation'>Läs mer...</Link></p>
          </div>
        </div>
      </div>

      <div className="competition">
        <div className="container">
          <h2>Västmanlands miljö- och klimatpris 2019</h2>

          <div className='d-flex-e'>
            <p> <h4>Juryns motivering:</h4>
              Västmanlands miljö- och klimatpris 2019 går till FlexiClean AB för sitt arbete med att förbättra vattenmiljöer genom att ta tag i en av vår tids stora miljöproblem, kemikalier som sprids i dagvattnet. FlexiClean har utvecklat filter som fångar upp tungmetaller, oljeföroreningar och även PFAS. PFAS är cancerframkallande ämnen som bland annat finns i våra textilier och ibland beskrivs som vår tids värsta miljögift.
            </p>

            <p>FlexiClean har även tagit sig fram och hittat en lösning kring mikroplaster som sprids från konstgräsplaner.
              Genom att på det här sättet förbättra våra vattenmiljöer har Flexiclean på ett förtjänstfullt sätt bidragit till att Västmanland har tagit ett viktigt steg vidare till Miljö- och klimatrådets vision, ett län som är miljö- och klimatförebild 2030. Och klimatförebild 2030.
            </p>
          </div>

          <br /> 

          <div className='d-flex-a'>
            <div>
              <p><h4>Våra nomineringar genom åren:</h4>
                2006: Finalist. Sustainble Stockholm Award. <br />
                2007: Vinnare. Västerås Stads Miljöpris. <br />
                2015: Finalist. Deep Green Challenge, SKANSKA. <br />
                2016: Finalist. Västerås Stads Miljöpris <br />
                2019. Finalist innovationstävling SKAPA. <br />
                2019. Vinnare. Västmanlands Klimat- och Miljöpris.
              </p>

              {/* <br /> */}

              {/* <div className="competition-filter">
                <img src="https://dst15js82dk7j.cloudfront.net/252829/71166206-7DuNY.jpg" alt="" />
              </div> */}
            </div>

            <div className="competition-img">
              <img src="https://h24-original.s3.amazonaws.com/252829/28712055-9XX6s.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Collaborators />

    </div>
  )
}

export default HomePage
