import { IDocumentAppState } from '../Types';

import ChoiceListState from './componentState/ChoiceListState';
import PanelState from './componentState/PanelState';
import AccessibilityState from './componentState/AccessibilityState';

const intialState : IDocumentAppState = {
  components: [
    ChoiceListState,
    PanelState,
    AccessibilityState,
  ],
};

export default intialState;
