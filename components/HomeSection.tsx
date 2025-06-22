import { useEffect, useState, useRef } from "react";

export default function HomeSection() {
  const fullText = `Estudante de Ciência da Computação na Universidade Federal do Espírito Santo, sou apaixonado por resolver problemas e criar soluções inovadoras. Estou constantemente buscando aprender mais e estou ansioso por uma oportunidade para aplicar meus conhecimentos e expandir minhas habilidades.`;

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  // Observer para aplicar fade-in e iniciar a digitação
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            setStartTyping(true); // inicia digitação
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Animação de digitação
  useEffect(() => {
    if (startTyping && index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 30); // velocidade da digitação
      return () => clearTimeout(timeout);
    }
  }, [index, startTyping]);

  return (
    <div id="homeSection" className="min-h-screen flex items-center">
      <div className="flex w-full items-center justify-center p-20">
        <div className="w-1/2">
          <p className="text-4xl text-green-400 font-bold animate-bounce">
            Olá! eu me chamo
          </p>
          <h1 className="text-4xl font-bold text-green-400 mt-2">
            Thierry Ribeiro
          </h1>

          <p
            ref={textRef}
            className="text-xl font-semibold text-green-400 mt-2 max-w-lg opacity-0"
            style={{ "--translate-x": "50px" } as React.CSSProperties}
          >
            {typedText}
            <span className="blinking-cursor">|</span>
          </p>
        </div>

        <div className="w-1/2 flex justify-center items-center animate-fade-in">
          <img
            src="./images/dev.png"
            alt="Developer"
            className="w-full h-auto custom-bounce animate-delay-900"
          />
        </div>
      </div>
    </div>
  );
}
