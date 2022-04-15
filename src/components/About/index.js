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
        <p> <strong>Software engineer</strong> who has experience operating in an agile environment. His tech stack includes but is not limited to <strong>Postgres, Express.js, React.js, Node.js</strong>, utilizing  <strong>Sequalize</strong> as ORM. He has experience utilizing <strong>JavaScript testing frameworks</strong> such as <strong>Mocha</strong> and <strong>Jasmine</strong>, as well as implementing new ES6 features. His experience in data store libraries is limited to Redux, but could quickly ramp up to utilize others. Although he operates as a full stack engineer, his natural talent allows him to create unique system designs and back end architectures, allowing for the creation of applications that are scalable and maintainable. He is also a strong advocate of the Agile methodology, and has experience in the Scrum methodology.
        </p>
        <p> Spent 8 years as an Electrical Engineer for the US Navy. During this time, he gained valuable experience as a Work Center Supervisor, where he managed and mentored 13 junior sailors. The ability to provide value through teaching and disseminating information to both his team and potential clients, enabled continuous deployment of features and services.
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
