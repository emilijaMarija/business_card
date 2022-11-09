import './About.css'
import EmailLogo from '../../assets/email.svg'
import LinkedinLogo from '../../assets/linkedin.svg'

export default function About() {
    return (
        <div className='About'>
            <h3>Emilija Marija Zakardonskytė</h3>
            <h6>Front-End Developer</h6>
            <div className='Buttons'>
                <button> <img src={EmailLogo} alt='Email icon' /> Email</button>
                <button className='LinkedIn'><img src={LinkedinLogo} 
                alt='LinkedIn icon' /> LinkedIn</button>
            </div>
            <h5>About</h5>
            <p>I am an aspiring frontend developer with a particular interest in
                making things simple and automating daily tasks. I try to keep 
                up with security and best practices, and am always looking for 
                new things to learn. </p>
            <h5>Interests</h5>
            <p>Avid baker. Music lover. Book worm.</p>
        </div>
    )
}
