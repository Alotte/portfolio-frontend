import React from 'react';

import { AccentSection, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Programming Competitions won', },
  { number: 2, text: 'Years of Front-end experience '},
  { number: 70000, text: 'Users world-wide enjoy software I built.'},
];

const Acomplishments = () => (
  
  <>
  <AccentSection>
    <SectionTitle>accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key= {index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>

      ))}
    </Boxes>
  </AccentSection>
  </>
);

export default Acomplishments;
