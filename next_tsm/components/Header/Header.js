import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Home, Span, Logo } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/"  style= {{display:"flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
         <img src= "askaartSmall.png" width="38px"/> <Span>Alma Ottedag</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Alotte/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alma-ottedag-002171104/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
