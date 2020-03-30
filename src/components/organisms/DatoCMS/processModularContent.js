import React from 'react'
import PropTypes from 'prop-types'
import getStyles from './getStyles'
import Paragraph from '../../atoms/Paragraph'
import { DOUBLE_IMAGE, HEADING, IMAGE, PARAGRAPH, PARAGRAPH_WITH_IMG } from './types'
import ParagraphWithImage from '../../molecules/ParagraphWithImage'
import Image from '../../atoms/Image'

const processModularContent = (content) => {
  return content.map(item => {

    // separate items from DatoCMS
    const { type, text, options, image } = item; //some of them were null/undefined

    // options[] => css styles{}
    const styles = getStyles(options);

    switch( type ) {
      case PARAGRAPH:
        return <Paragraph styles={styles}>{text}</Paragraph>
      case PARAGRAPH_WITH_IMG:
        return <ParagraphWithImage image={image} text={text} styles={styles}/>;
      case IMAGE:
        return <Image data={image} styles={styles}/>;
      case DOUBLE_IMAGE:
        return 'double-image';
      case HEADING:
        return 'heading';
      default:
        console.warning(`Unknown type "${type}"`)
        return null;
    }
  });
};

processModularContent.propTypes = {
  content: PropTypes.array.isRequired,
};

export default processModularContent;