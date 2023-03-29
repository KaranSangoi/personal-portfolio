import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/testimonials/company-logo-1.svg',
    content: `AN EXTREMELY PROFESSIONAL, POLITE & EXPERIENCED CONSULTANT & DEVELOPER.`,
    body: `Karan is extremely professional in his way of working. He first took a complete brief of our requirements & problems, studied the same and then offered the options available & also guided us with the best possible one based on our priorities, urgency of delivery & budget. He has been really polite, patient & has explained everything is layman terms for me & my team to understand. No matter how many time I must have emailed/ messaged him with my really basic doubts. Also he really ensures to deliver the project taken up one step at a time instead of any false assurances & is also honest to what will be possible and what will not. If you are looking for creating something entirely new or just troubleshoot something in your website/ app/ coding - he is the best person to consult and guide. Thank you, always appreciate your honesty and services.`,
    author: {
      name: 'Saloni',
      title: 'Happy Invites Video Invitation',
      avatarUrl: '/testimonials/1.png',
    },
  },
  {
    companyLogoUrl: '/testimonials/company-logo-2.svg',
    content: `GREAT GUIDE TO BUILD ANY KIND OF WEBSITES.`,
    body: `Karan Sangoi is a great guide to build any kind of websites who supported me in my tough times. He is so knowledgeable, I got my site up and running in less than an hour through his support. Thank you so much.`,
    author: {
      name: 'Dhivya',
      title: 'Lime Fresh',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/company-logo-3.svg',
    content: `KARAN IS A ONE-STOP DESTINATION FOR ALL MY WEBSITE NEEDS.`,
    body: `Karan is a one-stop destination for me for all of my concerns related to website issues as well as graphic design. Want to have a website developed? You can find anyone. But if you want to have a critical thinker who would recommend what is right for you and give life to it, then Karan is the person you should reach. I'm happy with the support I am receiving from him and would reach him for all of my website and graphics-related projects.`,
    author: {
      name: 'Abinay Mandla',
      title: 'Abinay Mandla',
      avatarUrl: '/testimonials/3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <OverTitle>Believe Me, I want to really help</OverTitle>
        <SectionTitle>How I Have Helped Others Over Time</SectionTitle>
        <TestimonialsWrapper>
          <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 5000 }} centeredSlides navigation loop>
            {TESTIMONIALS.map((singleTestimonial, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard>
                  <AuthorContainer>
                    <AuthorImageContainer>
                      <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={60} height={60} />
                    </AuthorImageContainer>
                    <AuthorContent>
                      <AuthorName>{singleTestimonial.author.name}</AuthorName>
                      <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                    </AuthorContent>
                  </AuthorContainer>
                  <Content>“{singleTestimonial.content}”</Content>
                  <Description>{singleTestimonial.body}</Description>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialsWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  background: rgb(var(--secondBackground));
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  & > *:first-child {
    margin-bottom: 4rem;
    color: rgb(var(--secondary));
  }
`;

const TestimonialsWrapper = styled(Container)`
  position: relative;
  margin-top: 4rem;
  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=phone')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 70%;
  color: rgb(var(--secondary));
  ${media('<=phone')} {
    max-width: 100%;
  }
`;

const Description = styled.div`
  text-align: justify;
  font-size: 1.5rem;
  color: rgba(var(--text), 0.9);
  margin-top: 1rem !important;
  max-width: 70%;

  ${media('<=phone')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
