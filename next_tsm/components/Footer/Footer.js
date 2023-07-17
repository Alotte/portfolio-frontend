import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* Phone Number */}
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+4676-042-50-33">076-042-50-33</LinkItem>
        </LinkColumn>
        
        {/* Email Address */}
        <LinkColumn>
        <LinkTitle>Mail</LinkTitle>
        <LinkItem href="mailto:alma.ottedag@gmail.com">alma.ottedag@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's thrive togeher</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Alotte/">
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/alma-ottedag-002171104/">
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
