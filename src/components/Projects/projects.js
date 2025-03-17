import React from 'react';
import './projects.css';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
	return (
		<section id='projects'>
			<h2 className='projects-title' data-aos="fade-up">Projects</h2>
			<span className='projects-desc' data-aos="fade-up" data-aos-delay="200">
				Explore these diverse projects, each reflecting a commitment to innovation and solving real-world challenges across technology and beyond.
			</span>
			<div className='projects'>
				{/* CloudDriven */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>CloudDriven</h2>
						<p className='project-desc'>Personal Digital Storage & Secure Sharing</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>AWS</span>
								<span className='tech-tag'>Angular</span>
								<span className='tech-tag'>Node.js</span>
								<span className='tech-tag'>Express.js</span>
								<span className='tech-tag'>MongoDB</span>
								<span className='tech-tag'>Heroku</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/AditModi/CloudDriven' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* HelpingHands */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>HelpingHands</h2>
						<p className='project-desc'>Emergency Help and Safety System</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>Java</span>
								<span className='tech-tag'>Android Studio</span>
								<span className='tech-tag'>Firebase</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/HelpingHands' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>Portfolio</h2>
						<p className='project-desc'>Showcasing my Skills, Projects, and Professional Journey</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>React</span>
								<span className='tech-tag'>JavaScript</span>
								<span className='tech-tag'>TypeScript</span>
								<span className='tech-tag'>GitHub Pages</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/PortfolioBySmitPanchal.github.io' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* HealthCard */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>HealthCard</h2>
						<p className='project-desc'>Manage Health Data Online</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>Angular</span>
								<span className='tech-tag'>Node.js</span>
								<span className='tech-tag'>Express.js</span>
								<span className='tech-tag'>MongoDB</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/HealthCard' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Stock Price Prediction */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>Stock Price Prediction</h2>
						<p className='project-desc'>Forecasting financial trends with advanced ARIMA and LSTM models</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>Python</span>
								<span className='tech-tag'>Pandas</span>
								<span className='tech-tag'>TensorFlow</span>
								<span className='tech-tag'>Numpy</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/Stock-Price-Prediction' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Hyperspectral Image Classification */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>Hyperspectral Image Classification</h2>
						<p className='project-desc'>Precision through Transfer Learning and DNN</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>Python</span>
								<span className='tech-tag'>Pandas</span>
								<span className='tech-tag'>Numpy</span>
								<span className='tech-tag'>Sklearn</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/Classification-of-Hyperspectral-images-using-Transfer-Learning-and-DNN' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* User Management System */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>User Management System</h2>
						<p className='project-desc'>Efficient user and role management</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>Angular</span>
								<span className='tech-tag'>Node.js</span>
								<span className='tech-tag'>ElasticSearch</span>
								<span className='tech-tag'>Grafana</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/User-Management-System' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Payment Management System */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>Payment Management System</h2>
						<p className='project-desc'>Manage user payments with ease and efficiency</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>Python</span>
								<span className='tech-tag'>FastAPI</span>
								<span className='tech-tag'>MongoDB</span>
								<span className='tech-tag'>Angular</span>
								<span className='tech-tag'>TypeScript</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/Payment-Management-System' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Landing Page Registration */}
				<div className='project' data-aos="fade-up" data-aos-offset="200" data-aos-duration="800">
					<div className='project-content'>
						<h2>Landing Page Registration</h2>
						<p className='project-desc'>Custom WordPress theme with dynamic UI and forms</p>
						<div className='tech-stack'>
							<div className='tech-stack-title'>Technologies Used</div>
							<div className='tech-tags'>
								<span className='tech-tag'>WordPress</span>
								<span className='tech-tag'>WPForms</span>
								<span className='tech-tag'>ACF</span>
							</div>
							<div className='project-links'>
								<a href='https://github.com/SmitPanchal1999/Landing-Page-Registration' className='project-link' target='_blank' rel='noreferrer'>
									View Project
									<FiExternalLink className="project-link-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
