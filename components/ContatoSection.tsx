const ContatoSection = () => {
  return (
    <section id="contatoSection" className="min-h-screen flex items-center justify-center"> {/*bg-[#000000]*/}
      <div className="container mx-auto p-4">
        {/* Título no estilo de SKILLS e PROJETOS */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-purple-700 mx-4"></div>
          <div className="bg-purple-950 px-6 py-2 rounded">
            <h2 className="text-4xl font-bold text-white">Contato</h2>
          </div>
          <div className="flex-grow border-t border-purple-700 mx-4"></div>
        </div>
        <div className="social-container">
          {/* Botão GitHub */}
          <div className="social-button github">
            <a href="https://github.com/Ribeirotmr" target="_blank" className="side">
              <img src="./images/github2.svg" alt="GitHub" className="h-12 w-12" />
              GitHub
            </a>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>

          {/* Botão Gmail */}
          <div className="social-button gmail">
            <a href="mailto:seuemail@gmail.com" target="_blank" className="side">
              <img src="./images/gmail.svg" alt="Gmail" className="h-12 w-12" /> 
              Gmail
            </a>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>

          {/* Botão X (Twitter) */}
          <div className="social-button x">
            <a href="https://twitter.com/seuusuario" target="_blank" className="side">
              <img src="./images/tw.svg" alt="X" className="h-12 w-12"/>
              X
            </a>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>

          {/* Botão Instagram */}
          <div className="social-button instagram">
            <a href="https://instagram.com/seuusuario" target="_blank" className="side">
              <img src="./images/instagram.svg" alt="Instagram" className="h-12 w-12" />
              Instagram
            </a>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>

          {/* Botão LinkedIn */}
          <div className="social-button linkedin">
            <a href="https://linkedin.com/in/seuusuario" target="_blank" className="side">
              <img src="./images/linkedin.svg" alt="LinkedIn" className="h-12 w-12" />               LinkedIn
            </a>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
