import React, { useEffect } from 'react';
import HomeImg from '../../assets/new_profile_photo_2.png';
import { Link } from 'react-scroll';
import HireImg from '../../assets/hiring.png';
import './home.css';

const Home = () => {
	useEffect(() => {
		const handleScroll = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        handleScroll();// Scroll to the top of the page
	}, []);

	return (
		<section id='home'>
			<div className='home-content'>
				<div className='home-image-div' data-aos="zoom-in">
					<img 
						src={HomeImg} 
						alt='Smit Panchal' 
						className='home-image'
					/>
				</div>
				
				<div className='text-content'>
					<div className='home-text'>
						<span className='hello'>
							Hello,
						</span>
						<h1  >
							I'm <span className='home-name'>Smit Panchal</span>
						</h1>
					</div>

					<p className='home-para' >
						Passionate about crafting efficient software solutions to complex challenges in the ever-evolving world of technology.
					</p>

					<Link>
						<button 
							className='btn'
							onClick={() => {
								document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
							}}
						>
							<img src={HireImg} alt='Hire me' className='hire-img' />
							Let's Connect
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Home;
