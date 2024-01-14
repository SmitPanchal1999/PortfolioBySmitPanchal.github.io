import React from 'react';
import './resume.css';
const Resume = () => {
	return (
		<section id='resume'>
			<h2 className='resume-title'>Resume</h2>
			<span className='resume-desc'>Presented below is my resume, offering a concise yet comprehensive overview of my skills and experiences. Feel free to explore for more details about my professional background.</span>

			<div className='resume-pdf'>
				<iframe src={require('./resume.pdf')} title='PDF viewer' allowfullscreen></iframe>
			</div>
		</section>
	);
};

export default Resume;
