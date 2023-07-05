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
      <section className='section projects-hero'>
        <div className="montage-hero-heading">
          <h1 className='projects-hero-title'>Montage</h1>
          <p className='projects-hero-subtitle'>Montering & byte av filterdynor är busenkelt</p>
        </div>

        <div className="montage-wrapper">
          <div className="montage-focused">
            <iframe className='montage-focused-video' src={!switchVideo ? 'https://www.youtube.com/embed/HU7RE3Jm3bE?autoplay=1&mute=1' : 'https://www.youtube.com/embed/ZK2RtdIK_e0?autoplay=1&mute=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1 className='montage-focused-title'>{!switchVideo ? 'Installation.wmv' : 'Filterbyte.wmv'}</h1>
            <div className="montage-focused-heading">
              <a href='https://www.youtube.com/@FlexiClean' className='montage-user'>
                <h4 className='montage-user-icon'>F</h4>
                <small>FlexiClean</small>
              </a>
              <div className="btn-wrapper">
                <a href="https://www.youtube.com/watch?v=HU7RE3Jm3bE"><button className='btn btn-gray'>Ladda ner</button></a>
                <a href="https://www.youtube.com/watch?v=HU7RE3Jm3bE"><button className='btn btn-gray'>Dela</button></a>
              </div>
            </div>
          </div>

          <div className="montage-suggestion-videos">
            <div className="montage-videos-item" onClick={toggleSwitchVideo}>
              <img src={!switchVideo ? video : video2} className='montage-video' alt="flexiclean drift- och skötselanvisning" />
              <h4 className='montage-title'>{switchVideo ? 'Installation.wmv' : 'Filterbyte.wmv'}</h4>
            </div>
            <a href='https://www.flexiclean.eu/Homepage/Download-File/f/977202/h/4ec555ee46f78678e4a7b7418b1dfd18/FlexiClean_driftochunderh%C3%A5ll' className="montage-videos-item">
              <img src={montagePDF} className='montage-video' alt="" />
              <h4 className='montage-title'>Drift- och skötselanvisning</h4>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Montage