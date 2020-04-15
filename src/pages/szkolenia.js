import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import { graphql } from 'gatsby'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'
import TrainingOfferItem from '../components/organisms/TrainingOfferItem'
import ModularContent from '../components/organisms/DatoCMS/ModularContent'
import ConditionalWrapper from '../components/molecules/ConditionalWrapper'
import SkewSection from '../components/molecules/SkewSection'
import Paragraph from '../components/atoms/Paragraph'
import styled from 'styled-components';
import List from '../components/atoms/List'

const Wrapper = styled(Container)`
  p {
    text-align: center;
  }
`;


const Training = ({data}) => {
  return (
    <Default>
      <SEO {...data.datoCmsPageTraining.seo} />
      <Wrapper>
        <PageHeading
          title="Oferta szkoleniowa"
        />
        <Paragraph>
          Oferta szkoleniowa dla osób pełnoletnich
        </Paragraph>
      </Wrapper>
        {data && data.allDatoCmsOfferTraining.nodes.map(({ title, description, stars, price, content }, key) => <ConditionalWrapper
          key={key}
          condition={!(key%2)}
          wrapper={children => <SkewSection>{children}</SkewSection>}
        >
          <Container>
            <TrainingOfferItem
              title={title}
              description={description}
              price={price}
              stars={parseFloat(stars)}
              variant="violet"
            >
              <ModularContent content={content}/>
            </TrainingOfferItem>
          </Container>
        </ConditionalWrapper>)}
        {data.datoCmsPageTraining && <>
          <SkewSection>
            <Container>
              <List items={data.datoCmsPageTraining.details.split('\n')}/>
            </Container>
          </SkewSection>
          <Container>
            <ModularContent content={data.datoCmsPageTraining.footer}/>
          </Container>
        </>}
    </Default>
  );
};

export const query = graphql`
  query TrainingOffer {
    allDatoCmsOfferTraining(sort: {order: ASC, fields: stars}) {
      nodes {
        stars
        price
        title
        description
        content {
          ... on DatoCmsHeading {
            ...Heading
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
    datoCmsPageTraining {
      details
      footer {
        ... on DatoCmsHeading {
          ...Heading
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

export default Training