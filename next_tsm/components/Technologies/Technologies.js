import React from 'react';
import {  DiFirebase, DiIllustrator, DiPhotoshop, DiReact, DiZend} from 'react-icons/di';
import {FaArtstation} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle> Technologies</SectionTitle>
    <SectionText> 
      I've worked with a range of technologies within web development. From design to functional website. 
    </SectionText>
    <List>
      <ListItem>
         <DiReact size="3rem" />
         <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js, Jotai, both Javascript & Typescript          
            </ListParagraph>
         </ListContainer>
      </ListItem>

      <ListItem>
         <DiIllustrator size="3rem" />
         <ListContainer>
          <ListTitle>UI & UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma for UI design & Prototyping
          </ListParagraph>
         </ListContainer>
      </ListItem>

      <ListItem>
         <DiFirebase size="3rem" />
         <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience  <br />
            interacting with existent REST-ful Databases
          </ListParagraph>
         </ListContainer>
      </ListItem>

      <ListItem>
         <FaArtstation size="2rem" />
         <ListContainer>
          <ListTitle>Brand & Asset Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Illustrator for typography- and logo design. Professional 2D Art assets with Adobe Photoshop</ListParagraph>
         </ListContainer>
      </ListItem>

    </List>
  </Section>

);

export default Technologies;
