import Tilt from 'react-parallax-tilt';
import './Logo.css';
import eye from './eye.png';

const Logo = () => {
    return (
        <div className="logo-container ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }}>
                <div className="Tilt-inner">
                    <img className="logo-img" alt="Logo of Eye" src={eye} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
