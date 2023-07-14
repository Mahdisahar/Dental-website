import React from 'react';
import shape from '../../images/shape.png';
import value from '../../images/value_1.jpg';
import { default as Artical} from '../../component/artical/Artical';
import {dot} from './import';
import './Header.css';

export default function Header() {
  return (
   <div className='dental-header' id='home'>
      <div className='dental-header-contanier'>
          <div className='dental-header-svg-imge'>
              <img src={shape} alt='shape' />
		 <div className='dental-header-image'>
          <img src={value} alt='smile' />
        </div>
        </div>

      <div className='dental-header-whole-containers'>
         <div className='dental-header-content'>
			<h1>How We Care For You</h1>
			<div></div>
		</div>
		<div className='dental-health-how'>
			<Artical DotImg={dot} title='DENTURES'/>
			<Artical DotImg={dot} title='EXTRACTIONS'/>
            <Artical DotImg={dot} title='GUM TREATMENT'/>
			<Artical DotImg={dot} title='IMPLANTS'/>
			<Artical DotImg={dot} title='ORAL SURGERY'/>
		</div>
	  </div>
      </div>
   </div>
	

	
  );
}
