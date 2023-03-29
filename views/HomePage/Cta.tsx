import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Or, If you dont want to read along</OverTitle>
          <SectionTitle>And you directly want to transform</SectionTitle>
          <Description>
            Then, without wasting any time, book a free call with me, so that I can explain to you visually, how can I help.
          </Description>
          <ButtonGroup>
            <NextLink href="#calendly" passHref>
              <Button>
                Book Free Call <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Read Along <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--text), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.5rem 0;
  color: rgb(var(--text));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  & > *:first-child {
    color: rgb(var(--secondary));
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--text));
  color: rgb(var(--text));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondBackground));
`;
