
import '../App.css'

import Audio from './Audio';

import { Link } from 'react-router-dom';

import Audio from '../components/Audio'


const Header = (props) => {
    return (
        <div className="Header">
            <h1> Tune It Up</h1>
            <nav>
                <ul className="NavLinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/songs">Songs</Link></li>
                    
                    <Audio />
                </ul>
            </nav>
            

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