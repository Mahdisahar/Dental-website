import React from 'react';
import './Contact.css';
import Info from '../../container/info/Info';
import Form from '../../container/form/Form';

export default function Contact() {
  return (
    <div className='dental-contact' id='contact'>
		<div className='dental-contact-container'>
			<div className='dental-sub'>
               <Info />
		        <Form />
			</div>
		</div>    
	    </div>
  );
}
