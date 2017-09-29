import * as React from 'react';
import { themr, ThemedComponentClass } from 'react-css-themr';
import Popover from '../Popover/Popover';
import { CLICKABLECHIP } from '../ThemeIdentifiers';
import * as baseTheme from './ClickableChip.scss';

export interface State {
  active: boolean;
}
export interface Props {
  ariaLabel?: string;
  chip: React.ReactElement<any>;
  style?: React.CSSProperties;
  theme?: any;
  onClick?(): void;
  onKeyPress?(): void;
}

class ClickableChip extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false,
    };
  }

  onClose = () => { };

  render() {
    const {
            chip,
            onClick = this.handleClick,
            onKeyPress = this.onKeyPress,
            ariaLabel = this.props.ariaLabel,
        } = this.props;
    const updatedChip = React.cloneElement(chip, { onClick, onKeyPress, ariaLabel, clickable: true });
    return (
            <Popover active={this.state.active} activator={updatedChip} onClose={this.onClose} onKeyPress={this.onKeyPress}>
                {this.props.children}
            </Popover>
    );
  }
  private onKeyPress = (e:any) => {
    if (e.key === 'Enter' || e.key === 'Space') (this.setState({ ['active']: !this.state.active }));
  }
  private handleClick = () => {
    this.setState({ ['active']: !this.state.active });
  }
}

export default themr(CLICKABLECHIP, baseTheme)(ClickableChip) as ThemedComponentClass<Props, State>;
