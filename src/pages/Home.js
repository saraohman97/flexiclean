import { useState } from 'react'
import img from '../assets/28712055-9XX6s.jpg'
import ArticleList from '../components/ArticleList'
import bg from '../assets/bg.jpg'

const Home = () => {
    const [sQuery, setSQuery] = useState('')

    return (
        <>
            <header className='h-screen'>
                <img src={bg} className='h-full w-full object-cover' alt="" />
                <div className="container mx-auto flex justify-center h-full flex-col absolute inset-0 mt-20 text-white">
                    <h1 className='text-6xl'>Välkommen till <br /> FlexiClean</h1>
                    <p className='text-xl w-4/6'>Idag rinner tusentals liter olja och tungmetaller rakt ut ur städerna i sällskap med regn- och smutsvatten från vägar och parkeringsplatser.  FlexiClean har tagit fram en filterhållaren som renar dagvattnet. </p>
                </div>
            </header>

            <section className='container mx-auto flex flex-row gap-10 my-20'>
                <main className="flex-1">

                    <h1 className='text-4xl mb-10'>Västmanlands miljö- och <br /> klimatpris 2019</h1>
                    <div className='w-full'><img src={img} alt="Peder Eneroth och Micheal Eneroth vinner västmanlands miljö- och klimatpris 2019" /></div>
                    <p>
                        <br /><h3 className='text-xl'>Juryns motivering</h3>
                        <br />Västmanlands miljö- och klimatpris 2019 går till FlexiClean AB för sitt arbete med att förbättra vattenmiljöer genom att ta tag i en av vår tids stora miljöproblem, kemikalier som sprids i dagvattnet. FlexiClean har utvecklat filter som fångar upp tungmetaller, oljeföroreningar och även PFAS. PFAS är cancerframkallande ämnen som bland annat finns i våra textilier och ibland beskrivs som vår tids värsta miljögift.
                        <br /> <br />FlexiClean har även tagit sig fram och hittat en lösning kring mikroplaster som sprids från konstgräsplaner. Genom att på det här sättet förbättra våra vattenmiljöer har Flexiclean på ett förtjänstfullt sätt bidragit till att Västmanland har tagit ett viktigt steg vidare till Miljö- och klimatrådets vision, ett län som är miljö- och klimatförebild 2030. Och klimatförebild 2030.
                        <br /> <br /><h3 className='text-xl'>Våra nomineringar genom åren</h3>
                        <br />2006: Finalist. Sustainble Stockholm Award.
                        <br />2007: Vinnare. Västerås Stads Miljöpris.
                        <br />2015: Finalist. Deep Green Challenge, SKANSKA.
                        <br />2016: Finalist. Västerås Stads Miljöpris
                        <br />2019. Finalist innovationstävling SKAPA.
                        <br />2019. Vinnare. Västmanlands Klimat- och Miljöpris.
                    </p>

                    <h1 className='home-main-subtitle'>FlexiClean</h1>
                    <div className='home-images-wrapper'>
                        <img src='https://dst15js82dk7j.cloudfront.net/252829/72746504-FugNx.jpg' alt="" />
                        <img src='https://h24-original.s3.amazonaws.com/252829/24452359-1YbU8.jpg' alt="" />
                        <img src='https://dst15js82dk7j.cloudfront.net/252829/78558023-2311B.jpg' alt="" />
                    </div>
                    <p>FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten. Produkten bygger på djup kunskap om dagvatten och dagvattenbrunnar och en förståelse för de utmaningar kommuner och privata aktörer ställs inför varje dag. FlexiClean är laddad med egenskaper som avsevärt förbättrar och förenklar arbetet med inspektion och underhåll av brunnen. Och den kan anpassas för rening i alla tänkbara miljöer.</p>
                    <br />
                    <h4 className='text-xl'>En insats för bättre vatten</h4>
                    <br />
                    <p>Orenat dagvatten kan orsaka stora miljöproblem och skada våra vattenresurser. Idag rinner tusentals liter med olja och tungmetaller ut i städernas recipienter i sällskap med regn- och smältvatten från vägar, parkeringsplatser och andra ytor. Det är inte hållbart, varken ekologiskt eller ekonomiskt. Men i takt med nya miljömål och riktlinjer ställer myndigheterna allt hårdare krav på vattenhantering och vattenkvalitet. Just nu ser många kommuner över reningen av dagvattnen, både i befintliga brunnar och vid ny exploatering och bebyggelse. Enbart hanteringen av det befintliga beståndet är ett digert arbete. En större stad har över 10 000 brunnar och många är i akut behov av rening. För att dagvattnet ska ses som en resurs istället för ett problem krävs teknik och produkter som är anpassade för arbetet med dagvattenbrunnarna. FlexiClean är en sådan produkt. Vårt bidrag i omställningen till en bättre rening av dagvatten. En gatusmart insats för miljö och arbetsmiljö.</p>
                    <br />
                    <h4 className='text-xl'>GÖR BÅDE SITT OCH ANDRAS JOBB</h4>
                    <br />
                    <p>Produkten ska naturligtvis göra sitt jobb i brunnen och rena dagvattnet. Men det räcker inte. De som sköter underhållet ska också kunna göra sitt jobb. Att minska antalet lyft blir allt viktigare, särskilt när utveckling går mot fler brunnar med filter som ska inspekteras och bytas. <br /> <br />
                        I det avseendet blir FlexiClean ett lyft, men inte ett onödigt sådant. Hållaren upptar maximalt 50 procent av en brunns tvärsnittyta och behöver inte lyftas upp för att avgöra graden av mekanisk eller kemisk igensättning. Den behöver heller inte lyftas upp vid slamsugning eller ångning. Slangen får plats ändå. Och när det väl är dags att byta filter är det bara att dra ut insatsen, kassetten som utgör produktens inre del. All användarvänlighet kapar naturligtvis tid och minskar antalet moment i arbetet − det spar både pengar och ryggar. Att produkten ger en bättre arbetsmiljö är bra, men den ska också fungera i flera olika miljöer. Därför är FlexiClean inte anpassad för ett speciellt ändamål och kan därmed sanera gångtunnlar lika bra som bensinstationer och parkeringshus. Tur är väl det, för det finns varken universalfilter eller lyckobrunnar. Bara önsketänkande och visioner kring miljön som kräver hårt arbete för att förverkliga. En bra start är att investera i en filterhållare värd vatten.</p>

                    <h1 className='text-4xl'>Historia</h1>
                    <div className='home-main-img'>
                        <img src='https://dst15js82dk7j.cloudfront.net/252829/72745337-3J24D.jpg' alt="" />
                    </div>
                    <br />
                    <p>Produkten FlexiClean togs fram av Leif Eneroth tillsammans med stöd och hjälp från Mälardalens Högskola MDH redan 2004, detta inom bolaget AB Aros Rör & Svets. 2009 antogs FlexiClean i inkubatorprogrammet Stockholm Innovation and Growth (STING) och bolaget FlexiClean AB grundades i Kista. Efter ”examen” 2011 flyttades bolaget tillbaka till Västerås där vi idag delar lager och verkstad med AB Aros Rör & Svets.
                        <br /> <br />
                        2004: FlexiClean lanserades på marknaden.
                        <br />
                        2004: FlexiClean blir varumärkesskyddat #  368 232
                        <br />
                        2005: Ansökan om ett europeiskt patent lämnades in.
                        <br />
                        2006: Pristagare. Sustainble Stockholm Award/Hammarby Sjöstads Miljöteknik tävling.
                        <br />
                        2007: Vinnare. Vi I Världen, Västerås Stads Miljöpris.
                        <br />
                        2009: FlexiClean blir antagna till STING (Stockholm Innovation & Growth) inkubatorprogram
                        <br />
                        2009. FlexiClean AB grundades.
                        <br />
                        2010: FlexiClean AB går med i ett dagvattenkluster på Chalmers Teknikpark
                        <br />
                        2010: FlexiClean får europeiskt patent # 1 514 971
                        <br />
                        2010: Världsklassavtal mellan Stockholms Stad och FlexiClean AB Avseende Norra Djurgårdsstaden.
                        <br />
                        2011: Examen Stockholm Innovation & Growth Buisness Accelerator.
                        <br />
                        2011: FlexiClean AB är med och grundar Remedy By Sweden AB, Eskilstuna.
                        <br />
                        2011: FlexiClean AB är med och grundar Rent Dagvatten AB, Göteborg.
                        <br />
                        2015: Finalist. Deep Green Challenge, SKANSKA miljötekniktävling.
                        <br />
                        2016: Finalist. Västerås Stads Miljöpris
                        <br />
                        2018. Som första fabrikant i världen presenterar FlexiClean ett granualtfilter som renar tungmetaller, näringsämnen, oljor och partiklar ned till 42my
                        <br />
                        2019. Finalist Länsstyrelsen Västmanlands innovationstävling SKAPA.
                        <br />
                        2019. Vinnare. Västmanlands Klimat- och Miljöpris.
                    </p>
                </main>

                <ArticleList sQuery={sQuery} />
            </section>
        </>
    )
}

export default Home