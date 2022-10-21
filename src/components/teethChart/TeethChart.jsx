import React, { useState } from 'react'
import teethTop from '../../assets/teethbacktop.png'
import teethBottom from '../../assets/teethbackalt.png'
import './teethChart.scss'
import  {teeth} from '../../helper/teethChartData'

const TeethChart = () => {

 const [selectedTooth,setSelectedTooth] = useState("")

  const handlemouseover = e => {
    console.log(e.target.alt)
    for (let i = 1; i <= 16; i++) {
      if (e.target.alt ===`toptooth-${i}`){
        document.querySelector(`.toptooth-${i}`).style.backgroundColor = '#07c3f7'
      }else if (e.target.alt ===`bottomtooth-${i}`){
        document.querySelector(`.bottomtooth-${i}`).style.backgroundColor = '#07c3f7'
      }
      
    }
   
  }

  const handlemouseout = e => {
    for (let i = 1; i <= 16; i++) {
      if (e.target.alt ===`toptooth-${i}`){
        if(setSelectedTooth===`toptooth-${i}`){

          document.querySelector(`.toptooth-${i}`).style.backgroundColor = '#ed7607'
          console.log(setSelectedTooth,"true");
        }else {
          document.querySelector(`.toptooth-${i}`).style.backgroundColor = 'white'
          console.log(setSelectedTooth,"false");

        }
      }else if (e.target.alt ===`bottomtooth-${i}`){

        if(setSelectedTooth===`bottomtooth-${i}`){

          document.querySelector(`.bottomtooth-${i}`).style.backgroundColor = '#ed7607'
        }else {
          document.querySelector(`.bottomtooth-${i}`).style.backgroundColor = 'white'

        }

      }
      
    }

  }
  
  const handleclick = (e) => {
    for (let i = 1; i <= 16; i++) {
      if (e.target.alt ===`toptooth-${i}`){
          setSelectedTooth(e.target.alt) 
          console.log(e.target.alt);  
          document.querySelector(`.toptooth-${i}`).style.backgroundColor = '#ed7607'
        }else if (e.target.alt ===`bottomtooth-${i}`){
          setSelectedTooth(e.target.alt)
          document.querySelector(`.bottomtooth-${i}`).style.backgroundColor = '#ed7607'
      }
      
    }
  }
  return (
    <div className="teeth-chart">
      <div className="teeth-chart-top">
        <h2 className="head">ÜST</h2>
        
        <div className="toptooth-1 tooth">1</div>
        <div className="toptooth-2 tooth">2</div>
        <div className="toptooth-3 tooth">3</div>
        <div className="toptooth-4 tooth">4</div>
        <div className="toptooth-5 tooth">5</div>
        <div className="toptooth-6 tooth">6</div>
        <div className="toptooth-7 tooth">7</div>
        <div className="toptooth-8 tooth">8</div>
        <div className="toptooth-9 tooth">9</div>
        <div className="toptooth-10 tooth">10</div>
        <div className="toptooth-11 tooth">11</div>
        <div className="toptooth-12 tooth">12</div>
        <div className="toptooth-13 tooth">13</div>
        <div className="toptooth-14 tooth">14</div>
        <div className="toptooth-15 tooth">15</div>
        <div className="toptooth-16 tooth">16</div>
        <img src={teethTop} alt="teeth" usemap="#topteeth" />
        <map name="topteeth">
          {teeth.map((tooth)=>(

          <area
            shape="rect"
            coords={tooth.topCoords}
            alt={tooth.topAlt}
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
            onClick={e => handleclick(e)}
          />
          ))}
        
        </map>
      </div>

      <div className="teeth-chart-bottom">
        <h2 className="head">ALT</h2>
        <div className="bottomtooth-1 tooth">1</div>
        <div className="bottomtooth-2 tooth">2</div>
        <div className="bottomtooth-3 tooth">3</div>
        <div className="bottomtooth-4 tooth">4</div>
        <div className="bottomtooth-5 tooth">5</div>
        <div className="bottomtooth-6 tooth">6</div>
        <div className="bottomtooth-7 tooth">7</div>
        <div className="bottomtooth-8 tooth">8</div>
        <div className="bottomtooth-9 tooth">9</div>
        <div className="bottomtooth-10 tooth">10</div>
        <div className="bottomtooth-11 tooth">11</div>
        <div className="bottomtooth-12 tooth">12</div>
        <div className="bottomtooth-13 tooth">13</div>
        <div className="bottomtooth-14 tooth">14</div>
        <div className="bottomtooth-15 tooth">15</div>
        <div className="bottomtooth-16 tooth">16</div>
        <img src={teethBottom} alt="teeth" usemap="#bottomteeth" />
        <map name="bottomteeth">
        {teeth.map((tooth)=>(

<area
  shape="rect"
  coords={tooth.bottomCoords}
  alt={tooth.bottomAlt}
  onMouseOver={e => handlemouseover(e)}
  onMouseOut={e => handlemouseout(e)}
  onClick={e => handleclick(e)}
/>
))}
    
        </map>
      </div>
    </div>
  )
}

export default TeethChart
