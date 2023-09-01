import React from 'react';
import {  DiFirebase, DiIllustrator, DiPhotoshop, DiReact, DiZend} from 'react-icons/di';
import {FaArtstation} from 'react-icons/fa';
import {  Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle> technology I'm experienced with </SectionTitle>
    <SectionText> 
      Let's see if we're a fit!
      </SectionText>
    <List>
      <ListItem>
         <DiReact size="3rem" />
         <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js<br /> Next.js <br />Javascript <br />Typescript <br />Jotai      
            </ListParagraph>
         </ListContainer>
      </ListItem>

      <ListItem>
         <DiIllustrator size="3rem" />
         <ListContainer>
          <ListTitle>UI & UX</ListTitle>
          <ListParagraph>
            Figma <br />
            Adobe Illustrator <br />
            Canva
          </ListParagraph>
         </ListContainer>
      </ListItem>

      <ListItem>
         <DiFirebase size="3rem" />
         <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Interacting with existent REST-ful Databases
          </ListParagraph>
         </ListContainer>
      </ListItem>

      <ListItem>
         <FaArtstation size="2rem" />
         <ListContainer>
          <ListTitle>Brand & Asset Design</ListTitle>
          <ListParagraph>
            Adobe Illustrator | Typography and logo design. <br />
            Adobe Photoshop  | 2D Art assets</ListParagraph>
         </ListContainer>
      </ListItem>

    </List>
  </Section>

);

export default Technologies;
