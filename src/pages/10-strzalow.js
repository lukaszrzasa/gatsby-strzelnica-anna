import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import { graphql } from 'gatsby'
import ModularContent from '../components/organisms/DatoCMS/ModularContent'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'

const seo = {
  title: '10 Strzałów'
}

const ShootingEvent = ({data}) => {
  return (
    <Default>
      <SEO {...seo} />
      <Container>
        <PageHeading
          title={seo.title}
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
  }
}
`;

export default ShootingEvent