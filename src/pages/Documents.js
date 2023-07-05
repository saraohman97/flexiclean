import React from 'react'
import headerImg from '../assets/document.jpg'

const Documents = () => {
  return (
    <section className='section document'>
      <h1 className='document-title'>Dokumentcenter</h1>
      <p className='document-subtitle'>Här publicerar vi fortlöpande tester utförda på FlexiClean. Redan för 14 år sedan blev vi tipsade om att använda bark som filtermaterial. De senare åren av forskning visar att vi valt rätt. Ladda gärna ned rapporterna nedan.</p>

      <img src={headerImg} className='document-img' alt="flexiclean samarbetar med rent dagvatten på mässa" />
      <p className='document-subtitle'>Det finns inga önskebrunnar. Men väl en lyckosam lösning.</p>

      <div className="document-data">
        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Installation av filter, provtagning och analys av dagvatten. IVL, november 2021</h3>
            <p>IVL Svenska Miljöinstitutet har i uppdraget för Järfälla kommun, i samarbete med kommunen och företaget Flexiclean, installerat och utvärderat brunnsfilter med tallbark och flis för att minska spridningen av mikroplast och andra föroreningar i dagvatten från konstgräsplaner och trafikytor.</p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/1316759/h/5cf3ec391113acf2430b2df9067210c1/C638+Installation+av+filter%2C+provtagning+och+analys+av+dagvatten">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://dst15js82dk7j.cloudfront.net/252829/97260241-tJLrg.jpg" alt="Installation av filter, provtagning och analys av dagvatten. IVL, november 2021" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Components for area-efficient
              stormwater treatment systems, Luleå Tekniska universitet, 2021</h3>
            <p>Components for area-efficient stormwater treatment systems Ivan Milovanović Urban Water Engineering, Luleå Tekniska universitet 2021. LTU gjorde under 2020-2021 tester på filtermaterial.</p>
            <a href="https://dst15js82dk7j.cloudfront.net/252829/97260234-B1XER.png">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://dst15js82dk7j.cloudfront.net/252829/97260234-B1XER.png" alt="Components for area-efficient stormwater treatment systems, Luleå Tekniska universitet, 2021" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Utvärdering av filtermaterial för att avlägsna lösta organiska föroreningar i dagvatten, Chalmers tekniska högskola, 2019</h3>
            <p>
              Dagvatten är i många fall förorenat av organiska miljögifter såsom polycykliska aromatiska kolväten (PAH),
              ftalater och alkylfenoler, som härstammar från trafik och byggnadsmaterial. Filter med adsorberande material
              har potential att rena bort lösta, kolloidala och partikelbundna organiska föroreningar från dagvatten. Syftet
              med detta forskningsprojekt är att undersöka hur effektivt olika filtermaterial kan avlägsna lösta organiska
              föroreningar från dagvatten. 11 olika material undersöktes i bägarförsök med syntetiskt dagvatten: PAH,
              ftalater och alkylfenoler i koncentrationer från 10 till 300 µg/l samt löst organiskt material blandades med
              materialen under 10 min till 24 h varefter kvarvarande halter föroreningar i vattenfasen analyserades. Materialen chitosan, cellulosa, zeolit, perlit och vermikulit uppvisade begränsad adsorption av de undersökta
              föroreningarna. Tallbark och plastfibrer kunde dock avlägsna minst 70 % av de flesta föroreningar. Obehandlad och behandlad tallbark från olika tillverkare uppvisade liknande adsorptionsförmåga; det är därför
              inte avgörande vilken tallbarksprodukt som används. En stor andel av föroreningarna adsorberades inom
              10 min kontakt med bark. Fortsatta studier bör fokusera på den praktiska tillämpningen av materialen och
              optimering av filteranläggningar, så att materialens adsorptionsförmåga utnyttjas till dess fulla potential.
            </p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/1227509/h/8e4bfe411ae1f0094e4f171ab6c4f8dd/vatten_2_2019_205%2B216_Chalmers">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://www.cesaer.org/img-cache/25a04vwvn7-chalmers_-v.43ad610a.png" alt="Utvärdering av filtermaterial för att avlägsna lösta organiska föroreningar i dagvatten, Chalmers tekniska högskola, 2019" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Rekommendationer för anläggning av konstgräsplaner, Svenska Fotbollsförbundet, april 2017</h3>
            <p>
              Mikroplast i haven är ett allt mer uppmärksammat miljöproblem. Det är bevisat att
              mikroplast har spridit sig till världens alla hav. Djur i haven äter mikroplasten i tron
              att det är mat vilket kan orsaka skada i matsmältningsorganen. Genom att djuren äter
              plasten ökas andelen mikroplaster i den marina näringskedjan och i värsta fall
              hamnar de i vår mat. Mikroplaster kan i sig själv innehålla höga halter av giftiga
              ämnen och binder lätt till sig andra giftiga ämnen.
            </p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977084/h/9022f31754a17c3d2c878f016afa453d/17+Rekommendationer+KG%2Banl%C3%A4ggning+%2B+Reviderad+version+2017%2B04%2B10+%28webb%29">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://www.svenskfotboll.se/48fcb2/globalassets/svff/bilderblock/logotyper/distriktsemblem/svff.svg" alt="Rekommendationer för anläggning av konstgräsplaner, Svenska Fotbollsförbundet, april 2017" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Dagvatten utvärdering filter, Provtagning Dagvatten Göteborg, december 2016</h3>
            <p>
              Kretslopp och Vatten, Göteborgs stad (KV), har genomfört ett pilotprojekt med tester av filter i
              dagvattenbrunnar för rening av dagvattnets innehåll. Projektet har genomförts på
              dagvattensystemet i området vid Sahlgrenska sjukhuset i Göteborg, där dagvattnet rinner ut i
              Vitsippsbäcken.
              Uppföljningen av filtrens funktion har gjorts genom mätning och provtagning på dagvattnet i
              området för avrinningsområdet till Vitsippsbäcken för situationen med filter installerade i
              brunnarna och efter att filtren har tagits bort.
            </p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977087/h/d0a262b908fc8d8bfec05965625f7484/12803415+KV+Dagvatten+provtagning+Sahlgrenska+v3+17_01_04">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://dst15js82dk7j.cloudfront.net/252829/71095419-sBi5t.png" alt="Dagvatten utvärdering filter, Provtagning Dagvatten Göteborg, december 2016" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Utbyte av filterkassetter, WSP, 2015-2016</h3>
            <p>Ett återvinningsföretag i Västerås ville byta ut sina filterkasetter av typen ”hänger i gallret” mot FlexiClean. WSP utförde tester och resultaten efter bytet visar att reningseffekten fördubblades.</p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977205/h/cde5c898e3fb8217ba61f91430955a2d/WSP+prover+V%C3%A4ster%C3%A5s+2016_j%C3%A4mf%C3%B6relse">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://h24-original.s3.amazonaws.com/252829/24431606-BnUYw.png" alt="Utbyte av filterkassetter, WSP, 2015-2016" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Kinetic sorption modelling of Cu, Ni, Zn, Pb and Cr ions to pine
              bark and blast furnace slag by using batch experiments, Mälardagens högskola, 2008</h3>
            <p>
              Storm water and landfill leachate can both contain significant amounts of toxic metals such as Zn, Cu, Pb, Cr and Ni. Pine bark and
              blast furnace slag are both residual waste products that have shown a large potential for metal removal from contaminated water. There
              are however many variables that must be optimized in order to achieve efficient metal retention. One of these variables is the time of
              which the solution is in contact with each unit of filter material. Metal sorption was studied in two laboratory experiments to improve
              the knowledge of the effects of contact time. The results showed that pine bark was generally more efficient than blast furnace slag when
              the metal concentrations were relatively small, whereas blast furnace slag sorbed most metals to a larger extent at increased metal loads.
              In addition, sorption to blast furnace slag was found to be faster than metal binding to pine bark. A pseudo-second-order kinetic model
              was able to describe the data well within 1000 s of reaction time.
            </p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977206/h/d3a971e1c05149518fa3300a8663b0ac/Nehrenheim_Gustafsson_2008">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://h24-original.s3.amazonaws.com/252829/24431623-FE0kl.png" alt="Kinetic sorption modelling of Cu, Ni, Zn, Pb and Cr ions to pine bark and blast furnace slag by using batch experiments, Mälardagens högskola, 2008" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>Provning av filter till dagvattenbrunn, SP Sveriges Provnings- och Forskningsinstitut AB, 2004</h3>
            <p>
              SP har på uppdrag av Aros Rör & Svets provat Flexi-Clean 400 filterkassett för
              dagvattenbrunnar med avseende på fl ödeskapacitet. Dagvattenbrulnen har kopplats samman med SPs flödesrigg for vattenfiirsörjning och
              flödesmäbring. Samtliga prov har utforts med rent vatten och vid rumstemperaturen ca.
              20 "c
            </p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977288/h/9d70a85192da6c23948c70d0fea90957/SP_fl%C3%B6destest">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://dst15js82dk7j.cloudfront.net/252829/71109976-Te4hm.png" alt="Provning av filter till dagvattenbrunn, SP Sveriges Provnings- och Forskningsinstitut AB, 2004" />
        </div>

        <div className="document-item">
          <div className="document-item-text">
            <h3 className='document-item-title'>PM - Kontrollprovtagning dagvattenrening, Munktellstaden Eskilstuna, Structor Miljöteknik, 2009</h3>
            <p>
              I samband med filterbyte i dagvattenbrunnar inom Munktellstaden har kontrollprovtagning
              av dagvattenfilter och dagvatten utförts.
              Uppdragets syfte är att kontrollera effekten av installerade filter i dagvattenbrunnarna
              samt få ett underlag för bedömning av intervall för filterbyte. Även föroreningsinnehållet i
              filtren skall kontrolleras för bedömning av lämpligt omhändertagande för avfallet.
            </p>
            <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977292/h/7360ae7969e44107d7c30eec60c31b70/PM+%2B+Kontrollprov+2+structor">
              <button className='btn btn-gray'>Ladda ner hela uppsatsen</button>
            </a>
          </div>
          <img src="https://dst15js82dk7j.cloudfront.net/252829/71110015-0BbhN.png" alt="PM - Kontrollprovtagning dagvattenrening, Munktellstaden Eskilstuna, Structor Miljöteknik, 2009" />
        </div>

      </div>
    </section>
  )
}

export default Documents