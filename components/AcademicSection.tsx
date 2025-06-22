import { useEffect, useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  side: 'left' | 'right';
}

export default function AcademicSection() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '',
      title: 'Ensino Médio',
      description: 'Centro Educacional Charles Darwin',
      icon: '/images/graduate.png',
      side: 'left',
    },
    {
      year: '2022-2025',
      title: 'Ciência da Computação',
      description: 'Universidade Federal do Espírito Santo (UFES)',
      icon: '/images/code.png',
      side: 'right',
    },
    {
      year: '2025-atual',
      title: 'Estatística',
      description: 'Universidade Federal do Espírito Santo (UFES), cursando',
      icon: '/images/statistic.png',
      side: 'left',
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            const isLeft = entry.target.querySelector('.timeline-card')?.classList.contains('flex-row-reverse');
            (entry.target as HTMLElement).style.setProperty('--translate-x', isLeft ? '-50px' : '50px');
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = timelineRef.current?.querySelectorAll('.timeline-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="academicSection" className="min-h-screen flex flex-col text-white"> {/*bg-[#000000]*/}
      <div className="container mx-auto pt-20 text-center">
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-purple-700 mx-4"></div>
          <div className="bg-purple-950 px-6 py-2 rounded">
            <h2 className="text-4xl font-bold text-white">ACADEMIC</h2>
          </div>
          <div className="flex-grow border-t border-purple-700 mx-4"></div>
        </div>
        <div className="relative flex flex-col items-center" ref={timelineRef}>
          {/* Linha central estendida */}
          <div className="absolute w-1 bg-white h-[100%] left-1/2 transform -translate-x-1/2 top-0"></div>
          
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex w-full mb-12 items-center timeline-card opacity-0 ${
                event.side === 'left' ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className="w-1/2 hidden md:block"></div>
              <div
                className={`w-full md:w-1/2 p-8 ${
                  event.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                }`}
              >
                <div
                  className={`relative bg-white text-black rounded-lg shadow-md p-8 max-w-sm mx-auto transform transition-transform duration-700 ${
                    event.side === 'left' ? 'md:-translate-x-6' : 'md:translate-x-6'
                  }`}
                >
                  <img
                    src={event.icon}
                    alt={event.title}
                    className="h-16 w-16 mb-4 mx-auto md:mx-0 animate-bounce"
                  />
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.year}</p>
                  <p className="mt-2">{event.description}</p>
                  <div
                    className={`absolute top-1/2 h-px bg-white w-12 ${
                      event.side === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                    }`}
                  ></div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-[#007bff] border-4 border-white rounded-full pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}