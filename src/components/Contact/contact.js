import React, { useRef } from 'react';
import LinkedInImg from '../../assets/icons8-linkedin.png';
import GithubImg from '../../assets/icons8-github.png';
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_d4bgca8', 'template_7szznzt', form.current, 'Iy98VhxBVM1ljJH-3').then(
			(result) => {
				e.target.reset();
				alert('Email sent successfully!');
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<section id='contact'>
			<h1 className='contact-title'>Contact Me</h1>
			<span className='contact-desc'>Please fill out the form below to discuss any work opportunities</span>
			<form className='contact-form' ref={form} onSubmit={sendEmail}>
				<input type='text' className='name' name='from_name' placeholder='Your Name' required />
				<input type='email' className='email' name='from_email' placeholder='Your Email' required />
				<textarea className='msg' name='message' rows='5' placeholder='Your Message' required />
				<button type='submit' value='Send' className='submit-btn'>
					Submit
				</button>
				<div className='links'>
					<a href='https://www.linkedin.com/in/panchal-smit/' target='_blank' rel='noreferrer'>
						<img src={LinkedInImg} alt='LinkedIn' className='link' />
					</a>
					<a href='https://github.com/SmitPanchal1999' target='_blank' rel='noreferrer'>
						<img src={GithubImg} alt='Github' className='link' />
					</a>
				</div>
			</form>
		</section>
	);
};

export default Contact;
