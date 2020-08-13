/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import image from './image.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
      <img src={image} alt='image' style={{'width':'30px','height':'30px'}}>
      </img>
      <p>size <strong>s</strong> with 30x30</p>
      <p>type <strong>Square</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'30px','height':'30px', 'borderRadius':'8px'}}>
      </img>
      <p>size <strong>s</strong> with 30x30</p>
      <p>type <strong>rounded</strong> </p>
      </div><div>
      <img src={image} alt='image' style={{'width':'30px','height':'30px','borderRadius':'50%'}}>
      </img>
      <p>size <strong>s</strong> with 30x30</p>
      <p>type <strong>circle</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'60px','height':'60px'}}>
      </img>
      <p>size <strong>m</strong> with 60x60</p>
      <p>type <strong>Square</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'60px','height':'60px','borderRadius':'8px'}}>
      </img>
      <p>size <strong>m</strong> with 60x60</p>
      <p>type <strong>rounded</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'60px','height':'60px', 'borderRadius':'50%'}}>
      </img>
      <p>size <strong>m</strong> with 60x60</p>
      <p>type <strong>circle</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'120px','height':'120px'}}>
      </img>
      <p>size <strong>l</strong> with 120x120</p>
      <p>type <strong>Square</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'120px','height':'120px','borderRadius':'8px'}}>
      </img>
      <p>size <strong>l</strong> with 120x120</p>
      <p>type <strong>rounded</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'120px','height':'120px','borderRadius':'50%'}}>
      </img>
      <p>size <strong>l</strong> with 120x120</p>
      <p>type <strong>circle</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'200px','height':'200px'}}>
      </img>
      <p>size <strong>xl</strong> with 200x200</p>
      <p>type <strong>Square</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'200px','height':'200px','borderRadius':'8px'}}>
      </img>
      <p>size <strong>xl</strong> with 200x200</p>
      <p>type <strong>rounded</strong> </p>
      </div>
      <div>
      <img src={image} alt='image' style={{'width':'200px','height':'200px','borderRadius':'50%'}}>
      </img>
      <p>size <strong>s</strong> with 200x200</p>
      <p>type <strong>circle</strong> </p>
      </div>
      
    </div>
  );
}


export default App;