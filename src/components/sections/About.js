import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="report">
        <Container>
          <div className="graph">
            <h2>H2-B Preparer Data</h2>
            <p>
              Use this tool to understand statistics of H2-B preparers.
            </p>
            <iframe title="Top Preparers - Page 1" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMjQ2NjM4MWYtY2IyYS00YjcxLWJmMzAtOWQ1YWVhNDI2NmUyIiwidCI6IjU3ZmEzMjA1LWI2ZTgtNGQzZC1iNGU1LTMxNjdhZThkMDU4ZSIsImMiOjN9" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <div className="graph">
            <h2>Top Attorneys</h2>
            <p>
              Enjoy the power of the latest web technologies – React.js ,
              Webpack , modern JavaScript and CSS and more — all set up and
              waiting for you to start building.
            </p>
            <iframe title="Top Attorneys" width="100%" height="600" src="https://app.powerbi.com/reportEmbed?reportId=06f22a67-7be7-4e0c-82f3-72b577018f02&autoAuth=true&ctid=57fa3205-b6e8-4d3d-b4e5-3167ae8d058e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtZy1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <div className="graph">
            <h2>Top Categories</h2>
            <p>
              Waste no more time on tooling and performance. Focus on the the
              site you want to build and nothing more.
            </p>
            <iframe title="Top Categories" width="100%" height="600" src="https://app.powerbi.com/reportEmbed?reportId=57742a02-5e17-4ac0-9e68-dd5f47256b92&autoAuth=true&ctid=57fa3205-b6e8-4d3d-b4e5-3167ae8d058e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtZy1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <div className="graph">
            <h2>Grow and build your ideas</h2>
            <p>
              Waste no more time on tooling and performance. Focus on the the
              site you want to build and nothing more.
            </p>
            <iframe title="Decision Date HeatMap" width="100%" height="600" src="https://app.powerbi.com/reportEmbed?reportId=addf787b-0b5d-4cb4-bf5f-8586ceb2c91c&autoAuth=true&ctid=57fa3205-b6e8-4d3d-b4e5-3167ae8d058e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtZy1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
