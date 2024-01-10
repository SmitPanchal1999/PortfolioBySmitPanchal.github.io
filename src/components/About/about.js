import React from 'react';
import './about.css';
import WebDevelopIcon from '../../assets/web_development.png';
import AndroidAppIcon from '../../assets/mobile-app.png';
import MLIcon from '../../assets/icons8-machine-learning-66.png'
import NetworkAutomationIcon from '../../assets/icons8-configuration-100.png'

const About = () => {
	return (
		<section id='about'>
			<span className='title'>What I do</span>
			<span className='desc'>With a solid educational background including a Bachelor of Technology in Computer Engineering and a Master of Applied Computing, I bring a versatile skill set to the table. I specialize in delivering innovative solutions across various domains and dedicated to creating efficient, scalable, and intelligent solutions that meet the evolving needs of the digital landscape.</span>
			<div className='skills'>
				<div className='skill'>
					<img src={WebDevelopIcon} alt='Web Development' className='skill-image' />
					<div className='skill-text'>
						<h2>Web Development</h2>
						<p>
						Creating dynamic and responsive web applications using technologies such as Angular, React, and NodeJS. Proficient in database management with MySQL or MongoDB, ensuring scalable and efficient data solutions.
						</p>
					</div>
				</div>
				<div className='skill'>
					<img src={AndroidAppIcon} alt='App Development' className='skill-image' />
					<div className='skill-text'>
						<h2>Mobile App Development</h2>
						<p>Designing and developing cross-platform mobile applications using Android Studio and Java. Leveraging native capabilities to create seamless and feature-rich mobile experiences.</p>
					</div>
				</div>
				<div className='skill'>
					<img src={MLIcon} alt='Machine Learning' className='skill-image2' />
					<div className='skill-text'>
						<h2>Machine Learning Model Development</h2>
						<p>Harnessing the power of data to create intelligent algorithms, providing insights and predictive capabilities that drive informed decision-making.</p>
					</div>
				</div>
				<div className='skill'>
					<img src={NetworkAutomationIcon} alt='Network Automation' className='skill-image2' />
					<div className='skill-text'>
						<h2>Network Automation Using Ansible</h2>
						<p>Automating and streamlining network infrastructure tasks with Ansible. Implementing script-based configuration management and orchestration for efficient and scalable network operations.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
