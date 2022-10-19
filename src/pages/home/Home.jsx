import NavBar from '../../components/navbar/NavBar'
import Profile from '../../components/profile/Profile'
import SideBar from '../../components/sidebar/SideBar'
import TeethChart from '../../components/teethChart/TeethChart'
import Treatment from '../../components/treatment/Treatment'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="mainContainer">

        <Profile />

        </div>
        <TeethChart />
      </div>
        <Treatment/>
    </div>
  )
}

export default Home
