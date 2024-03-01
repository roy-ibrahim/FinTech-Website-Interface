import '../Styling/successStory.css'
import numbers from '../data/stats'

const Card = ({amount, desc})=> {
    return(
        <div  className='one-card'>
            <h1>{amount}</h1>
            <div className='card-details'>
                <p>{desc}</p>
            </div>
        </div>
    )
}


const MainContainer = () => {
    return(
        <div className="mainComponent">
            <div className='title'>
                We turn <text className='special-title'>Money</text> <br /><text className='second-line'>into <text className='special-title'>Savings</text></text>
            </div>
            <div className='boxes'>
                <Card amount={numbers[0].amount} desc={numbers[0].desc}/>
                <Card amount={numbers[1].amount} desc={numbers[1].desc}/>
                <Card amount={numbers[2].amount} desc={numbers[2].desc}/>
            </div>

        </div>
    )
}

function SuccessStory() {
    return (
      <div>
        <MainContainer />
      </div>
      );
  }
  
  export default SuccessStory;