import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Shreyas Parab',
    image: 'shreyas.jpeg',
    role: 'sparab@stanford.edu',
  },
  {
    name: 'Lucas Pauker',
    image: 'lucas.png',
    role: 'lpauker@stanford.edu',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        <Container className="team-cont" style={{ position: 'relative' }}>
          <h1>The team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <StyledExternalLink href={"mailto:" + role}>
                    <Subtitle>{role}</Subtitle>
                  </StyledExternalLink>
                </div>
              );
            })}
          </TeamGrid>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  grid-template-columns: 200px 200px;
  grid-template-rows: min-content;
  grid-gap: 100px;
  justify-content: center;
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.screen.lg}) {
    //justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
`;

const StyledExternalLink = styled(ExternalLink)`
  color: ${props => props.theme.color.black.light};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Team;
