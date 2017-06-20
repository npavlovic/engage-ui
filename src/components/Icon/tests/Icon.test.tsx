import * as React from 'react';
import {shallow} from 'enzyme';
import { UnthemedIcon } from '../Icon';

describe('<Icon />', () => {
  describe('accessibilityLabel', () => {
    it('uses the label as the aria-label for the icon', () => {
      const element = shallow(<UnthemedIcon source="placeholder" accessibilityLabel="This is an icon" />);
      expect(element.prop('aria-label')).toBe('This is an icon');
    });
  });
});
