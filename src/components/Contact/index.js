import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
              <AnimatedLetters
                letterClass={letterClass}
                stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
          </h1>
          <h2>
            Page under construction :
            <br />

            Click the LinkedIn icon below to connect.
            <br />

            Looking to implement email form
            <br />

            Thank you!
          </h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
