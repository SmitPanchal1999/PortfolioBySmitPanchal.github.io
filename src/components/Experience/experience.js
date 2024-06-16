import React from 'react';
import './experience.css';
import { Chrono } from 'react-chrono';
import MediaQuery from 'react-responsive';
const experiences = [
	{
		title: 'May 2023 - Aug 2023',
		cardTitle: 'SDN & Network Automation Engineer Co-Op',
		cardSubtitle: 'Nokia',
		cardDetailedText: 'Ottawa, ON, Canada',
	},
	{
		title: 'Sep 2022 - June 2024',
		cardTitle: 'Master of Applied Computing',
		cardSubtitle: 'Wilfrid Laurier University',
		cardDetailedText: 'Waterloo, ON, Canada',
	},
	{
		title: 'Jul 2021 - Aug 2022',
		cardTitle: 'Software Engineer',
		cardSubtitle: 'Rapidops Solutions Pvt. Ltd.',
		cardDetailedText: 'Ahmedabad, GJ, India',
	},
	{
		title: 'Dec 2020 - Jun 2021',
		cardTitle: 'Software Engineer Intern',
		cardSubtitle: 'Rapidops Solutions Pvt. Ltd.',
		cardDetailedText: 'Ahmedabad, GJ, India',
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
		<section id='experience'>
			<span className='experience-title'>Professional Journey</span>
			<span className='experience-desc'>
				Tech journey marked by impactful roles at Nokia, Rapidops Solutions, and academic excellence at Wilfrid
				Laurier and Dharmsinh Desai University. Committed to growth, innovation, and collaborative
				problem-solving in dynamic environments.
			</span>
			<MediaQuery minWidth={721}>
				<Chrono
					items={experiences}
					mode='VERTICAL_ALTERNATING'
					itemWidth={150}
					cardHeight={60}
					fontSizes={{
						cardSubtitle: '1rem',
						cardText: '0.75rem',
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
					mode='VERTICAL_ALTERNATING'
					itemWidth={150}
					cardHeight={60}
					fontSizes={{
						cardSubtitle: '0.8rem',
						cardText: '0.7rem',
						cardTitle: '1rem',
						title: '0.8rem',
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
		</section>
	);
};

export default Experience;
