import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Partners() {
  return (
    <PartnersWrapper>
      <Content>
        <OverTitle>Some Numbers</OverTitle>
        <StatWrapper>
          <IndiStatWrapper>
            <h1>2000+</h1>
            <Description>
              hours saved <br /> and counting...
            </Description>
          </IndiStatWrapper>
          <IndiStatWrapper>
            <h1>20+</h1>
            <Description>
              clients served <br /> and counting...
            </Description>
          </IndiStatWrapper>
          <IndiStatWrapper>
            <h1>69K+</h1>
            <Description>
              client revenue <br /> and counting...
            </Description>
          </IndiStatWrapper>
        </StatWrapper>
      </Content>
    </PartnersWrapper>
  );
}

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  padding: 0;
  & > *:first-child {
    margin-bottom: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  text-align: center;
  padding: 0 2rem;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media('<=phone')} {
    flex-direction: column;
  }
`;

const IndiStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  padding: 0 3%;

  ${media('<=phone')} {
    padding: 5% 3%;
  }

  h1 {
    color: rgb(var(--secondary));
    font-weight: 700;
    padding-bottom: 1rem;
  }
`;

const PartnersWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
