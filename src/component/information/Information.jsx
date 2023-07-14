import React from 'react'
import './Information.css';

export default function Information({image, title, text}) {
  return (
	<div className='dental-information'>
		<div className='dental-container-information'>
			<div className='dental-contianer-1'>
<div className='dental-infromation-container-image'>
		 <img src={image} alt='pic'/>
		</div>
		<div className='dental-infromation-container-title'>
		   <h2>{title}</h2>
	     </div>
		</div>
       
	    <div className='dental-infromation-container-text'>
		<p>{text}</p>
	    </div>
		</div>	
	</div>
  )
}




	