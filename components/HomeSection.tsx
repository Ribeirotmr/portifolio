export default function HomeSection() {
  return (
    <div id="homeSection" className="min-h-screen flex items-center " > {/*bg-[#000000]*/}
      <div className="flex w-full items-center justify-center p-20">
        <div className="w-1/2">
          <p className="text-4xl text-green-400 font-bold animate-bounce">Olá! eu me chamo</p>
          <h1 className="text-4xl font-bold text-green-400 mt-2"> Thierry Ribeiro </h1>
          <p className="text-xl font-semibold text-green-400 mt-2 max-w-lg">
            Estudante de Ciência da Computação na Universidade Federal do Espírito Santo,
            sou apaixonado por resolver problemas e criar soluções inovadoras. Estou constantemente buscando
            aprender mais e estou ansioso por uma oportunidade para aplicar meus conhecimentos e expandir
            minhas habilidades.
          </p>
        </div>
                <div className="w-1/2 flex justify-center items-center">
          <img
            src="/images/dev.png"
            alt="Developer"
            className="w-full h-auto custom-bounce animate-delay-900" //custom-bounce animate-delay-[900ms] w-full h-auto custom-bounce animate-delay-900
          />
        </div>
      </div>
    </div>
  );
}