import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
  render() {
	return (
	 
        <div className='dental-contact-form'>
          <div className='dental-contact-form-container'>
            <h1>CONTACT US</h1>

            <div className='subform'>
              <label htmlFor='text'>Enter your Name</label>
              <input type='text' />
            </div>

			<div className='subform'>
              <label htmlFor='email'>Enter a valid email address</label>
              <input type='email' />
            </div>
			<div className='subform'>
              <textarea name="text" id="text"></textarea>
            </div>

			<div className='btn-form'>
				<button>Submit</button>
			</div>
	
          </div>
        </div>
	)
  }
}
