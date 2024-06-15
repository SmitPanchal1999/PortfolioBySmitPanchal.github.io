import React from 'react';
import HomeImg from '../../assets/new_profile_photo_2.png';
import { Link } from 'react-scroll';
import HireImg from '../../assets/hiring.png';
import './home.css';
const Home = () => {
	return (
		<section id='home'>
			<div className='home-image-div'>
				<img src={HomeImg} alt='Smit Panchal' className='home-image' />
			</div>
			<div className='home-content'>
				<span className='hello'>Hello, </span>
				<span className='home-text'>
					I'm <span className='home-name'>Smit</span>
				</span>
				<span>Software Engineer</span>
                <p className='home-para'>
				Passionate about crafting efficient solutions to complex challenges in the ever-evolving world of technology.</p>
				<Link>
					<button className='btn' onClick={()=>{
						document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
					}}>
						<img src={HireImg} alt='Hire me' className='hire-img' />
						Hire me
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Home;
