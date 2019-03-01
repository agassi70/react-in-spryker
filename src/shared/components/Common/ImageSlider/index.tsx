import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import { styles } from './styles';

export interface IImageSlide {
  id: string | number;
  src: string;
}

interface ImageSliderProps extends WithStyles<typeof styles> {
  images: Array<IImageSlide>;
  uniqueKey?: string | number;
  showThumbs?: boolean;
  showStatus?: boolean;
}

export const ImageSliderBase: React.SFC<ImageSliderProps> = (props): JSX.Element => {
  const {classes, images, uniqueKey, showStatus, showThumbs} = props;

  if (!images) {
    return null;
  }

  const isMultipleImages = Boolean(images.length > 1);
  // Carousel key - it is a workaround - https://github.com/leandrowd/react-responsive-carousel/issues/213
  return (
    <Carousel
      key={ uniqueKey ? uniqueKey : JSON.stringify(images) }
      showArrows={ isMultipleImages }
      className={ classes.slider }
      infiniteLoop={ true }
      showIndicators={ false }
      showThumbs={ !!isMultipleImages && showThumbs }
      showStatus={ isMultipleImages && showStatus }
    >
      { (images)
        ? images.map((image) => <div key={ image.id }><img src={ image.src }/></div>)
        : null
      }
    </Carousel>
  );
};


ImageSliderBase.defaultProps = {
  showThumbs: true,
  showStatus: true,
};

export const ImageSlider = withStyles(styles)(ImageSliderBase);

