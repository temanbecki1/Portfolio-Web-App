import './index.scss';
import LogoTitle from '../../assets/images/logo-t.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1> Hi, <br /> I'm
        <img src={LogoTitle} alt='developer' />
        eman
        <br />
        Software Engineer
        </h1>
        <h2>Frontend Developer / Fullstack Developer</h2>
        <Link to='/contact' className="flat-button" >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}


export default Home
