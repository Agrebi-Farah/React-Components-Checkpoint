import React from 'react' ;
import image from '../Profile/farah.jpg';
import './profilePhotos.css';
function profilePhotos() {
    return (
        <div >
             <img className="profile" src={image} alt='image de farah'/>  
        </div>
    )
}

export default profilePhotos
