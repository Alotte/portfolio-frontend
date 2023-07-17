import React from 'react';
import { heroSection } from '../../constants/constants';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Frontend <br />
        Developer & Designer
      </SectionTitle>
      <SectionText>
        {heroSection.description_intro} 
      </SectionText>
      <SectionText>
        {heroSection.description_detail}
      </SectionText>
      <Button onClick={() => window.location = 'mailto:alma.ottedag@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;