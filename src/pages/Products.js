import React from 'react'
import product_one from '../assets/product1.jpg'
import product_two from '../assets/product.two.png'
import kalmar from '../assets/kalmar.png'
import vasteras from '../assets/vasteras.jpg'
import img from '../assets/header-products.jpg'
import { Link, useNavigate } from 'react-router-dom'
import part1 from '../assets/part1.jpg'
import part2 from '../assets/part2.jpg'
import part3 from '../assets/part3.jpg'

const Products = ({ setOrder }) => {
  return (
    <>
      <section className='container mx-auto mt-40 px-20 max-md:px-2'>
        <div className="flex justify-between mb-10 mx-10 max-md:mx-0 items-end max-md:flex-col">
          <h1 className='text-4xl'>Produkter</h1>
          <p className='text-gray-500'>Upptäck vårt utbud av kassetter</p>
        </div>
        <img src={img} className='w-full' alt="Brunn i staden vid soluppgång" />
        <p className='w-5/6 mt-4'>FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten. Produkten bygger på djup kunskap om dagvatten och dagvattenbrunnar och en förståelse för de utmaningar kommuner och privata aktörer ställs inför varje dag. FlexiClean är laddad med egenskaper som avsevärt förbättrar och förenklar arbetet med inspektion och underhåll av brunnen. Och den kan anpassas för rening i alla tänkbara miljöer.</p>
        <Link to='/dokumentcenter'>
          <button className='btn btn-gray mt-4'>Läs mer</button>
        </Link>
      </section>

      {/* first product section */}
      <section className='container mx-auto flex flex-row-reverse justify-around items-center max-md:flex-col my-20 max-md:my-20 max-md:px-2'>
        <div className='flex-1 flex justify-center'>
          <img src={product_one} className='object-contain h_450 max-md:h-80' alt="FlexiClean filterkassett för dagvattenrening" />
        </div>

        <div className='flex-1 ml-20 max-md:ml-0'>
          <h1 className='text-4xl mb-4'>FlexiClean filterkassett för dagvattenrening</h1>
          <p><strong>FlexiClean är filterkassett för rening av dagvatten passar i brunnar med innerdiameter 350 - 1000 mm. filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas.</strong> <br /> <br />Kassetten flödar 160 l/min filtrerat vatten och är försedd med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. Att tänka på. FlexiClean  kräver minst 800mm/1000 djup i brunnen och med slät innersida på brunnen. Teleskopbeteckning kan försvåra montaget. Tänk dessutom på att ”hålet” i beteckningen måste vara ca 300mm i diameter”.</p>
          <div className='flex gap-6 mt-10'>
            <button className='btn btn-blue' onClick={() => setOrder(true)}>Beställ</button>
            <details>
              <summary className='btn btn-gray'>Se storlekar</summary>
              <table>
                <tr>
                  <th><p>Artikelnummer</p></th>
                  <th><p>Passar till brunn</p></th>
                  <th><p>Filtertyp</p></th>
                </tr>
                <tr>
                  <td>100100 FC408SA</td>
                  <td>350-450 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100101 FC410SA</td>
                  <td>350-450 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100102 FC508SA</td>
                  <td>500 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100103 FC510SA</td>
                  <td>500 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100104 FC608SA</td>
                  <td>600 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100105 FC610SA</td>
                  <td>600 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100106 FC1008SA</td>
                  <td>1000 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100107 FC1010SA</td>
                  <td>1000 mm</td>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <td>100113 Filterdyna</td>
                  <td>600 mm</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>100114 Filterdyna</td>
                  <td>800 mm</td>
                  <td>800 mm</td>
                </tr>
              </table>
            </details>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-40 w-1/2 max-md:h-20" />
      {/* second product section */}
      <section className='flex items-center relative gap-20 max-md:flex-col'>
        <div className="bg-gray-100 h-full w-1/2 absolute z-0 inset-0" />
        <div className='flex-1 flex justify-center z-0 pl-20 max-lg:pl-0'>
          <img src={product_two} className='object-contain h_450 max-sm:h-80' alt="FlexiClean filterkassett för granulatrening" />
        </div>

        <div className="container mx-auto flex-1 pl-20 pr-40 z-10 max-lg:pl-0 max-lg:pr-10 max-md:pr-2 max-md:pl-2">
          <h1 className='text-4xl mb-4'>FlexiClean filterkassett för dagvatten och granulatfiltrering (Fotbollskassetten)</h1>
          <p> <strong>FlexiClean granulatfilter rening av dagvatten samt filtrering av granulat passar i brunnar med innerdiameter 350 - 1000 mm. filtret renar tungmetaller, näringsämnen, oljor, PAH och Pfas, samt filtrerar partiklar ned till 42 mikrometer. </strong> <br /> <br /> Kassetten flödar 45 l/min filtrerat vatten och filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.

            Att tänka på. FlexiClean Granulat samt kräver minst 800/1000 mm djup i brunnen och med slät innersida på brunnen. Teleskopbeteckning kan försvåra montaget. Tänk dessutom på att ”hålet” i beteckningen måste vara ca 330mm i diameter".</p>
          <div className='flex gap-6 mt-10'>
            <button className='btn btn-blue' onClick={() => setOrder(true)}>Beställ</button>
            <details>
              <summary className='btn btn-gray'>Se storlekar</summary>
              <table className='showcase2-table'>
                <tr>
                  <th><p>Artikelnummer</p></th>
                  <th><p>Passar till brunn</p></th>
                </tr>
                <tr>
                  <td>200100 FC 408 Granulat</td>
                  <td>350-450 mm</td>
                </tr>
                <tr>
                  <td>200102 FC 508 Granulat</td>
                  <td>500 mm</td>
                </tr>
                <tr>
                  <td>200103 FC 608 Granulat</td>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <td>200104 FC 1008 Granulat</td>
                  <td>1000 mm</td>
                </tr>
                <tr>
                  <td>100113 Filterdyna 600mm</td>
                  <td>600 mm</td>
                </tr>
              </table>
            </details>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 h-72 w-1/2 max-md:h-20" />

      {/* third section */}
      <section className='my-20 flex justify-center items-center'>
        <div className='w_450'>
          <h1 className='text-4xl mb-10'>Västerås Stad</h1>
          <p>Tidigare har Västerås Stad redovisade sina resultat efter tester av FlexiClean graulatfilter. Tillsammans med ett fantastiskt arbete av driftpersonalen på Västerås Stad och FlexiClean granulatfilter kunde man rapportera NOLL utsläpp av granulat i dagvattnet.<br /> <br />”Kalmar-rapporten” Sveriges första vetenskapliga studie av spridningen av mikroplast från en konstgräsplan är publicerad: Den potentiella mikroplastspridningen var 54.9 kg, allt utom 100 gram kunde stoppas med skötselåtgärder och 10,7 gram gummigranulat spreds till dagvattennätet.</p>
          <div className='flex items-center gap-10 mt-10'>
            <a href='https://www.flexiclean.eu/Homepage/Download-File/f/1226420/h/bda295b64c67f79a461bf7332e640edd/RAPPORT+%2B+Mikroplastspridning+fr%C3%A5n+en+modernt+utformad+konstgr%C3%A4splan+med+skydds%C3%A5tg%C3%A4rder' className="bg-indigo-100 rounded-2xl flex-1 text-center h-48">
              <img src={kalmar} alt="kalmar rapporten för bättre dagvattenrening av FlexiClean" className='rounded-t-2xl h-32 w-full object-cover' />
              <p className='p-1'>Läs Kalmar- <br />rapporten</p>
            </a>
            <a href='https://www.flexiclean.eu/Homepage/Download-File/f/1183421/h/1eebd9a8d8176c2b314ce13813cc886b/framtida_handtering_av_konstgr%C3%A4splaner_i_V%C3%A4ster%C3%A5s_stad' className="bg-indigo-100 rounded-2xl flex-1 text-center h-48">
              <img src={vasteras} alt="västerås rapporten för bättre dagvattenrening av FlexiClean" className='rounded-t-2xl h-32 w-full object-cover' />
              <p className='p-1'>Läs Västerås- <br />rapporten</p>
            </a>
          </div>
        </div>
      </section>

      {/* forth section */}
      <section className='container mx-auto bg-gray-100 flex flex-col px-10 py-20 gap-20 mb-20'>
        <h1 className='text-4xl text-center'>Filterkassettens uppbyggnad</h1>

        <div className="flex gap-10 max-md:flex-col">
          <div className="flex-1 flex flex-col gap-4">
            <img src={part3} alt="flexiclean filterpåse med furubark och träflis för filtrering av dagvatten" />
            <strong>Filterpåsen</strong>
            <p>Filterpåsen består av restprodukter ifrån träindustrin. Påsen innehåller 85% furubark och 15% träflis. Påsen bytes normalt sett en gång per år.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <img src={part2} alt="flexiclean finfilter kassett för block av föremål" />
            <strong>Finkassetten</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo vel iure dolorem ad temporibus cumque itaque provident eos iste eum enim tempora vero atque debitis, voluptatibus, dolores fugiat porro?</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <img src={part1} alt="flexiclean filter kassett för block av föremål" />
            <strong>Kassette</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero! Distinctio deleniti eum aspernatur ad eveniet iure ipsa, reprehenderit sequi reiciendis earum repudiandae quam culpa voluptatibus consequuntur, natus atque quasi.</p>
          </div>
        </div>

        <Link to='/kontakta-oss' className='self-center'>
          <button className='btn btn-blue'>Kontakta oss för mer information</button>
        </Link>
      </section>
    </>
  )
}

export default Products