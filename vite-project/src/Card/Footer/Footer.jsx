import './Footer.css'
import GitHub from '../../assets/GitHubIcon.svg'
import Facebook from '../../assets/FacebookIcon.svg'

export default function Footer() {
    return (
        <div className='FooterContainer'>
            <img src={GitHub} alt='GitHub Icon'/>
            <img src={Facebook} alt='Facebook Icon'/>
        </div>
    )
}