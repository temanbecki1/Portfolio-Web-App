import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5y88m2y', 'template_01r1ykk', form.current, '4ZxwFGLwtlN5OPymC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
      e.target.reset();
  }

  return (
    <StyledContactForm>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
              <AnimatedLetters
                letterClass={letterClass}
                stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
          </h1>
         <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols="30" rows="10" />
          <button type="submit"> Send</button>
         </form>
        </div>
      </div>
      <Loader type="pacman" />
    </StyledContactForm>
  )
}

export default Contact

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
