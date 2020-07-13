import React from 'react'

export default ({ heading, image, text }) => <div className="card">
  <div className="image-container">
    <img src={image}/>
  </div>
  <h3>{heading}</h3>
  <p>{text}</p>
</div>