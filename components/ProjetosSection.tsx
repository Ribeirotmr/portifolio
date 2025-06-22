interface Project {
  title: string;
  description: string;
  techIcons: string[]; // Array de caminhos para ícones das tecnologias usadas
  codeLink: string;
  projectLink?: string;
  image?: string;
}

export default function ProjetosSection() {
  const projects: Project[] = [
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game built with Python.',
      techIcons: ['/images/p.svg'], // FAZER: Substitua pelo caminho real do ícone Python
      codeLink: '#', // FAZER: Substitua pelo link real do código
      projectLink: 'https://github.com/Ribeirotmr/mEP_EP/tree/main/jogo_da_velha_robo',
      image: '/images/tictactoe.png',
    },
    {
      title: 'Data Base normalization',
      description: 'This project demonstrates the normalization of a database schema',
      techIcons: ['/images/mysql.svg', '/images/sql2.svg'], // FAZER: Substitua pelo caminho real do ícone MySQL
      codeLink: '#', // FAZER: Substitua pelo link real do código
      projectLink: '',
      image: '/images/data.jpeg',
    },
    {
      title: 'Tradutor de sinais',
      description: 'A web application that translates sign language, but not finished yet.',
      techIcons: ['/images/html.svg', '/images/css.svg', '/images/js.svg'], // FAZER: Substitua pelos caminhos reais dos ícones Python e Flask
      codeLink: '#', // FAZER: Substitua pelo link real do código
      projectLink: '#', // FAZER: Substitua pelo link real do projeto
      image: '/images/sinais.png',
    },
    {
      title: 'Iniciação à Científica',
      description: 'A scientific initiation project that explores the use of quantum computing Quantum Computing Applied to Optimization Problems',
      techIcons: ['/images/p.svg', '/images/qiskit.svg', '/images/ibm.svg', '/images/qc.png'], // FAZER: Substitua pelos caminhos reais dos ícones Python e Flask
      codeLink: '#', // FAZER: Substitua pelo link real do código
      projectLink: '#', // FAZER: Substitua pelo link real do projeto
      image: '/images/qcman.png',
    }

  ];

  return (
    <section id="projetosSection" className="min-h-screen flex items-center justify-center"> {/*bg-[#000000]*/}
      <div className="container mx-auto p-4">
        {/* Título no estilo de SKILLS e MINHA FORMAÇÃO */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-purple-700 mx-4"></div>
          <div className="bg-purple-950 px-6 py-2 rounded">
            <h2 className="text-4xl font-bold text-white">PROJETOS</h2>
          </div>
          <div className="flex-grow border-t border-purple-700 mx-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#777777] hover:text-white"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-32 w-full object-cover rounded-lg mb-4"
                  onLoad={() => console.log(`Imagem carregada: ${project.image}`)}
                  onError={() => console.error(`Erro ao carregar imagem: ${project.image}`)}
                />
              )}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="flex gap-2 mb-2">
                {project.techIcons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt={`Tech icon ${i + 1}`}
                    className="h-14 w-14 object-contain transition-colors duration-300"
                    style={{ filter: 'grayscale(0%) brightness(80%)', transition: 'filter 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) brightness(100%)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(0%) brightness(80%)')}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <a href={project.codeLink} className="bg-white text-black px-2 py-1 rounded text-sm hover:bg-gray-300">
                  Code
                </a>
                {project.projectLink && (
                  <a href={project.projectLink} className="bg-white text-black px-2 py-1 rounded text-sm hover:bg-gray-300">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Botão "View all" centralizado */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/Ribeirotmr" // FAZER: Substitua pelo link real do seu GitHub
            className="bg-purple-950 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
}