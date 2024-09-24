import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/portfolio-logo-black-and-white.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/chat.png';
import MobMenuImg from '../../assets/icons8-menu-64.png';
import MobMenuCloseImg from '../../assets/icons8-close-192.png'
const Navbar = () => {
	const [showMenu, setShowMenu] =useState(false);
	const [OpenOrCloseMenu, setOpenOrCloseMenu] =useState(MobMenuImg);
	return (
		<nav className='navbar'>
			<img src={logo} alt='Logo' className='logo' onClick={()=>{
				document.getElementById('home').scrollIntoView({behavior: 'smooth'}); 
			}} />
			<div className='menu'>
				<Link activeClass='active' to='home' spy={true} smooth={true} offset={-150} duration={500} className='menu-list-item'>Home</Link>
				<Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='menu-list-item'>About</Link>
				<Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='menu-list-item'>Career</Link>
				<Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='menu-list-item'>Projects</Link>
				{/* <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className='menu-list-item'>Resume</Link> */}

			
			</div>
			<button className='menu-btn' onClick={()=>{
				document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); 
			}}>
				<img src={ContactImg} alt='Contact Me' className='menu-contact-image' />
				Contact Me
			</button>
			<img src={OpenOrCloseMenu} alt='Mobile Menu' className='mobMenu' onClick={()=>{
				
				if(OpenOrCloseMenu===MobMenuImg){
					setOpenOrCloseMenu(MobMenuCloseImg)
					
				}else{
					setOpenOrCloseMenu(MobMenuImg)
				}
				console.log(String(OpenOrCloseMenu));
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				setShowMenu(!showMenu);
		
			}} />
			<div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
				<Link activeClass='active' to='home' spy={true} smooth={true} offset={-150} duration={500} className='list-item' onClick={()=>{setShowMenu(false);
				setOpenOrCloseMenu(MobMenuImg);
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				}}>Home</Link>
				<Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='list-item' onClick={()=>{setShowMenu(false);
				setOpenOrCloseMenu(MobMenuImg);
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				}}>About</Link>
				<Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='list-item' onClick={()=>{setShowMenu(false);
				setOpenOrCloseMenu(MobMenuImg);
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				}}>Career</Link>
				<Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='list-item' onClick={()=>{setShowMenu(false);
				setOpenOrCloseMenu(MobMenuImg);
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				}}>Projects</Link>
				{/* <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className='list-item' onClick={()=>{setShowMenu(false);
				setOpenOrCloseMenu(MobMenuImg);
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				}}>Resume</Link> */}
				<Link activeClass='active' to='contact' spy={true} smooth={true}  offset={-50} duration={500} className='list-item' onClick={()=>{setShowMenu(false);
				setOpenOrCloseMenu(MobMenuImg);
				document.getElementsByClassName('mobMenu').src=OpenOrCloseMenu;
				}}>Contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
