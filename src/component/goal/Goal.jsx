import React from 'react';
import './Goal.css';
import Offer from '../../container/offer/Offer';

export default function Goal() {
  return (
    <div className='dental-goal section__margin' id='goal'>
      <div className='dental-goal-text'>
        <h1>
          Our Goal is to offer highest quality services with most competitive
          prices.
        </h1>
        <div></div>
      </div>
      <div className='dental-container'>
		<div className='dental-container-1'>
<Offer text='Provide an environment for learning clinical and intellectual skills with emphasis on diagnosing, treatment planning and comprehensive dental care
To provide clinical experience in the management of the medically compromised patient.Provide an environment for learning clinical and intellectual skills with emphasis on diagnosing, treatment planning and comprehensive dental care
To provide clinical experience in the management of the medically compromised patient'
          />  
		</div>
		<div className='btn-container'>
				<div className='dental-container-2'>
		            <Offer text='Provide an environment for learning clinical and intellectual skills with emphasis on diagnosing, treatment planning and comprehensive dental care'
          />  
		</div> 
		<button className='btn'>
			Learn More
		</button>
        </div>
		</div>
	
	
	</div>

  );
}
