import React from 'react'
import styled from "styled-components";

const WeOffer = () => {

  return (
    <Wrapper className="section">

<div className="background">
  <div className="container">
    <div className="panel pricing-table">
      
      <div className="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="courses" className="pricing-img"/>
        <h2 className="pricing-header">Personal</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Custom domains</li>
          <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span className="pricing-price">Free</span>
        <a href="#/" className="pricing-button">Sign up</a>
      </div>
      
      <div className="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="courses" className="pricing-img"/>
        <h2 className="pricing-header">Small team</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Never sleeps</li>
          <li className="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span className="pricing-price">$150</span>
        <a href="#/" className="pricing-button is-featured">Free trial</a>
      </div>
      
      <div className="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="courses" className="pricing-img"/>
        <h2 className="pricing-header">Enterprise</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Dedicated</li>
          <li className="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span className="pricing-price">$400</span>
        <a href="#/" className="pricing-button">Free trial</a>
      </div>
      
    </div>
  </div>
</div>

    </Wrapper>
     )
    }
    
    const Wrapper = styled.section`
    font-family:Microsoft Sans Serif;
    padding: 9rem 0;
    box-sizing: border-box;
    justify-content: center;

 
    .container {
    
        margin-top: 0px;
        max-width: 800px;
        margin-bottom: 0px;
        display: grid;
        gap: 1rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      grid-template-columns: repeat(3, 1fr);
      
    }
    html {
  box-sizing: border-box;
  font-family:Microsoft Sans Serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

.background::after {
  content: '';
  background: #60a9ff;
  background: -moz-linear-gradient(top, #60a9ff 0%, #4394f4 100%);
  background: -webkit-linear-gradient(top, #60a9ff 0%,#4394f4 100%);
  background: linear-gradient(to bottom, #60a9ff 0%,#4394f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
  font-size:20px;
}

.pricing-features {
  color: #016FF9;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #016FF9;
  display: block;
  font-size: 32px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}
       
    }
    ;`
    export default WeOffer;