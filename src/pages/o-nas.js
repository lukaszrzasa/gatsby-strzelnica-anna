import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import { graphql } from 'gatsby'
import ModularContent from '../components/organisms/DatoCMS/ModularContent'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'

const AboutUs = ({data}) => {
  return (
    <Default>
      <SEO {...data.datoCmsPageAbout.seo} />
      <Container>
        <PageHeading title="O nas"/>
        <ModularContent content={data.datoCmsPageAbout.content}/>
      </Container>
    </Default>
  );
};


export const query = graphql`
query pageAbout {
  datoCmsPageAbout {
    content {
      ... on DatoCmsHeading {
        ...Heading
      }
      ... on DatoCmsAttachment {
        ...Attachment
      }
      ... on DatoCmsDoubleImage {
        ...DoubleImage
      }
      ... on DatoCmsParagraphWithImage {
        ...ParagraphWithImage
      }
      ... on DatoCmsGallery {
        ...Gallery
      }
      ... on DatoCmsFullWidthImage {
        ...FullWidthImage
      }
      ... on DatoCmsList {
        ...List
      }
      ... on DatoCmsParagraph {
        ...Paragraph
      }
    }
    seo {
      ...Seo
    }
  }
}
`;

export default AboutUs