import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import Container from '../components/atoms/Container'
import React from 'react'
import PageHeading from '../components/molecules/PageHeading'
import Calendar from '../components/organisms/Calendar'


const seo = {
  title: 'Rezerwacje'
}

const Contact = () => {
  return (
    <Default>
      <SEO {...seo} />
      <Container>
        <PageHeading
          title={seo.title}
        />
        <Calendar/>
      </Container>
    </Default>
  );
};

export default Contact;