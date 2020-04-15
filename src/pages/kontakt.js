import React from 'react'
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import Container from '../components/atoms/Container'
import PageHeading from '../components/molecules/PageHeading'
import styled from 'styled-components'
import Icon from '../components/atoms/Icon'
import { Heading } from '../components/atoms/Heading'
import { graphql } from 'gatsby'
import Hour from '../components/atoms/Hour'
import { ColorBlock } from '../components/atoms/Color'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  > div {
    flex: 1 1 0;
  }
`;

const PhoneWrapper = styled(InnerWrapper)``;

const HourWrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    padding: 0 0.5rem;
  }
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.color.violet};
  font-size: ${({theme}) => theme.size.xxl}rem;
`;

const Contact = ({data, google}) => {
  return (
    <Default>
      <SEO {...data.datoCmsPageContact.seo} />
      <Container>
        <PageHeading title="Kontakt" />
        <InnerWrapper>
          <PhoneWrapper>
            <div>
              <StyledIcon icon="phone"/>
              <Heading>{data.phone_no.value}</Heading>
            </div>
            <div>
              <StyledIcon icon="clock"/>
              <ColorBlock variant="muted">
                <small>Telefony odbieramy w godzinach:</small>
              </ColorBlock>
              <HourWrapper>
                <div>pn-pt:</div>
                <div>
                  <Hour hour={data.call_weekday_open.value}/>
                  -
                  <Hour hour={data.call_weekday_close.value}/>
                </div>
              </HourWrapper>
              <HourWrapper>
                <div>so, nd:</div>
                <div>
                  <Hour hour={data.call_weekend_open.value}/>
                  -
                  <Hour hour={data.call_weekend_close.value}/>
                </div>
              </HourWrapper>
              <HourWrapper>
                <div>święta:</div>
                <div style={{width:'5rem'}}>-</div>
              </HourWrapper>
            </div>
          </PhoneWrapper>
          <div>
            <StyledIcon icon="at"/>
            <Heading>{data.email_addr.value}</Heading>
          </div>
        </InnerWrapper>
      </Container>
      <Map
        google={google}
        zoom={14}
        style={{height:'50rem'}}
        initialCenter={{lat: 50.002927, lng: 22.6239149}}
      >
        <Marker position={{lat: 50.002927, lng: 22.6239149}}/>
      </Map>

    </Default>
  );
};

export const query = graphql`
  query {
      phone_no: datoCmsVariable(key: {eq: "PHONE_NO"}) {
        value
      }
      email_addr: datoCmsVariable(key: {eq: "EMAIL_ADDR"}) {
        value
      }
      call_weekday_open: datoCmsVariable(key: {eq: "OPEN_HOUR_PHONE_CALL_WEEKDAYS"}) {
        value
      }
      call_weekday_close: datoCmsVariable(key: {eq: "CLOSE_HOUR_PHONE_CALL_WEEKDAYS"}) {
        value
      }
      call_weekend_open: datoCmsVariable(key: {eq: "OPEN_HOUR_PHONE_CALL_WEEKEND"}) {
        value
      }
      call_weekend_close: datoCmsVariable(key: {eq: "CLOSE_HOUR_PHONE_CALL_WEEKEND"}) {
        value
      }
      datoCmsPageContact {
          seo {
              ...Seo
          }
      }
  }
`;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYjAkGKN9MBAnS_tZ7outJQSl_YEWwvfc'
})(Contact);