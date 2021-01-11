import './styles.css';
import { ReactComponent as LinkedinIcon } from './linkedin.svg'

function Footer () {
    return (
        
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/vivianevilasboas/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/vivi-vilasboas" target="_new">

                </a>
                <a href="mailto:viviane_boas@yahoo.com.br" title='viviane_boas@yahoo.com.br'>

                </a>
            </div>
        </footer>
        
    )
}       
export default Footer;