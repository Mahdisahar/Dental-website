import React from 'react'
import './Info.css';
import Information from '../../component/information/Information';

const infoData = [
	{
	  imageUrl: require('../../images/phone.png'),
	  title: 'CALL US',
	  text: '1(234) 567-891, 1(234) 567-891',
	},
	{
	  imageUrl: require('../../images/location.png') ,
	  title: 'LOCATION',
	  text: '121 POCO, BC - Canada',
	},
	{
	  imageUrl: require('../../images/hours.png'),
	  title: 'BUSINESS HOURS',
	  text: 'Mon-Fri.... 10am - 8pm, Sat, Sun .... Closed'
	}
]

export default function Info() {
  return (
	<div className='dental-info'>
		<div className='dental-info-container'>
			{infoData.map((item, index) => (
				<Information 
				 title={item.title} 
				 text={item.text} 
				 key={item.title + index} 
				 image={item.imageUrl}
				 />	
			))}
		</div>
		</div>
  )
}
