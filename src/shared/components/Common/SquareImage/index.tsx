import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

interface SquareImageProps extends WithStyles<typeof styles> {
  image: string;
  size: number;
  alt: string | undefined;
}

export const SquareImageBase: React.SFC<SquareImageProps> = (props) => {
  const { classes, size, image, alt = '' } = props;
  const sizePX = `${size}px`;
  const imgSize = size * 0.82;

  return (
    <div className={ classes.imgWrapper } style={{ width: sizePX, height: sizePX, minWidth: sizePX }}>
      <img
        src={ image }
        style={{ maxWidth: imgSize, maxHeight: imgSize }}
        alt={alt}
      />
      <div className={ classes.actionAreaOverlay } />
    </div>
  );
};

export const SquareImage = withStyles(styles)(SquareImageBase);
