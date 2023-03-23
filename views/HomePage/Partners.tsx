import { Users } from '@styled-icons/fa-solid/Users';
import { MoreTime } from '@styled-icons/material-rounded/MoreTime';
import { ExchangeDollar } from '@styled-icons/remix-line/ExchangeDollar';
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

const BlueMoreTime = styled(MoreTime)`
  color: rgb(var(--primary));
  width: 7rem;

  ${media('<=phone')} {
    width: 5rem;
  }
`;

const BlueUsers = styled(Users)`
  color: rgb(var(--primary));
  width: 7rem;

  ${media('<=phone')} {
    width: 5rem;
  }
`;

const BlueExchangeDollar = styled(ExchangeDollar)`
  color: rgb(var(--primary));
  width: 7rem;

  ${media('<=phone')} {
    width: 5rem;
  }
`;

export default function Partners() {
  return (
    <PartnersWrapper>
      <Content>
        <Title>Some Numbers</Title>
        <StatWrapper>
          <IndiStatWrapper>
            <BlueMoreTime />
            <Description>
              <span>2000+</span> hours saved <br /> and counting...
            </Description>
          </IndiStatWrapper>
          <IndiStatWrapper>
            <BlueUsers />
            <Description>
              <span>15+</span> clients served <br /> and counting...
            </Description>
          </IndiStatWrapper>
          <IndiStatWrapper>
            <BlueExchangeDollar />
            <Description>
              <span>69K+</span> client revenue <br /> and counting...
            </Description>
          </IndiStatWrapper>
        </StatWrapper>
      </Content>
    </PartnersWrapper>
  );
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 4rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  padding: 0;
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  text-align: center;
  padding: 0 2rem;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }

  span {
    color: rgb(var(--secondary));
    font-weight: 700;
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
  align-items: center;
  font-size: 16px;
  justify-content: center;
  padding: 0 3%;

  ${media('<=phone')} {
    padding: 5% 3%;
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
