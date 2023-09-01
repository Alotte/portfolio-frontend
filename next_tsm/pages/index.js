import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section,HeroSection, HeroImage } from '../styles/GlobalComponents';
import Header from '../components/Header/Header';

const Home = () => {
  return (
  <>
      <Head>
        <title>Alma Ottedag | Home</title>
      </Head>
      <Header/>
      <Section grid> 
      <Hero />
      {/*<HeroImage src="heroImage.jpg"/>*/}
      <BgAnimation />
      </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      </>
  );
};

export default Home;
