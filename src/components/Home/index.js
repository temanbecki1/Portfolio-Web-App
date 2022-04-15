import LogoTitle from '../../assets/images/logo-t.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['e', 'm', 'a', 'n'];
  const titleArray = ['s', 'o', 'f', 't',
                      'w', 'a', 'r', 'e',
                      ' ', 'e', 'n', 'g', 'i',
                      'n', 'e', 'e', 'r', '.',
  ];

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, []);



  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt='Software Engineer, Web Developer' />
            <AnimatedLetters letterClass={letterClass} stringArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} stringArray={titleArray} idx={19} />
            </h1>
            <h2>Front End Developer / Fullstack Developer</h2>
            <Link to='/contact' className="flat-button">
              CONTACT ME
            </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}


export default Home
