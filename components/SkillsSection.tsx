import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  image: string;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: 'Html5', image: './images/html.svg' },
    { name: 'Tailwind', image: './images/tail.svg' },
    { name: 'Javascript', image: './images/js.svg' },
    { name: 'Python', image: './images/p.svg' },
    { name: 'C', image: './images/c.svg' },
    { name: 'C++', image: './images/cpp.svg' },
    { name: 'MySQL', image: './images/mysql.svg' },
    { name: 'SQL', image: './images/sql2.svg' },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver && carouselRef.current) {
        setScrollAmount((prev) => {
          const itemWidth = 180 + 16; // Largura do card (180px) + gap-4 (16px)
          const totalItems = skills.length;
          const totalWidth = itemWidth * totalItems; // Largura do primeiro conjunto
          const newScroll = prev + 0.7; // Velocidade do movimento

          if (newScroll >= totalWidth) {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'none';
              carouselRef.current.style.transform = `translateX(0px)`;
            }
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.01s linear';
              }
            }, 0);
            return 0;
          }

          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 0.01s linear';
            carouselRef.current.style.transform = `translateX(-${newScroll}px)`;
          }
          return newScroll;
        });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isMouseOver, skills.length]);

  return (
    <section id="skillsSection" className="min-h-screen flex flex-col text-white">
      <div className="flex items-center my-4 md:my-8">
        <div className="flex-grow border-t border-purple-700 mx-2 md:mx-4"></div>
        <div className="text-center bg-purple-950 px-4 md:px-6 py-1 md:py-2 rounded">
          <h2 className="text-3xl md:text-4xl font-bold text-white">SKILLS</h2>
        </div>
        <div className="flex-grow border-t border-purple-700 mx-2 md:mx-4"></div>
      </div>

      <div className="flex-grow flex items-center justify-center overflow-x-hidden">
        <div className="relative w-full max-w-[calc((140px+16px)*11*2)] md:max-w-[calc((180px+16px)*11*2)] mx-auto">
          <div
            ref={carouselRef}
            id="skillsCarousel"
            className="flex gap-4 overflow-hidden"
            style={{ width: `${(140 + 16) * skills.length * 2}px`, minWidth: '100%' }}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="skill-slide flex flex-col items-center min-w-[140px] md:min-w-[180px] text-white rounded-lg shadow-md p-2 md:p-4 bg-gray-900"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-16 md:h-24 w-16 md:w-24 mb-1 md:mb-2 pulse"
                  onLoad={() => console.log(`Imagem carregada: ${skill.image}`)}
                  onError={() => console.error(`Erro ao carregar imagem: ${skill.image}`)}
                />
                <p className="text-sm md:text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
