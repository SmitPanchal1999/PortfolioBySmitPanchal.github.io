import React from 'react';
import './experience.css';
import { Chrono } from 'react-chrono';
import MediaQuery from 'react-responsive';

const experiences = [
	{
		title: 'May 2024 - Jan 2025',
		cardTitle: 'Software Engineer - AI Training Specialist',
		cardSubtitle: 'Outlier AI',
		cardDetailedText: 'Toronto, ON, Canada',
	},
	{
		title: 'May 2023 - Aug 2023',
		cardTitle: 'Software Automation Developer Co-Op',
		cardSubtitle: 'Nokia',
		cardDetailedText: 'Ottawa, ON, Canada',
	},
	{
		title: 'Sep 2022 - Jun 2024',
		cardTitle: 'Master of Applied Computing',
		cardSubtitle: 'Wilfrid Laurier University',
		cardDetailedText: 'Waterloo, ON, Canada',
	},
	{
		title: 'Dec 2020 - Aug 2022',
		cardTitle: 'Software Engineer',
		cardSubtitle: 'Rapidops Inc.',
		cardDetailedText: 'Ahmedabad, GJ, India',
	},
	{
		title: 'Jan 2020 - Jun 2020',
		cardTitle: 'Software Engineer Intern',
		cardSubtitle: 'Nifty Solutions',
		cardDetailedText: 'Vadodara, GJ, India',
	},
	{
		title: 'Sep 2017 - Apr 2021',
		cardTitle: 'B.Tech, Computer Engineering',
		cardSubtitle: 'Dharmsinh Desai University',
		cardDetailedText: 'Nadiad, GJ, India',
	},
];

const Experience = () => {
	return (
		<section id='experience' className='experience-section'>
			<h2 className='experience-title' data-aos="fade-up">Experience</h2>
			<span className='experience-desc' data-aos="fade-up" data-aos-delay="200">
				Tech journey marked by impactful roles at Outlier AI, Nokia, Rapidops, and academic excellence at Wilfrid
				Laurier and Dharmsinh Desai University. Committed to growth, innovation, and collaborative
				problem-solving in dynamic environments.
			</span>
			<div className='timeline-container' data-aos="fade-up" data-aos-delay="200">
				<MediaQuery minWidth={721}>
					<Chrono
						items={experiences}
						mode='VERTICAL_ALTERNATING'
						itemWidth={350}
						cardHeight={100}
						fontSizes={{
							cardSubtitle: '1rem',
							cardText: '0.9rem',
							cardTitle: '1.25rem',
							title: '1.25rem',
						}}
						hideControls
						theme={{
							primary: 'white',
							cardBgColor: 'rgb(50, 50, 50)',
							cardForeColor: 'violet',
							titleColor: 'white',
							titleColorActive: 'black',
							cardTitleColor: 'white',
							cardSubtitleColor: 'white',
							cardDetailsColor: 'white',
						}}
					/>
				</MediaQuery>
				<MediaQuery maxWidth={720}>
					<Chrono
						items={experiences}
						mode='VERTICAL'
						itemWidth={300}
						cardHeight={100}
						fontSizes={{
							cardSubtitle: '0.9rem',
							cardText: '0.8rem',
							cardTitle: '1.1rem',
							title: '1rem',
						}}
						hideControls
						theme={{
							primary: 'white',
							cardBgColor: 'rgb(50, 50, 50)',
							cardForeColor: 'violet',
							titleColor: 'white',
							titleColorActive: 'black',
							cardTitleColor: 'white',
							cardSubtitleColor: 'white',
							cardDetailsColor: 'white',
						}}
					/>
				</MediaQuery>
			</div>
		</section>
	);
};

export default Experience;
