import '../Styling/customerReviews.css'
import custReviews from '../data/reviews.js'

const Reviews = () => {
  const reviewsFormatted = custReviews.map((rev)=> {
    return (
      <div className='one-review'>
        <h3>{rev.name}</h3>
        <p>{rev.review}</p>
      </div>
    )
  })
    return (
      <div className='reviews-section'>
        {reviewsFormatted}
      </div>  
    )
}

function CustomerReviews() {
    return (
      <div className='main-container'>
        <div>  
        <h1>What our customers say about us?</h1>
        </div>
          <Reviews />
      </div>
      );
  }
  
  export default CustomerReviews;