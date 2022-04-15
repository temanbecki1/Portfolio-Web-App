import FacePic from '../../../assets/images/TemanBeckPhoto.jpg'
import './index.scss';
import Loader from "react-loaders";

const Logo = () => {


  return (
    <>
      <div className="logo-container" >
        <img className='photo' src={FacePic} alt="Teman Beck" />
      </div>
      <Loader type="pacman" />
    </>

  )
}

export default Logo

