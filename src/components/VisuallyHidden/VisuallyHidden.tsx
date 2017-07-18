import * as React from 'react';
<<<<<<< HEAD
import { themr } from 'react-css-themr';
=======
import { themr, ThemedComponentClass } from 'react-css-themr';
>>>>>>> emgage/master
import { VISUALLY_HIDDEN } from '../ThemeIdentifiers';
import * as baseTheme from './VisuallyHidden.scss';

export interface Props {
  children?: React.ReactNode,
  theme?: any,
}

const VisuallyHidden = ({children, theme}: Props) => {
  return (
    <span className={theme.VisuallyHidden}>{children}</span>
  );
}

<<<<<<< HEAD
export default themr(VISUALLY_HIDDEN, baseTheme)(VisuallyHidden);
=======
export default themr(VISUALLY_HIDDEN, baseTheme)(VisuallyHidden) as ThemedComponentClass<Props, {}>;
>>>>>>> emgage/master
