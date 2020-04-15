import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import Container from '../components/atoms/Container'
import React from 'react'
import PageHeading from '../components/molecules/PageHeading'
import Calendar from '../components/organisms/Calendar'
import Flex2Equal from '../components/atoms/Flex2Equal'
import ReservationForm from '../components/organisms/ReservationForm'
import { graphql } from 'gatsby'


const Contact = ({data}) => {
  return (
    <Default>
      <SEO {...data.datoCmsPageReservation.seo} />
      <Container>
        <PageHeading
          title="Rezerwacje"
        />
        <Flex2Equal>
          <div>
            <Calendar/>
          </div>
          <div>
            <ReservationForm/>
          </div>
        </Flex2Equal>
      </Container>
    </Default>
  );
};
export const query = graphql`
  query pageReservation {
    datoCmsPageReservation {
      seo {
        ...Seo
      }
    }
  }
`;

export default Contact;