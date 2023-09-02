import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { ScreenOverLay,Screen, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FaGraduationCap } from 'react-icons/fa';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>recent projects I've worked on </SectionTitle>
    <GridContainer>
      {projects.map(({id,image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
   
            <ScreenOverLay/>
            <Img src={image} />

          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
          <Hr />
            <TagList>
              {tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Learn More</ExternalLinks>
            {/* <ExternalLinks href={source}>Source</ExternalLinks> */}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;