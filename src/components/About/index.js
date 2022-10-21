import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faJsSquare, faReact, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass}
            stringArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p> <strong>Software engineer</strong> who has over 2 yrs of experience. He has experience operating in an agile environment. His tech stack includes <strong>Java, Javascript, SQL, Postgres, Express.js, React.js, Node.js, Sequalize, Hibernate/JPA</strong>. He has experience utilizing <strong>JavaScript testing frameworks</strong> such as <strong>Mocha</strong> and <strong>Jasmine</strong>, as well as <strong>Mockito, JUnit</strong> for Java testing. He has experience in data store libraries such as Redux. He seeks to expand his knowledge of Flux architecture, as well as implementing more client facing web apps. He is a fullstack engineer, operating on which every part of the stack needs his touch. He is also a strong advocate of the Agile methodology, and has experience in the Scrum methodology.
        </p>
        <p> Spent 8 years as an Electrical Engineer for the US Navy. During this time, he gained valuable experience as a Work Center Supervisor, where he managed, trained and mentored 13 junior sailors. He was instrumental in implementing an onboarding process to produce qualified engineers, enabling continuous deployment of features and services.
        </p>
        <p>Lastly, he seeks to combine all acquired experience in the fields of electricity, electronics, blockchain, business management, and finance to create products and services that speak directly to consumers and clients alike.
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
