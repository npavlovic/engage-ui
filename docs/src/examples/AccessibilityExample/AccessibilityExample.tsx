import * as React from 'react';
import * as styles from '../../styles/components-page.scss';

export interface IProps{
}

export interface IState {
}

class AvatarExample extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.example}>
        <h3>Accessibility!</h3>
      </div>
    );
  }
}

export default AvatarExample;
