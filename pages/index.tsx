import Head from 'next/head';
import Nav from '../components/Nav';
import HomeSection from '../components/HomeSection';
import AcademicSection from '../components/AcademicSection';
import SkillsSection from '../components/SkillsSection';
import ProjetosSection from '../components/ProjetosSection';
import ContatoSection from '../components/ContatoSection';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Thierry Ribeiro - Portfólio</title>
        <meta name="description" content="Portfólio de Thierry Ribeiro, estudante de Ciência da Computação" />
        <meta charSet="UTF-8" />
      </Head>
      <Nav />
      <HomeSection />
      <AcademicSection />
      <SkillsSection />
      <ProjetosSection />
      <ContatoSection />
    </div>
  );
}