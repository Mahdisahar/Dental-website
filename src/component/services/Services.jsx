import React from 'react'
import './Services.css'
import rec1 from '../../images/rec1.png';
import pic from '../../images/feature_3.jpg';
import pic2 from '../../images/feature_1.jpg';
import { dot } from './import';
import Option from '../../container/options/Option';

export default function Services() {
  return (
	<div className='dental-services' id='services'>
		<div className='dental-services-first'>
			<div className='dental-cervices-container'>
				<div id='image1'>
                   <img src={rec1} alt="rectangle"/>
				</div>
				<div id='image2'>
                   <img src={pic} alt="dental" />
				</div>

				<div className='text'>
					<h1>General Dentistry Services</h1>
				</div>
			</div> 
		</div>

		<div className='dental-services-second'>
		
		<div className='dental-services-container-title'>
				<Option imgIcon={dot} text='Complete exams, x-ray, and dental cleanings.' />
				<Option imgIcon={dot} text='Fillings, root canals, and extractions.'/>
				<Option imgIcon={dot} text='Cosmetic dentistry, such as whitening, porcelain'/>
				<Option imgIcon={dot} text='Implants- placement and restoration.' />
				<Option imgIcon={dot} text='Crown, bridges, full and partial dentures.'/>
				<Option imgIcon={dot} text='Implants.' />
				<Option imgIcon={dot} text='Orthodontics.' />
			<button className='btn'>
				Learn More
			</button>
			</div>
			

			<div className='dental-services_options'>
				<div className='dental-shape'>
					<img src={rec1} alt="rectandle shape" />
				</div>
				<div className='dental-images'>
					<img src={pic2} alt="dental" />
				</div>
		</div>

		</div>		
	</div>
  )
}
