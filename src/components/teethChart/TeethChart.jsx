import React from 'react'
import teethTop from '../../assets/teethbacktop.png'
import teethBottom from '../../assets/teethbackalt.png'
import './teethChart.scss'

const TeethChart = () => {
  const handlemouseover = e => {
    console.log(e.target.alt)
    switch (e.target.alt) {
      case 'toptooth-1':
        document.querySelector('.toptooth-1').style.backgroundColor = '#07c3f7'
        break
      case 'toptooth-2':
        document.querySelector('.toptooth-2').style.backgroundColor = '#07c3f7'
        break
      case 'toptooth-3':
        document.querySelector('.toptooth-3').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-4':
        document.querySelector('.toptooth-4').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-5':
        document.querySelector('.toptooth-5').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-6':
        document.querySelector('.toptooth-6').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-7':
        document.querySelector('.toptooth-7').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-8':
        document.querySelector('.toptooth-8').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-9':
        document.querySelector('.toptooth-9').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-10':
        document.querySelector('.toptooth-10').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-11':
        document.querySelector('.toptooth-11').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-12':
        document.querySelector('.toptooth-12').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-13':
        document.querySelector('.toptooth-13').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-14':
        document.querySelector('.toptooth-14').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-15':
        document.querySelector('.toptooth-15').style.backgroundColor = '#07c3f7'
        break
            case 'toptooth-16':
        document.querySelector('.toptooth-16').style.backgroundColor = '#07c3f7'
        break
      

      default:
      // code block
    }
  }

  const handlemouseout = e => {
    switch (e.target.alt) {
      case 'toptooth-1':
        document.querySelector('.toptooth-1').style.backgroundColor = 'white'
        break

      case 'toptooth-2':
        document.querySelector('.toptooth-2').style.backgroundColor = 'white'
        break

      case 'toptooth-3':
        document.querySelector('.toptooth-3').style.backgroundColor = 'white'
        break
            case 'toptooth-4':
        document.querySelector('.toptooth-4').style.backgroundColor = 'white'
        break
            case 'toptooth-5':
        document.querySelector('.toptooth-5').style.backgroundColor = 'white'
        break
            case 'toptooth-6':
        document.querySelector('.toptooth-6').style.backgroundColor = 'white'
        break
            case 'toptooth-7':
        document.querySelector('.toptooth-7').style.backgroundColor = 'white'
        break
            case 'toptooth-8':
        document.querySelector('.toptooth-8').style.backgroundColor = 'white'
        break
            case 'toptooth-9':
        document.querySelector('.toptooth-9').style.backgroundColor = 'white'
        break
            case 'toptooth-10':
        document.querySelector('.toptooth-10').style.backgroundColor = 'white'
        break
            case 'toptooth-11':
        document.querySelector('.toptooth-11').style.backgroundColor = 'white'
        break
            case 'toptooth-12':
        document.querySelector('.toptooth-12').style.backgroundColor = 'white'
        break
            case 'toptooth-13':
        document.querySelector('.toptooth-13').style.backgroundColor = 'white'
        break
            case 'toptooth-14':
        document.querySelector('.toptooth-14').style.backgroundColor = 'white'
        break
            case 'toptooth-15':
        document.querySelector('.toptooth-15').style.backgroundColor = 'white'
        break
            case 'toptooth-16':
        document.querySelector('.toptooth-16').style.backgroundColor = 'white'
        break
      
      default:
      // code block
    }
  }
  return (
    <div className="teeth-chart">
      <div className="teeth-chart-top">
        <h2 className='head'>ÜST</h2>
        <div className="toptooth-1 tooth"></div>
        <div className="toptooth-2 tooth"></div>
        <div className="toptooth-3 tooth"></div>
        <div className="toptooth-4 tooth"></div>
        <div className="toptooth-5 tooth"></div>
        <div className="toptooth-6 tooth"></div>
        <div className="toptooth-7 tooth"></div>
        <div className="toptooth-8 tooth"></div>
        <div className="toptooth-9 tooth"></div>
        <div className="toptooth-10 tooth"></div>
        <div className="toptooth-11 tooth"></div>
        <div className="toptooth-12 tooth"></div>
        <div className="toptooth-13 tooth"></div>
        <div className="toptooth-14 tooth"></div>
        <div className="toptooth-15 tooth"></div>
        <div className="toptooth-16 tooth"></div>
        <img src={teethTop} alt="teeth" usemap="#workmap" />
        <map name="workmap">
          <area
            shape="rect"
            coords="45,131,63,148"
            alt="toptooth-1"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="45,111,63,128"
            alt="toptooth-2"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
          <area
            shape="rect"
            coords="50,90,73,110"
            alt="toptooth-3"
            onMouseOver={e => handlemouseover(e)}
            onMouseOut={e => handlemouseout(e)}
          />
        </map>
      </div>

      <div className="teeth-chart-bottom">
      <h2 className='head'>ALT</h2>
        <div className="bottomtooth-1 tooth"></div>
        <div className="bottomtooth-2 tooth"></div>
        <div className="bottomtooth-3 tooth"></div>
        <div className="bottomtooth-4 tooth"></div>
        <div className="bottomtooth-5 tooth"></div>
        <div className="bottomtooth-6 tooth"></div>
        <div className="bottomtooth-7 tooth"></div>
        <div className="bottomtooth-8 tooth"></div>
        <div className="bottomtooth-9 tooth"></div>
        <div className="bottomtooth-10 tooth"></div>
        <div className="bottomtooth-11 tooth"></div>
        <div className="bottomtooth-12 tooth"></div>
        <div className="bottomtooth-13 tooth"></div>
        <div className="bottomtooth-14 tooth"></div>
        <div className="bottomtooth-15 tooth"></div>
        <div className="bottomtooth-16 tooth"></div>
        <img src={teethBottom} alt="teeth" />
      </div>
    </div>
  )
}

export default TeethChart
