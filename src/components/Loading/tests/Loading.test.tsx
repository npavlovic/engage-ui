import * as React from 'react';
import { mount } from 'enzyme';
import Loading from '..';

const theme = {
  loader: 'loader',
  srOnly: 'srOnly',
};

describe('<Loading />', () => {
  describe('when default props are provided', () => {
    const subject = mount(<Loading theme={theme} />);
    expect(subject.find('i')).toHaveLength(1);
    expect(subject.find('span')).toHaveLength(1);
    expect(subject.find('i').hasClass('loader')).toBe(true);
    expect(subject.find('span').hasClass('srOnly')).toBe(true);
    expect(subject.find('span').text()).toBe('Loading...');
  });
});

