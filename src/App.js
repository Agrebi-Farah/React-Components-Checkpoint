import React from 'react' ;
import './App.css';
import Adress from './Component/Profile/adress';
import Introductions from './Component/Profile/introductions';
import Fullname from './Component/Profile/fullname';
import ProfilePhotos from './Component/Profile/profilePhotos';
import autumn from './autumn.jpg';
import facebook from './socialmedia/facebook.png';
import github from './socialmedia/github.png' ;
import youtube from './socialmedia/youtube.png' ;
function App() {
  return (
    <div className="container">
      <div className="card">
          < div className="background" >
           <img className="background" src = {autumn} alt="autumn"  />
            </div>
            <br/>
            <br/>   
            <br/> 
            <br/>      
<div className="main">
<Fullname/>
<br/>
<Introductions/>
<br/>
<Adress/>
</div>
<div className="photo">
<ProfilePhotos/>
</div>

      </div>
      <div className="social">
         <a href="https://https://www.facebook.com/farah.agrebi.10/" >
         <img className="facebook" src = {facebook} alt = "facebook" />
         </a>
        <a href="https://https://github.com/Agrebi-Farah" >
          <img className="github" src = {github} alt = "github"  />
        </a>
       < a href="https://https://https://www.youtube.com/" >
         <img className="youtube" src = {youtube} alt = "youtube"  />
       </a>
      </div>
      
    </div>
  );
}

export default App;
