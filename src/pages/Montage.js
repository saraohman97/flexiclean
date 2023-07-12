import React, { useState } from 'react'
import video from '../assets/video.png'
import video2 from '../assets/video2.png'
import montagePDF from '../assets/montagePDF.png'

const Montage = () => {
  const [switchVideo, setSwitchVideo] = useState(false)

  const toggleSwitchVideo = () => {
    switchVideo
      ? setSwitchVideo(false)
      : setSwitchVideo(true)
  }

  return (
    <>
      <section className='container mx-auto px-20 my-32'>
        <div className="flex justify-between items-center pb-6">
          <h1 className='text-4xl'>Montage</h1>
          <p className='text-gray-400'>Montering & byte av filterdynor är busenkelt</p>
        </div>

        <div className="flex gap-10">
          <div className="flex-1">
            <iframe className='w-full h-full' src={!switchVideo ? 'https://www.youtube.com/embed/HU7RE3Jm3bE?autoplay=1&mute=1' : 'https://www.youtube.com/embed/ZK2RtdIK_e0?autoplay=1&mute=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1 className='text-xl mt-1'>{!switchVideo ? 'Installation.wmv' : 'Filterbyte.wmv'}</h1>
            <div className="flex justify-between items-center">
              <a href='https://www.youtube.com/@FlexiClean' className='flex items-center gap-2 mt-1'>
                <h4 className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center'>F</h4>
                <small>FlexiClean</small>
              </a>

              <div className="flex gap-4">
                <a href="https://www.youtube.com/watch?v=HU7RE3Jm3bE"><button className='btn btn-gray'>Ladda ner</button></a>
                <a href="https://www.youtube.com/watch?v=HU7RE3Jm3bE"><button className='btn btn-gray'>Dela</button></a>
              </div>
            </div>
          </div>

          <div className="w-72 flex flex-col justify-between gap-10">
            <div className='rounded-xl bg-gray-200 flex-1 hover:scale-105' onClick={toggleSwitchVideo}>
              <img src={!switchVideo ? video : video2} className='rounded-t-xl' alt="flexiclean drift- och skötselanvisning" />
              <h4 className='p-2'>{switchVideo ? 'Installation.wmv' : 'Filterbyte.wmv'}</h4>
            </div>
            <a href='https://www.flexiclean.eu/Homepage/Download-File/f/977202/h/4ec555ee46f78678e4a7b7418b1dfd18/FlexiClean_driftochunderh%C3%A5ll'>
              <div className="rounded-xl bg-gray-200 flex-1 hover:scale-105">
                <img src={montagePDF} className='rounded-t-xl h-32 w-full object-cover border border-gray-200' alt="" />
                <h4 className='p-2'>Drift- och skötselanvisning</h4>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Montage