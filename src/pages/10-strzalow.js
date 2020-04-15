import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import { graphql } from 'gatsby'
import ModularContent from '../components/organisms/DatoCMS/ModularContent'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'


const ShootingEvent = ({data}) => {
  return (
    <Default>
      <SEO {...data.datoCmsPageShootingEvent.seo} />
      <Container>
        <PageHeading
          title="10 Strzałów"
          subtitle="ku chwale ojczyzny"
        />
        {data && <ModularContent content={data.datoCmsPageShootingEvent.content}/>}
      </Container>
    </Default>
  );
};

export const query = graphql`
query pageShootingEvent {
  datoCmsPageShootingEvent {
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

export default ShootingEvent