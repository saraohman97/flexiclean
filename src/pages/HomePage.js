import React from 'react'
import Collaborators from '../components/Collaborators'

const HomePage = () => {
  return (
    <div className='home-page'>

      <div className="home-header">
        <div className="container">
          <div className="home-text">
            <h1>Det finns inga önskebrunnar. Men väl en lyckosam lösning.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum earum officiis ad neque unde molestias dicta ex commodi fugit eligendi! Libero inventore perferendis enim minus fugit nulla consectetur asperiores delectus unde! Nihil aliquid ducimus pariatur iste doloribus animi veniam? Error.</p>
          </div>
        </div>
      </div>

      <Collaborators />
    </div>
  )
}

export default HomePage