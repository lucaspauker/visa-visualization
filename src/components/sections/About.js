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
            <h2>Top H2-B Job Categories</h2>
            <p>
              This tool shows the distribution of the top 15 H2-B job categories.
              It is clear that landscaping is the largest job category, accounting for 49.5% of the total workers requested.
            </p>
            <iframe title="Top Categories" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZWUyNTk1YTEtNWI4ZC00MWMxLTgzM2ItY2RlOWU2MjVlODBmIiwidCI6IjU3ZmEzMjA1LWI2ZTgtNGQzZC1iNGU1LTMxNjdhZThkMDU4ZSIsImMiOjN9&pageName=ReportSection" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <div className="graph">
            <h2>Top H2-B Preparers</h2>
            <p>
              Use this tool to understand statistics of H2-B preparers.
              The graph on the right shows the distribution of job categories for visa applications.
              By clicking a firm on the left, you can see the job categories that they handle the most.
            </p>
            <iframe title="Top Preparers" width="100%" height="541.25" src="https://app.powerbi.com/view?r=eyJrIjoiMTU5NzA4ZWUtODAyYi00YjNmLTlhOGEtNzljM2E1ODBkZmU3IiwidCI6IjU3ZmEzMjA1LWI2ZTgtNGQzZC1iNGU1LTMxNjdhZThkMDU4ZSIsImMiOjN9" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <div className="graph">
            <h2>Top H2-B Attorneys</h2>
            <p>
              This tool shows the top H2-B attorneys sorted by the number of cases that they process.
              By clicking on one of the bars in the top graph, you can see more information about the specific attorney like their name and the total number of workers sponsored by them.
            </p>
            <iframe title="Top Attorneys" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZGI3N2E1MWMtMjAyYS00NDkyLTliZTUtZGNkYmJjNWNhZGExIiwidCI6IjU3ZmEzMjA1LWI2ZTgtNGQzZC1iNGU1LTMxNjdhZThkMDU4ZSIsImMiOjN9" frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <div className="graph">
            <h2>Decision Date Heatmap</h2>
            <p>
              This tool shows when decisions were made by OFLC for the applications. Decision date is defined as the <a href="https://www.dol.gov/sites/dolgov/files/ETA/oflc/pdfs/H-2B_Record_Layout_FY2022_Q2.pdf">"date on which the last significant event or determination was issued by OFLC."</a>&nbsp;
              We can see that the decision dates are clustered around February and August.
            </p>
            <iframe title="Decision Date HeatMap" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiOTk2YWM1NWUtODkzYy00MzdmLWFhNGYtY2RmZTMwNzhiY2YxIiwidCI6IjU3ZmEzMjA1LWI2ZTgtNGQzZC1iNGU1LTMxNjdhZThkMDU4ZSIsImMiOjN9" frameBorder="0" allowFullScreen={true}></iframe>
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
