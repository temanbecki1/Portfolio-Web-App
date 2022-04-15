import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2500)
  }, []);

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass}
            stringArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p> Software engineer who has experience operating in an agile environment. My tech stack includes but is not limited to Postgres, Express.js, React.js, Node.js, utilizing Sequalize as an ORM. I have experience utilizing JavaScript testing frameworks such as Mocha and Jasmine, as well as implementing new ES6 features and changes. My experience in data store libraries is limited to Redux, but have the amplitude to learn others. Although I operate as a full stack engineer, I thrive in environments which cater to my design skill for building out complex API for client consumption and data manipulation.
        </p>
        <p> I spent 8 years as an Electrical Engineer for the US Navy. During this time, I gained valuable experience as a Work Center Supervisor, where I managed and mentored 13 junior sailors. The ability to provide value through teaching and disseminating information to both my team and potential clients, enabled continuous deployment of features and services.
        </p>
        <p>Lastly, I seek to combine all acquired experience in the fields of electricity, electronics, blockchain, business management, and finance to create products and services that speak directly to consumers and clients
        </p>
      </div>
    </div>
  )
}

export default About
