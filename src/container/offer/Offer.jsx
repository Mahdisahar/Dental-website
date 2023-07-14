import React from 'react'
import './Offer.css';

export default function Offer({text}) {
  return (
	<div className='dental-offer'>
		<div className='dental-offer-dental_text'>
			<p>{text}</p>
		</div>
	</div>
  )
}
