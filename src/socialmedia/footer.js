import React from 'react' ;
import facebook from 'facebook.png';
import youtube from 'youtube.png' ;
import github from 'github.png' ;

function footer() {
    return (
        <div className="footer">
        <img src ={facebook} alt="Facebook" />
        <img src ={youtube} alt="YouTube" />
        <img src ={github} alt="Github" />
        </div>
    )
}

export default footer
