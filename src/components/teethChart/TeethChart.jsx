import React from 'react'
import teethTop from '../../assets/teethbacktop.png'
import teethBottom from '../../assets/teethbackalt.png'
import './teethChart.scss'

const TeethChart = () => {

  const teeth=[
    {
      id:1,
      topAlt:"toptooth-1",
      bottomAlt:"bottomtooth-1",
      topCoords:"45,131,63,148",
      bottomCoords:"48,18,66,38",
    },
    {
      id:2,
      topAlt:"toptooth-2",
      bottomAlt:"bottomtooth-2",
      topCoords:"45,111,63,128",
      bottomCoords:"54,38,74,58",
    },
{
      id:3,
      topAlt:"toptooth-3",
      bottomAlt:"bottomtooth-3",
      topCoords:"50,90,73,110",
      bottomCoords:"57,54,82,78",
    },
{
      id:4,
      topAlt:"toptooth-4",
      bottomAlt:"bottomtooth-4",
      topCoords:"59,77,77,90",
      bottomCoords:"67,74,86,92",
    },
{
      id:5,
      topAlt:"toptooth-5",
      bottomAlt:"bottomtooth-5",
      topCoords:"67,60,85,80",
      bottomCoords:"73,84,88,104",
    },
{
      id:6,
      topAlt:"toptooth-6",
      bottomAlt:"bottomtooth-6",
      topCoords:"76,48,93,65",
      bottomCoords:"83,102,98,114",
    },
{
      id:7,
      topAlt:"toptooth-7",
      bottomAlt:"bottomtooth-7",
      topCoords:"90,43,105,57",
      bottomCoords:"95,106,109,120",
    },
{
      id:8,
      topAlt:"toptooth-8",
      bottomAlt:"bottomtooth-8",
      topCoords:"103,37,120,56",
      bottomCoords:"",
    },
{
      id:9,
      topAlt:"toptooth-9",
      bottomAlt:"bottomtooth-9",
      topCoords:"120,37,136,55",
      bottomCoords:"",
    },
{
      id:10,
      topAlt:"toptooth-10",
      bottomAlt:"bottomtooth-10",
      topCoords:"137,39,149,55",
      bottomCoords:"",
    },
{
      id:11,
      topAlt:"toptooth-11",
      bottomAlt:"bottomtooth-11",
      topCoords:"148,49,164,65",
      bottomCoords:"",
    },
{
      id:12,
      topAlt:"toptooth-12",
      bottomAlt:"bottomtooth-12",
      topCoords:"155,60,174,76",
      bottomCoords:"",
    },
{
      id:13,
      topAlt:"toptooth-13",
      bottomAlt:"bottomtooth-13",
      topCoords:"163,77,180,91",
      bottomCoords:"",
    },
{
      id:14,
      topAlt:"toptooth-14",
      bottomAlt:"bottomtooth-14",
      topCoords:"167,90,189,111",
      bottomCoords:"",
    },
{
      id:15,
      topAlt:"toptooth-15",
      bottomAlt:"bottomtooth-15",
      topCoords:"172,109,192,132",
      bottomCoords:"",
    },
{
      id:16,
      topAlt:"toptooth-16",
      bottomAlt:"bottomtooth-16",
      topCoords:"177,130,197,150",
      bottomCoords:"",
    },

  ]

  const handlemouseover = e => {
    console.log(e.target.alt)
    for (let i = 1; i <= 16; i++) {
      if (e.target.alt ===`toptooth-${i}`){
        document.querySelector(`.toptooth-${i}`).style.backgroundColor = '#07c3f7'
      }else if (e.target.alt ===`bottomtooth-${i}`){
        document.querySelector(`.bottomtooth-${i}`).style.backgroundColor = '#07c3f7'
      }
      
    }
    // switch (e.target.alt) {
    //   case 'toptooth-1':
    //     document.querySelector('.toptooth-1').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-2':
    //     document.querySelector('.toptooth-2').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-3':
    //     document.querySelector('.toptooth-3').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-4':
    //     document.querySelector('.toptooth-4').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-5':
    //     document.querySelector('.toptooth-5').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-6':
    //     document.querySelector('.toptooth-6').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-7':
    //     document.querySelector('.toptooth-7').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-8':
    //     document.querySelector('.toptooth-8').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-9':
    //     document.querySelector('.toptooth-9').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-10':
    //     document.querySelector('.toptooth-10').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-11':
    //     document.querySelector('.toptooth-11').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-12':
    //     document.querySelector('.toptooth-12').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-13':
    //     document.querySelector('.toptooth-13').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-14':
    //     document.querySelector('.toptooth-14').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-15':
    //     document.querySelector('.toptooth-15').style.backgroundColor = '#07c3f7'
    //     break
    //   case 'toptooth-16':
    //     document.querySelector('.toptooth-16').style.backgroundColor = '#07c3f7'
    //     break

    //   default:
    //   // code block
    // }
  }

  const handlemouseout = e => {
    for (let i = 1; i <= 16; i++) {
      if (e.target.alt ===`toptooth-${i}`){
        document.querySelector(`.toptooth-${i}`).style.backgroundColor = 'white'
      }else if (e.target.alt ===`bottomtooth-${i}`){
        document.querySelector(`.bottomtooth-${i}`).style.backgroundColor = 'white'
      }
      
    }
    // switch (e.target.alt) {
    //   case 'toptooth-1':
    //     document.querySelector('.toptooth-1').style.backgroundColor = 'white'
    //     break

    //   case 'toptooth-2':
    //     document.querySelector('.toptooth-2').style.backgroundColor = 'white'
    //     break

    //   case 'toptooth-3':
    //     document.querySelector('.toptooth-3').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-4':
    //     document.querySelector('.toptooth-4').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-5':
    //     document.querySelector('.toptooth-5').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-6':
    //     document.querySelector('.toptooth-6').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-7':
    //     document.querySelector('.toptooth-7').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-8':
    //     document.querySelector('.toptooth-8').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-9':
    //     document.querySelector('.toptooth-9').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-10':
    //     document.querySelector('.toptooth-10').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-11':
    //     document.querySelector('.toptooth-11').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-12':
    //     document.querySelector('.toptooth-12').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-13':
    //     document.querySelector('.toptooth-13').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-14':
    //     document.querySelector('.toptooth-14').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-15':
    //     document.querySelector('.toptooth-15').style.backgroundColor = 'white'
    //     break
    //   case 'toptooth-16':
    //     document.querySelector('.toptooth-16').style.backgroundColor = 'white'
    //     break

    //   default:
    //   // code block
    // }
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
/>
))}
          {/* <area
            shape="rect"
            coords="45,131,63,148"
            alt="bottomtooth-1"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="45,111,63,128"
            alt="bottomtooth-2"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="50,90,73,110"
            alt="bottomtooth-3"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="59,77,77,90"
            alt="bottomtooth-4"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="67,60,85,80"
            alt="bottomtooth-5"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="76,48,93,65"
            alt="bottomtooth-6"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="90,43,105,57"
            alt="bottomtooth-7"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="103,37,120,56"
            alt="bottomtooth-8"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="120,37,136,55"
            alt="bottomtooth-9"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
            <area
            shape="rect"
            coords="137,39,149,55"
            alt="bottomtooth-10"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="148,49,164,65"
            alt="bottomtooth-11"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
           <area
            shape="rect"
            coords="155,60,174,76"
            alt="bottomtooth-12"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="163,77,180,91"
            alt="bottomtooth-13"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="167,90,189,111"
            alt="bottomtooth-14"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="172,109,192,132"
            alt="bottomtooth-15"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="177,130,197,150"
            alt="bottomtooth-16"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          /> */}
        </map>
      </div>
    </div>
  )
}

export default TeethChart
