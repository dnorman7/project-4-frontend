import '../App.css'

import Audio from './Audio';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from "@fortawesome/free-solid-svg-icons";


const Header = (props) => {



    return (
        <header className="Header">

            <div className="logo">
            <Link className="logo" to='/'><FontAwesomeIcon icon={faMusic}/></Link>
            </div>
            <div className="audio">
                
            <Audio />

            </div>
        </header>
    )
}
export default Header;