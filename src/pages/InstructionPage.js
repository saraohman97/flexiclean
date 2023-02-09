import React from 'react'

const InstructionPage = () => {
    return (
        <div className='instruction-page'>
            <div className="container">
                <h2>Instruktioner</h2>

                <div className='gap'>
                    <div>
                        <h3>Montage av FlexiClean dagvattenfilter</h3>
                        <p>Montage görs av två personer utan specialverktyg på drygt 2 minuter.</p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HU7RE3Jm3bE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className='gap'>
                    <div>
                        <h3>Byte av filterpåsar</h3>
                        <p>Filter bytes av en person utan specialverktyg på drygt 1,5 minut.</p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZK2RtdIK_e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="gap">
                    <h3>Skötsel</h3>
                    <div className='instruction-text'>
                        <p>Anvisningar för montering injustering och skötsel. Ladda ner pdf <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977202/h/4ec555ee46f78678e4a7b7418b1dfd18/FlexiClean_driftochunderh%C3%A5ll"> här.</a></p>
                    </div>
                </div>


            </div>

        </div >
    )
}

export default InstructionPage