import React, {useState} from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../images/logo.png';

const Menu = () => ( 
	<div>
	<p><a href="#home">Home</a></p>
	<p><a href="#goal">Goal</a></p>
	<p><a href="#services">Services</a></p>
	<p><a href="#clinic">Clinic</a></p>
	<p><a href="#contact">Contact</a></p>
	</div>  
)

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
  return (
	<div className='dental-navbar'>
		<div className='dental-navbar-links'>
			<div className='dental-navbar-links-logo'>
				<img src={logo} alt="logo" />
				<h2>CA Dental</h2>
			</div>
			<div className='dental-navbar-links-container'>
				<Menu />
			</div>

			<div className='dental-navbar-menu'>
				{toggleMenu ? 
				<RiCloseLine color='#00a8f3' size={27} onClick={() => setToggleMenu(false)} /> :
				<RiMenu3Line color='#00a8f3' size={27} onClick={() => setToggleMenu(true)} />
			}

			{toggleMenu && (
				<div className='dental-navbar-menu-container-scale-center'>
				<div className='dental-navbar-menu-container-links'>
					<Menu />
				</div>			
				</div>	
			)}
			</div>
		</div>
	</div>
  )
}
