import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'
import { graphql } from 'gatsby'
import CardList from '../components/organisms/CardList'
import styled from 'styled-components'
import Flex2Equal from '../components/atoms/Flex2Equal'
import { Heading, HeadingSection } from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import Color from '../components/atoms/Color'
import Indent from '../components/atoms/Indent'
import SkewSection from '../components/molecules/SkewSection'
import AmmoItem from '../components/molecules/offer/AmmoItem'
import ServiceItem from '../components/molecules/offer/ServiceItem'

const seo = {
  title: 'Cennik'
}

const PackagesWrapper = styled(Container)`
  display: flex;
  > div {
    padding: 2rem;
    width: 25%;
  }
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    flex-wrap: wrap;
    > div {
      width: 50%;
    }
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
  }
`;

const paymentsMethods = (<Container>
  <Flex2Equal>
    <div>
      <Heading>Dostępne metody płatności</Heading>
      <Paragraph>
        Na dzień dzisiejszy <Color color="red">nie honorujemy płatności kartą</Color>.
        Możliwa jest tylko <Color color="green">płatność gotówką w obiekcie </Color>
        lub <Color color="green">przelewem przed wizytą</Color>.
      </Paragraph>
    </div>
    <div>
      <Heading>Chcesz zapłacić przelewem?</Heading>
      <Paragraph>Oto numer naszego konta:</Paragraph>
      <Indent size="xxl">
        <div>21 1020 4391 0000 6302 0199 9374</div>
        <strong><Color color="violet">UWAGA: ostatnio nastąpiła zmiana numeru rachunku!</Color></strong>
      </Indent>
      <Paragraph>Pamiętaj o odpowiednim tytule przelewu:</Paragraph>
      <Indent size="xxl">
        <div>
          Opłata za wynajem strzelnicy, <Color color="violet">[DATA WIZYTY]</Color>, <Color color="violet">[GODZINA/GODZINY WIZYTY]</Color>,
        </div>
      </Indent>
    </div>
  </Flex2Equal>
</Container>);

const Ammo = ({ammo}) => (<Container>
  <HeadingSection>Amunicja</HeadingSection>
  {ammo.nodes.map(({ammo, weapon, ammoImage, weaponPrice, price},i) => <AmmoItem
    key={i}
    ammo={ammo}
    weapon={weapon}
    price={price}
    weaponPrice={weaponPrice}
    image={ammoImage}
  />)}
</Container>);

const Services = ({services}) => (<SkewSection>
  <Container>
    {services.nodes.map(({ name, description, price, promo }, i) => <ServiceItem
      key={i}
      name={name}
      description={description}
      promo={promo}
      priceStr={price}
    />)}
  </Container>
</SkewSection>)

const Packages = ({packages}) => <PackagesWrapper>
  {packages.nodes.map(({name, price, items},k) => <div key={k}>
    <CardList
      header={{
        title: name,
        subtitle: `${price} zł`,
      }}
      items={items}
    />
  </div>)}
</PackagesWrapper>



const Pricing = ({data}) => {

  const { packages, services, ammo } = data;

  return (
    <Default>
      <SEO {...seo} />
      <Container>
        <PageHeading
          title={seo.title}
        />
      </Container>
      {paymentsMethods}
      {services && <Services services={services} />}
      {ammo && <Ammo ammo={ammo}/>}
      {packages && <Packages packages={packages} />}
    </Default>
  );
};

export const query = graphql`
  query {
    packages:allDatoCmsOfferPackage {
      nodes {
        name
        price
        items {
          icon
          name:text
        }
      }
    }
    services:allDatoCmsOfferService(sort:{fields:order,order:ASC}) {
      nodes {
        name
        price
        promo
        description
      }
    }
    ammo:allDatoCmsOfferAmmo(sort:{fields:price,order:ASC}) {
      nodes {
        ammo
        weapon
        ammoImage {
          fluid {
            tracedSVG
            src
            srcSet
          }
        }
        weaponPrice
        price
      }
    }
  }
`;

export default Pricing;