import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import processModularContent from './processModularContent'

const ModularContent = ({content}) => processModularContent(content); // separate long function

ModularContent.propTypes = {
  content: PropTypes.array.isRequired,
};


export const datoCMSFragments = graphql`
fragment Paragraph on DatoCmsParagraph {
  text
  options
  model {
    name
  }
}

fragment Heading on DatoCmsHeading {
  text
  options
  model {
    name
  }
}

fragment ParagraphWithImage on DatoCmsParagraphWithImage {
  text
  options
  model {
    name
  }
  image {
    fluid {
      src
      srcSet
      tracedSVG
    }
  }
}

fragment DoubleImage on DatoCmsDoubleImage {
  options
  model {
    name
  }
  imageFirst {
    fluid {
      src
      srcSet
      tracedSVG
    }
  }
  imageSecond {
    fluid {
      src
      srcSet
      tracedSVG
    }
  }
}

fragment Gallery on DatoCmsGallery {
  options
  gallery {
    fluid {
      src
      srcSet
      tracedSVG
    }
  }
  model {
    name
  }
}

fragment FullWidthImage on DatoCmsFullWidthImage {
  options
  image {
    fluid {
      src
      srcSet
      tracedSVG
    }
  }
  model {
    name
  }
}

fragment List on DatoCmsList {
  text
  options
  model {
    name
  }
}

fragment Attachment on DatoCmsAttachment {
  model {
    name
  }
  file {
    url
  }
  text
  options
}

fragment Seo on DatoCmsSeoField {
  description
  title
  twitterCard
  image {
    url
  }
}
`;


export default ModularContent