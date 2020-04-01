import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import { graphql } from 'gatsby'
import ModularContent from '../components/organisms/DatoCMS/ModularContent'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'

const Historia = ({data}) => {
  return (
    <Default>
      <SEO
        title="Historia"
      />
      <Container>
        <PageHeading
          title="Historia"
          subtitle="Wychowujemy od 1910r."
        />
        <ModularContent content={data.datoCmsPageHistory.content}/>
      </Container>
    </Default>
  );
};

export const query = graphql`
query pageHistory {
  datoCmsPageHistory {
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
  }
}
`;

export default Historia