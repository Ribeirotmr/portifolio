import { Link as ScrollLink } from 'react-scroll';

export default function Nav() {
  return (
    <nav className="bg-[#5f5f5f] fixed top-0 w-full z-50 flex items-center justify-end gap-4 py-4 pr-8 text-white">
      <ScrollLink to="homeSection" smooth={true} duration={500} className="cursor-pointer hover:text-gray-700">
        HOME
      </ScrollLink>
      <ScrollLink to="academicSection" smooth={true} duration={500} className="cursor-pointer hover:text-gray-700">
        ABOUT
      </ScrollLink>
      <ScrollLink to="skillsSection" smooth={true} duration={500} className="cursor-pointer hover:text-gray-700">
        SKILLS
      </ScrollLink>
      <ScrollLink to="projetosSection" smooth={true} duration={500} className="cursor-pointer hover:text-gray-700">
        PROJETOS
      </ScrollLink>
      <ScrollLink to="contatoSection" smooth={true} duration={500} className="cursor-pointer hover:text-gray-700">
        CONTATO
      </ScrollLink>
    </nav>
  );
}