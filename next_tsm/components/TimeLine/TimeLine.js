import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { AccentSection, ScreenImage, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { SocialIconsContainer } from '../Footer/FooterStyles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Hr } from '../Projects/ProjectsStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (carouselNode, right) => {
    if (carouselNode == null) {
      console.log("WYHADAFAQ node is null... and right is: " + {right})
    }else {

      return carouselNode.scrollTo({ right, behavior: 'smooth' });
    }
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollRight = Math.floor(carouselRef.current.scrollWidth * 0.6 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollRight);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.6)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about"> 
    <br/>
    <br/>
    <br/>
    <ScreenImage/>
    <SectionDivider/>
    <SectionTitle>my story so far</SectionTitle>
    <SectionText>
      When I started university I quickly found my strengths both with writing algorithms, designing experiences and leading my teams to shore. 
      
      <br/><br/>My team won our first programming competition one year later.
      {/*<br/><br/>I graduated with high marks (4.5 / 5) despite being sick for my entire master studies. */}
      <br/><br/>After graduating I worked as a consultant, creating an open-source python plugin for processing satellite images. It ended up with 5-stars and over 70000 downloads world-wide. 
      <br/><br/> Then I took a break to heal from sickness.
      <br/><br/>Today I'm a business owner working from home within design and web development. I spend my days developing my own SaaS platform, while managing my digital goods webshop within the art industry. 
      
      <br/><br/>Now I'm looking for a workplace in IT to meet wonderful people and take my web developer skills to the next level.
    </SectionText>
    <Button onClick={() => window.location = 'mailto:alma.ottedag@gmail.com'}>Connect</Button>
      <SocialIconsContainer>
     
      <SocialIcons href="https://github.com/Alotte/">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/alma-ottedag-002171104/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
   

      </SocialIconsContainer>
      
    <CarouselContainer id="carousel" ref={carouselRef} onScroll= {handleScroll}>
      <>
      {TimeLineData.map((item,index) => (
        <CarouselMobileScrollNode 
          key={index} 
          final={index === TOTAL_CAROUSEL_COUNT - 1}>
          <CarouselItem
            index={index}
            id={`carousel__item-${index}`}
            active= {activeItem}
            onClick={(e) => handleClick(e, index)}
            >
            <CarouselItemTitle>
              {`${item.year}`}
              {/* Svg for the timeline */}
              <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
              </CarouselItemImg>
            </CarouselItemTitle>

            <CarouselItemText>{item.text}</CarouselItemText>
          </CarouselItem>
        </CarouselMobileScrollNode>
      ))}
      </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key= {index}
            index ={index}
            active = {activeItem}
            onClick= {(e) => handleClick(e,index)}
            type= "button"
            >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
          ))}
      </CarouselButtons>
  </Section>
  );
};

export default Timeline;
