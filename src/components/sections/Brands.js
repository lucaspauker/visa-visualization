import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="questions" accent>
        <StyledContainer>
          <div>
            <h1>Here are some questions we can answer.</h1>
            <ul>
              <li>Who are the top preparers for H2-B visas?
                <ul>
                  <li>Which employers are currently using them as their preparers?</li>
                </ul>
              </li>
              <li>Who are the top attorneys for H2-B visas?
                <ul>
                  <li>Which employers are they preparing data for?</li>
                </ul>
              </li>
              <li>Who are H2-B employers that don't have preparers?
                <ul>
                  <li>How many employees are they sponsoring?</li>
                  <li>What states are they in?</li>
                  <li>How much are they paying their workers?</li>
                  <li>Which industries are they in?</li>
                  <li>What is their contact information?</li>
                </ul>
              </li>
              <li>What does the processing time look like for H2-B?
                <ul>
                  <li>What is the average amount of time between a file being received and a decision being issued?</li>
                  <li>What is the likelihood that you receive a decision on a specific date?</li>
                </ul>
              </li>
            </ul>
            <center><h3>If this is interesting to you, please email us <a href="mailto:sparab22@stanford.edu">sparab22@stanford.edu</a> and <a href="mailto:lpauker@stanford.edu">lpauker@stanford.edu</a>.</h3></center>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
