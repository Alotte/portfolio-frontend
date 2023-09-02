import React from 'react';
import { heroSection } from '../../constants/constants';

import { GlobalTitle, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Introduction, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <GlobalTitle main center>
        web developer 
        <br />& designer<br />
      </GlobalTitle>
      <Introduction>
        <img src='./profile2.png' width='150'/>
        <SectionText>
          {heroSection.description_intro +" " + heroSection.description_detail} 
        </SectionText>
      </Introduction>
      <Button onClick={() => window.location = 'mailto:alma.ottedag@gmail.com'}>Connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;