import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { Container } from '../components/Container'
import { Seo } from '../containers/Seo'
import { AboutContainer, AboutText, AboutImage } from '../containers/About'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "react-europe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo title="About Mili Shah" />
      <AboutContainer>
        <Container>
          <SectionTitle>Hi I&#39;m Mili!</SectionTitle>
          <SectionDescription>
            I can craft the unique content about your brand and convert the
            cynic into a loyal brand promoter.
          </SectionDescription>
        </Container>
        <AboutImage img={data.photo.childImageSharp} />
        <AboutText>
          <p>
            I can craft creative content leveraging market-savvy acumen in
            business or consumer trends monitoring and analysis to create new or
            re-define existing brand strategies.
          </p>

          <p>
            I have expertise at collaborating and coordinating efforts to
            consistently produce marketing and advertising collateral that
            drives awareness and profitability along with better search engine
            ranking.
          </p>

          <p>
            Over the years, I’ve become passionate about writing unique
            technical content and sharing with others behind my computer.{' '}
            <Link to="/projects">My projects</Link> are trusted by several
            industry experts.
          </p>

          <p>
            Don&apos;t hesitate to reach out by{' '}
            <a href="mailto:milishah1097@gmail.com">email</a> or on{' '}
            <a href="https://www.linkedin.com/in/mili-shah10">Linkedin</a>.
            I&apos;ll be happy to talk!
          </p>
        </AboutText>
      </AboutContainer>
    </>
  )
}
