import React from 'react';
import './projects.css';
const Projects = () => {
	return (
		<section id='projects'>
			<h2 className='projects-title'>Projects</h2>
			<span className='projects-desc'>Explore these diverse projects, each reflecting a commitment to innovation and solving real-world challenges across technology and beyond.</span>
			<div className='projects'>
				<a href='https://github.com/AditModi/CloudDriven' target='_blank' rel='noreferrer'>
					<div className='project'>
						<h2>CloudDriven</h2>
						<p className='project-desc'>Personal Digital Storage & Secure Sharing</p>
						<p className='tech-stack'><span className='tech-stack-title'>TECH STACK -</span> AWS, Angular, Node.js, Express.js, MongoDB, Heroku</p>
					</div>
				</a>
				<a href='https://github.com/SmitPanchal1999/HelpingHands' target='_blank' rel='noreferrer'>
					<div className='project'>
						<h2>HelpingHands</h2>
						<p className='project-desc'>Emergency Help and Safety System</p>
						<p className='tech-stack'><span className='tech-stack-title'>TECH STACK -</span> Java, Android Studio, Firebase</p>

					</div>
				</a>
				<a href='https://github.com/SmitPanchal1999/HealthCard' target='_blank' rel='noreferrer'>
					<div className='project'>
						<h2>HealthCard</h2>
						<p className='project-desc'>Manage Health Data Online</p>
						<p className='tech-stack'><span className='tech-stack-title'>TECH STACK -</span> Angular, Node.js, Express.js, MongoDB</p>

					</div>
				</a>
				<a href='https://github.com/SmitPanchal1999/Stock-Price-Prediction' target='_blank' rel='noreferrer'>
					<div className='project'>
						<h2>Stock Price Prediction</h2>
						<p className='project-desc'>Forecasting financial trends with advanced ARIMA and LSTM models</p>
						<p className='tech-stack'><span className='tech-stack-title'>TECH STACK -</span> Python, Pandas, Matplotlib, Numpy, TensorFlow</p>
					
					</div>
				</a>
				<a href='https://github.com/SmitPanchal1999/Classification-of-Hyperspectral-images-using-Transfer-Learning-and-DNN' target='_blank' rel='noreferrer'>
					<div className='project'>
						<h2>Hyperspectral Image Classification</h2>
						<p className='project-desc'>Precision through Transfer Learning and DNN</p>
						<p className='tech-stack'><span className='tech-stack-title'>TECH STACK -</span> Python, Pandas, Numpy, Sklearn</p>

					</div>
				</a>
				<a href='https://github.com/SmitPanchal1999/User-Management-System' target='_blank' rel='noreferrer'>
					<div className='project'>
						<h2>User Management System</h2>
						<p className='project-desc'>Efficient user and role management</p>
						<p className='tech-stack'><span className='tech-stack-title'>TECH STACK -</span> Angular, Node.js, ElasticSearch, Grafana</p>

					</div>
				</a>
			</div>
		</section>
	);
};

export default Projects;
