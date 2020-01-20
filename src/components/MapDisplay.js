import React from 'react';
import '../styles/MapDisplay.css'
import { render } from '@testing-library/react';
import img from '../assets/google_map.jpg'





class MapDisplay extends React.Component{
    constructor(){
        super();
    }

    render(){

  
    return(
        <>

<div className='map-con'>

<div className='map-header'>
<h1>eMap</h1>
</div>

<div className='map-details'>

<p>Find a relaxing spot near you.</p>


<a href='https://www.google.ca/maps/@43.4735855,-80.544195,13z' target='_blank'>
<img src='https://i.pinimg.com/originals/68/1b/64/681b649fbe64ce4760d399689d98cf16.png'></img>
</a>

 </div>

</div>


        </>
    )
}
}


export default MapDisplay;