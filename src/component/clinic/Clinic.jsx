import React, { Component } from 'react'
import './Clinic.css';
import rec from '../../images/rec1.png';
import clinicImge from '../../images/clinic.jpg';
import clinicImge2 from '../../images/clinic2.jpg';
export default class Review extends Component {
  render() {
	return (
	  <div className='dential-clinic section-margin' id='clinic'>
		<div className='whole-dental-section'>
		<div className='dental-clinic-section1'>
			<img id="clinic" src={rec} alt="rectangle" />
			<img id="clinic2" src={clinicImge} alt="clinic" />
		</div>
		<div className='dental-clinic-title'>
			<h2>Our Clinic</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi exercitationem eveniet ipsam neque error non provident. Saepe ex facilis cum ab. Hic omnis eius, mollitia adipisci ducimus voluptatibus? Ipsum!</p>
		    <button className='btn'>Learn More</button>
		</div>
		<img id="clinic3" src={clinicImge2} alt="clinic" />
		</div>
	  </div>
	)
  }
}
