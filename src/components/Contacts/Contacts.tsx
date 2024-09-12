import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function Contacts() {
  return (
    <div className='my-7 w-full'>
      <h2 className='text-2xl text-gray-400 ml-4 mb-2'>Contatos</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 pl-6 gap-5 text-white">
        <a className="flex items-center gap-2" href="https://wa.me/5521982143323" target="_blank">
          <FaWhatsapp size={24} /> (21) 982143323
        </a>
        <a className="flex items-center gap-2" href="mailto:joaopfc2764@gmail.com" target="_blank">
          <IoIosMail size={24} /> joaopfc2764@gmail.com
        </a>
        <a className="flex items-center gap-2" href="https://www.linkedin.com/in/joao-paulo-farias/" target="_blank">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a className="flex items-center gap-2" href="https://github.com/DevJpFarias" target="_blank">
          <FaGithub size={24} /> Github
        </a>
      </div>
    </div>
  )
}