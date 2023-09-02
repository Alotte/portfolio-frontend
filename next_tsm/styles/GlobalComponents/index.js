import styled from 'styled-components'

export const Screen = styled.div`
  margin-left: 2rem;
  z-index: -2
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 600px;
  border-radius: 1rem;
  background-color: rgba(50, 72,114, 15%);
  border: 0px solid rgba(50, 72,114, 80);
  aspect-ratio: 16/10;

  
`



export const Screen2 = styled.div`
  z-index: -2
  position: absolute;
  width: 100%;
  height:100%;

  
`


export const ScreenTitle = styled.h2`
  align-self: flex-end;
  
  
`



export const ScreenGradient = styled.div`
  position: absolute;
  z-index: -1;
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%,rgba(255,255,255,0) 60%);
  flex-shrink: 0;
  min-height: 100%
`


export const ScreenImage = styled.div`
  z-index: -2;
  position: absolute;
  background-image: url('./heroImage.jpg');
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  background-repeat: no-repeat;

  @keyframes pan-image {

    0% {
      background-position: 36% 42%;
      background-size: 360%;
    }

    20% {
      background-position: 30% 35%;
      background-size: 360%;
    }

    20.0001%{
      background-position: 68% 85%;
      background-size: 600%;
    } 

    40% {
      background-position: 49% 81%;
      background-size: 600%;
    }

    40.0001%{
      background-position: 80% 42%;
      background-size: 660%;
    } 

    60% {
      background-position: 84% 33%;
      background-size: 660%;
    }

    60.0001%{
      background-position: 80% 42%;
      background-size: 300%;
    } 

    80% {
      background-position: 15% 4%;
      background-size: 360%;
    }

    80.0001%{
      background-position: 80% 10%;
      background-size: 360%;
    } 
  }

  @media ${(props) => props.theme.breakpoints.md} {
    background-size: 1000%;
  }

  /*animation: pan-image 30s linear infinite;*/
`


export const ScreenImage2 = styled.div`

  z-index: -2;
  position: absolute;
  background-image: url('knivsta.jpg');
  height: 100%;
  width: 100%;
  background-size: 400%;
  background-position: center;
  opacity: 0.2;
  background-repeat: no-repeat;

  @keyframes pan-image {

    0% {
      background-position: 36% 42%;
      background-size: 160%;
    }

    20% {
      background-position: 30% 35%;
      background-size: 160%;
    }

    20.0001%{
      background-position: 68% 85%;
      background-size: 200%;
    } 

    40% {
      background-position: 49% 81%;
      background-size: 200%;
    }

    40.0001%{
      background-position: 80% 42%;
      background-size: 260%;
    } 

    60% {
      background-position: 84% 33%;
      background-size: 260%;
    }

    60.0001%{
      background-position: 80% 42%;
      background-size: 160%;
    } 

    80% {
      background-position: 15% 4%;
      background-size: 160%;
    }

    80.0001%{
      background-position: 80% 10%;
      background-size: 160%;
    } 

    

   
  }
  animation: pan-image 60s linear infinite;

  
  @media ${(props) => props.theme.breakpoints.md} {
    visibility: hidden;
  }
`


export const ScreenOverLay = styled.div`
  border-radius: 1rem;
  position: absolute;
  z-index: -2;
  left: 0px;
  top: 0px;
  overflow: hidden;
  background-size: 10px;
  background-position: 0% 0%;
  background-repeat: repeat;
  opacity: 0.9;
  background: #212D45;
  width: 100%;
  height: 100%;


  @keyframes pan-overlay {
    from {
      background-position 0% 0%;

    }
    to {
      background-position: 0% -100%;
    }
  }
  animation: pan-overlay 26s infinite;
  
`;

export const HeroSection = styled.section`
  align-items: center;
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Section = styled.section`
  align-items: center;
  position:relative;
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const AccentSection = styled.section`
  background-color: #0b121f;
  align-items: center;
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;



export const GlobalTitle = styled.h1`
  font-weight: 800;
  font-size: ${(props) => props.main ? '86px' : '72px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '68px' : '50px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '52px' : '46px'};
  }
`;

export const HeroImage = styled.img`
  width: 100vw;

@media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
   
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    font-size: ${(props) => props.main ? '64px' : '52px'};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 700px;
  font-size: 22px;
  line-height: 40px;
  font-weight: 400;
  color: rgba(255, 255, 255);
  margin-bottom: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
