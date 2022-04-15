import { useEffect, useRef } from "react";
import gsap from 'gsap-trial';
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import LogoT from '../../../assets/images/logo-t.png';
import './index.scss';
import Loader from "react-loaders";

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 3,
      }
    )
  }, [])

  return (
    <>
      <div className="logo-container" ref={bgRef}>
        <img
          className="solid-logo"
          ref={solidLogoRef}
          src={LogoT}
          alt="A huge letter T"
        />

        <svg
          width="559pt"
          height="897pt"
          version="1.0"
          viewBox="0 0 559 897"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1)"
            fill="none"
          >
            <path
              ref={outlineLogoRef}

            />
          </g>
        </svg>
      </div>
      <Loader type="pacman" />
    </>

  )
}

export default Logo

