import { Link } from "react-router-dom";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";
import imageLogo from '../../../assets/logo-mood-2.png'
import './styles.scss'

function Header() {
  return (  
    <header className= 'header'>
      <img src={imageLogo} alt="logo" /> 
      <section className="interations">
        <Link >
         <HiOutlineBell />
        </Link>
        <Link >
          <HiOutlineCog />
        </Link>
      </section>
    </header>
  )
}

export default Header

