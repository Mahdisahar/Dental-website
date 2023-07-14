import React from 'react'
import './Option.css';

export default function Option({ imgIcon, text}) {
  return (
	<div className='dental-option'>
		<div className='dental-option-image'>
	      <img src={imgIcon} alt="" />
		</div>
		<div className='dental-option-text'>
           <p>{text}</p>
		</div>
	</div>
  )
}
