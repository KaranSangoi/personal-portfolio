import NextLink from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Content Marketing',
    description: `Continuous Posts and Stories are needed <br/> When you grow busy, it can sometimes slip of your mind to sell it via posts/stories! <br/> What happens then?`,
    solution: `I Help you with ChatGPT to find content which helps you with time saving and setup Blog in website which helps in seo to get you more clients`,
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Lead Gen & Nurturing',
    description: `Continuous cold DM's and relationship is needed! <br/>
      Keeping track of all interactions in a spreadsheet or other tool.<br/>
      And, when number of leads grow<br/>
      What happens then?`,
    solution: `A website with email automation capabilities can help you capture leads and automate your follow-up process, allowing you to save time and focus on coaching.`,
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Calls & Sales',
    description: `Continuous discovery call & sales call booking is needed <br/>
      When client's cant make it to call, you need to reschedule everything! <br/>
      But when you grow busy <br/>
      What happens then?`,
    solution: ` A website with a scheduling tool can help you streamline the booking process and save time. By allowing clients to book coaching sessions directly through your website, you can eliminate the need for back-and-forth DMs`,
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Follow-ups',
    description: `Continuous follow-ups related to calls, payments-reminders are needed <br/>
      Many times additional support is needed too! <br/>
      You do these follow-ups manually, but if you miss them <br/>
      What happens then?`,
    solution: `A website with FAQs, feedback form, support form and related articles can save your personal time, which you evne cant think of!`,
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Business Admin Tasks',
    description: `Continuous track of payments, onboarding and resource management is needed <br/>
      Sharing of payment updates and resources needs to be done manually <br/>
      Incase, you share a old resource or miss payments <br/>
      What happens then?`,
    solution: `Integrating a payment gateway into your website, you can easily accept online payments from clients and avoid the need for manual invoicing or payment collection.`,
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Coaching Sessions',
    description: `Continuous 1-1 bookings, whatsapp communications, progress tracking is needed <br/>
      Progress tracking and then getting back to client can be tedious when manual<br/>
      As, client-base grows, whatsapp groups and chats grow making it messy<br/>
      What happens then?`,
    solution: `An LMS website can serve as a centralized platform for all of your clients' progress and learning materials. By uploading resources such as videos, PDFs, and other materials to your LMS, you can ensure that clients have access to all the information they need in one place, making it easier for them to keep track of their progress.`,
  },
];

export default function Features() {
  const [showSolution, setShowSolution] = useState(false);

  const handleClick = () => {
    setShowSolution(true);
  };

  return (
    <>
      {!showSolution ? (
        <FeaturesWrapper>
          <ContentWrapper>
            <Content>
              <OverTitle>Right now You Are Traditional Coach</OverTitle>
              <SectionTitle>Focusing on tasks rather than scaling!</SectionTitle>
              <Description>
                Now when you are ready to TRANSFORM and SCALE, <br /> You are constantly juggling between multiple tasks-
              </Description>
            </Content>
            <CustomAutofitGrid>
              {FEATURES.map((singleFeature, idx) => (
                <BasicCard key={singleFeature.title} {...singleFeature} showSolution={showSolution} />
              ))}
            </CustomAutofitGrid>
            <Description>What happens, when you get tired of spending hours each week on above tasks?</Description>
            <Description>What happens, to your freedom, for which you left your 9-5?</Description>
            <Description>So, Stop Being Traditional Coach, And Be A Advanced Digital Coach Instead</Description>
            <NextLink href="#solution" passHref>
              <Button onClick={handleClick}>
                Click Here For Solution <span>&rarr;</span>
              </Button>
            </NextLink>
          </ContentWrapper>
        </FeaturesWrapper>
      ) : (
        <FeaturesWrapper id="solution">
          <ContentWrapper>
            <Content>
              <OverTitle>Be An Advanced COach Instead</OverTitle>
              <SectionTitle>Streamline your business to make it 2X!</SectionTitle>
              <Description>
                Now when you are ready to TRANSFORM and SCALE, <br /> I, with my website service can help you to automate and scale your
                business 2X!
              </Description>
              <Description>Read to know how 👇</Description>
            </Content>
            <CustomAutofitGrid>
              {FEATURES.map((singleFeature, idx) => (
                <BasicCard key={singleFeature.title} {...singleFeature} showSolution={showSolution} />
              ))}
            </CustomAutofitGrid>
            <Description>I now sugggest, dont waste another minute on tedious daily tasks.</Description>
            <Description>Let me help you attain freedom in your diggital coachingg business and 2X it!</Description>
            <Description>
              Dont worry if you are still clueless about all of this,{' '}
              <NextLink href="#caledly" passHref>
                BOOK A FREE CALL NOW
              </NextLink>
              , and I will pateintly craft a customised solution for your business to 2X!
            </Description>
            <Description>NO TIME LIMIT FOR FREE CALL, I really want to help you 2X!</Description>
          </ContentWrapper>
        </FeaturesWrapper>
      )}
    </>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin-top: 4rem;
  width: 100%;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const FeaturesWrapper = styled(Container)`
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

  a {
    margin-top: 3rem;
  }
`;

const Content = styled.div`
  & > *:nth-child(2) {
    margin-top: 4rem;
  }
  text-align: center;
  color: white;
  & > *:first-child {
    color: rgb(var(--secondary));
  }
`;

const Description = styled.div`
  font-size: 2rem;
  color: rgba(var(--textSecondary), 0.8);
  margin-top: 5rem;
  text-align: center;

  a {
    color: rgb(var(--secondary));
  }
`;
