import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './pricing.css';

const PricingCard = () => {
  return (
    <section className="pricing">
      
      <div className="container-sm">
       <h2 className='pricing-title'>Pricing</h2>
       <p className='pricing-desc'>Start free and scale while you grow. No hidden fees.Unlimited users for free</p>
      <div className="pricing-card-container">
        <div className="card-1">
        <h3 className='card-1-title'>Simple</h3>
        <p className='card-1-data'>Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.</p>

        <div className="price-container">
          <h3 className='price-value'>Free</h3>
        </div>
        <hr className='line'></hr>
        <div className="stats-container">
          <ul className='stats-list'>
           <li><FontAwesomeIcon icon={faCheck} className='icons' />  Real-time monitoring</li>
            <li> <FontAwesomeIcon icon={faCheck} className='icons'/>Track key performance indicators</li>
            <li><FontAwesomeIcon icon={faCheck} className='icons'/>Schedule appointments</li>
            <li><FontAwesomeIcon icon={faCheck}className='icons' />Organize, delegate and keep track of tasks</li>
          </ul>
        </div>

        <div className="btn-container">
          <button className="pricing-btn-1">Get Started</button>
        </div>
        </div>


        <div className="card-2">
        <h3 className='card-2-title'>Premium</h3>
        <p className='card-2-data'>Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.</p>

        <div className="price-container">
          <h3 className='price-value'>$49/month</h3>
        </div>
        <hr className='line'></hr>
        <div className="stats-container">
          <h3>Everything from the free plan plus</h3>
          <ul className='stats-list-2'>
            <li><FontAwesomeIcon icon={faCheck} className='icons' />Data-driven decisions</li>
            <li><FontAwesomeIcon icon={faCheck} className='icons'/>Data visualisation</li>
            <li><FontAwesomeIcon icon={faCheck}  className='icons'/>Schedule appointments</li>
            <li><FontAwesomeIcon icon={faCheck} className='icons'/>Store and organise contact information</li>
            <li><FontAwesomeIcon icon={faCheck} className='icons'/>Teal-time communication tools for messaging and video conferencing</li>
          </ul>
        </div>

        <div className="btn-container">
          <button className="pricing-btn-2">Get Started</button>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default PricingCard