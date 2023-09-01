import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, Screen, HeroSection, HeroImage, ScreenOverLay, ScreenImage, ScreenTitle, ScreenGradient, ScreenImage2 } from '../styles/GlobalComponents';
import Header from '../components/Header/Header';

const Home = () => {
  return (
  <>
      <Head>
        <title>Alma Ottedag | Home</title>
      </Head>
        <ScreenImage2/>
        <ScreenGradient/>
      <Header/>
      <Section > 
      <Hero />
      {/*<HeroImage src="heroImage.jpg"/>*/}
      </Section> 
      <Acomplishments />

      <Projects />
      <Technologies />
      <Timeline />
      </>
  );
};

export default Home;
