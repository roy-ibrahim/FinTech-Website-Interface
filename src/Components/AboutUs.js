import NavBar from "./NavBar";
import '../Styling/aboutus.css'
import graphImage from '../images/graph.png'

function AboutUs() {
    return (
      <>
      <NavBar />
        <div className="main-cont">
            <h1>We are a platform for <text><br />the Ones</text> with <text><br />Big Goals</text></h1>
            <div className="graph-section">
                <img src={graphImage} alt="" width={"550px"}></img>
                <p>Welcome to MyFinance, your ultimate platform for saving money! Established in 2009, we've been dedicated to helping people achieve financial freedom and stability through our innovative tools and resources. With over 1 million active users, we've helped individuals from all walks of life save more than 13.3 million dollars and counting. Whether you're looking to create a budget, reduce debt, or invest wisely, we're here to provide you with the guidance and support you need to reach your financial goals. Join us today and start your journey towards a brighter financial future!</p>
            </div>
        </div>

      </>
      );
  }
  
  export default AboutUs;