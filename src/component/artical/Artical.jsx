import React from 'react'
import './Article.css';

export default function Artical({DotImg, title}) {
  return (
	<div className='artiacl-container'>
		<div className='artical-container-image'>
			<img src={DotImg} alt='dot'/>
		</div>

		<div className='artical-container-title'>
			<h2>{title}</h2>
		</div>
	</div>
  )
}
