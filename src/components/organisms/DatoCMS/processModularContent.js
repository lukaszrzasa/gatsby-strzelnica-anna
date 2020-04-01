import React from 'react'
import PropTypes from 'prop-types'
import getStyles from './getStyles'
import Paragraph from '../../atoms/Paragraph'
import {
  DOUBLE_IMAGE,
  HEADING,
  FULL_WIDTH_IMAGE,
  PARAGRAPH,
  PARAGRAPH_WITH_IMG,
  LIST,
  GALLERY,
  ATTACHMENT,
} from './types'
import ParagraphWithImage from '../../molecules/ParagraphWithImage'
import Image from '../../atoms/Image'
import List from '../../atoms/List'
import { Heading } from '../../atoms/Heading'

const processModularContent = (content) => {
  return content.map((item, index) => {

    // separate items from DatoCMS
    const { model, text, options, image } = item; //some of them were null/undefined

    // options[] => css styles{}
    const style = options ? getStyles(options) : {};
    //
    const props = {
      style,
      key: index,
    };

    switch( model.name ) {
      case PARAGRAPH:
        return <Paragraph {...props}>{text}</Paragraph>
      case PARAGRAPH_WITH_IMG:
        return <ParagraphWithImage {...props} image={image} text={text}/>;
      case FULL_WIDTH_IMAGE:
        return <Image {...props} fluid={image}/>;
      case DOUBLE_IMAGE:
        console.warn('TODO');
        return 'double-image';
      case GALLERY:
        console.warn('TODO');
        return 'gallery';
      case ATTACHMENT:
        console.warn('TODO');
        return 'attachment';
      case HEADING:
        return <Heading {...props}>{text}</Heading>;
      case LIST:
        return <List {...props} items={text.split('\n')}/>
      default:
        console.warn(`Unknown type "${model.name}"`)
        return null;
    }
  });
};

processModularContent.propTypes = {
  content: PropTypes.array.isRequired,
};

export default processModularContent;