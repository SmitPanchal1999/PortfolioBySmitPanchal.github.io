import React from 'react';
import './resume.css';
const Resume = () => {
	return (
		<section id='resume'>
			<h2 className='resume-title'>Resume</h2>
			<span className='resume-desc'>
			Discover my concise and comprehensive resume for insights into my skills, experiences and achievements. Download the PDF by clicking the below button for convenient access.
			</span>
			<a href={require('./resume.pdf')} className='download-btn' download='Smit-Panchal-Resume.pdf'>Download Resume</a>
			<div className='resume-pdf'>
				<iframe src={require('./resume.pdf')} title='PDF viewer' allowfullscreen></iframe>
				 
			</div>
		</section>
	);
};

export default Resume;
