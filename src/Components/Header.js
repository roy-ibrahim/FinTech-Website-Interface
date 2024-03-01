import '../Styling/header.css'
import cardImage from '../images/card.png'
import NavBar from './NavBar'

const Header1 = () => {
  return(
    <div  className='mainHeader'>
        <NavBar />
      <div className='header1'>
        <div className='mainTitle'>
          <h1 className='title'>Manage Your<br />Finances</h1>
          <h3>Take control of your finances with ease, start tracking today!</h3>
        </div>
        <div className='mainImage'>
          <img src={cardImage} alt="" width={"400px"}></img>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="000" fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,128C640,160,800,224,960,250.7C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
  )
}

function Header() {
  return (
    <Header1 />
  );
}

export default Header;
