import React from 'react';

import { AccentSection, ScreenOverLay, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Programming competitions won', },
  { number: 2, text: 'Years of web development experience '},
  { number: 70000, text: 'Users world-wide enjoy software I built.'},
];

const Acomplishments = () => (
  
  <>
  <AccentSection>
    <SectionTitle>accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key= {index}>
          <ScreenOverLay/>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>

      ))}
    </Boxes>
  </AccentSection>
  </>
);

export default Acomplishments;
