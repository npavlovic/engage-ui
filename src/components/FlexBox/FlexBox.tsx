import * as React from 'react';
import { themr, ThemedComponentClass } from 'react-css-themr';
import { classNames } from '@shopify/react-utilities';
import { FLEXBOX } from '../ThemeIdentifiers';
import * as baseTheme from './FlexBox.scss';

export type FlexAlign = 'Start' | 'Center' | 'End' | 'Stretch';
export type FlexJustify = 'Start' | 'Center' | 'End' | 'SpaceAround' | 'SpaceBetween';
export type FlexDirection = 'Row' | 'RowReverse' | 'Column' | 'ColumnReverse';

export interface Props {
  inline?: boolean;
  direction?: FlexDirection ;
  justify?: FlexJustify;
  align?: FlexAlign;
  style?: React.CSSProperties;
  theme?: any;
}

class FlexBox extends React.PureComponent<Props, {}> {
  render() {
    const {
            inline,
            direction ,
            justify,
            align,
         } = this.props;

    let className = inline ? this.props.theme.inline : this.props.theme.flex;
        // set direction property css
    switch (direction) {
      case 'Column':
        className = classNames(this.props.theme.column, className);
        break;
      case 'RowReverse':
        className = classNames(this.props.theme.rowReverse, className);
        break;
      case 'ColumnReverse':
        className = classNames(this.props.theme.columnReverse, className);
        break;
      case 'Row':
      default:
        className = classNames(this.props.theme.row, className);
        break;
    }
        // set justify property css
    switch (justify) {
      case 'End':
        className = classNames(this.props.theme.contentEnd, className);
        break;
      case 'Center':
        className = classNames(this.props.theme.contentCenter, className);
        break;
      case 'SpaceAround':
        className = classNames(this.props.theme.contentAround, className);
        break;
      case 'SpaceBetween':
        className = classNames(this.props.theme.contentBetween, className);
        break;
      case 'Start':
      default:
        className = classNames(this.props.theme.contentStart, className);
        break;
    }
        // set align property css
    switch (align) {
      case 'Start':
        className = classNames(this.props.theme.alignStart, className);
        break;
      case 'End':
        className = classNames(this.props.theme.alignEnd, className);
        break;
      case 'Center':
        className = classNames(this.props.theme.alignCenter, className);
        break;
      case 'Stretch':
      default:
        className = classNames(this.props.theme.alignStretch, className);
        break;
    }

    return (
            <div className={className} style={this.props.style}>
                {this.props.children}
            </div>
    );
  }
}

export default themr(FLEXBOX, baseTheme)(FlexBox) as ThemedComponentClass<Props, {}>;
