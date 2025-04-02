
import logo from "../assets/logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='logo' className="mx-2 w-25" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/mahesh-narayanan-2339b2175/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "24px" }}
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/maheshnarayanan97?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "24px" }}
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/_mahesh_narayanan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "24px" }}
                >
                    <FaInstagram />
                </a>
                <FaTwitterSquare />
            </div>
        </nav>
    )
}

export default Navbar
