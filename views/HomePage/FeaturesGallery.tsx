import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import BasicCard from 'components/BasicCard';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';

const useMediaQuery = (width: Number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

const TABS = [
  {
    title: 'BEGIN',
    description:
      'If you are digital coach or course creator,<br/><br/> you probably may have created free lead magnet, a small trial first level product, or a basic digital course<br/><br/> and also you maybe doing 1-1 personal coaching! <br/><br/>That’s the ideal career growth of a coach!',

    baseColor: '249,82,120',
    secondColor: '221,9,57',
    caption: '<p>Build Your Ideal Career Growth</p>',
  },
  {
    title: 'GROW',
    description: `If you don't have all of these created yet, you're probably thinking about it.<br/><br/> Because apart from done-for-you services, everything else can generate you side income without your personal intervention.<br/><br/> "Create once and sell forever" is the motto!`,

    baseColor: '57,148,224',
    secondColor: '99,172,232',
    caption: '<p>Build Your Regular Income</p>',
  },
  {
    title: 'AND TRANSFORM',
    description: `Now, as your products and services are in place, its time to reap benefits!<br/><br/>
      
      But, wait... as you have grown busy now, who sells your services and products?<br/><br/>
      
      Because it can become really difficult to sell all of them simple by keeping them at linktree or posting some frequent social media stories/post about them! <br/><br/>
      
      That's where a landing page or website comes in. It acts as your salesperson, doing all the necessary things to sell your products and courses, even when you're not around.`,

    baseColor: '88,193,132',
    secondColor: '124,207,158',
    caption: '<p>Time To Reap Benefits</p>',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isBreakpoint = useMediaQuery(600);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    console.log('testtttt', isBreakpoint);

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        {!isBreakpoint && <BasicCard key={singleTab.title} {...singleTab} />}
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            {isBreakpoint ? (
              <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: singleTab.caption }}></div>
            )}
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <ContentWrapper>
        <Content>
          <OverTitle>Why Should You Care To</OverTitle>
          <SectionTitle>2X YOUR COACHING BUSINESS?</SectionTitle>
        </Content>
        <GalleryWrapper>
          <TabsContainer>{tabsMarkup}</TabsContainer>
          {imagesMarkup}
        </GalleryWrapper>
      </ContentWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #011c27;
  padding-bottom: 10rem !important;
`;

const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  padding: 0;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  width: 100%;

  ${media('<=phone')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
  color: white;
`;

const TabsContainer = styled.div`
  margin-right: 4rem;
  width: 30%;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=phone')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  border-radius: 0.8rem;
  display: ${(p) => (p.isActive ? 'flex' : 'none')};
  box-shadow: var(--shadow-md);
  width: 70%;

  ${media('<=phone')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=phone')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
