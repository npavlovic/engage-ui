import { IDocumentAppState } from '../Types';

import ChoiceListState from './componentState/ChoiceListState';
import PanelState from './componentState/PanelState';
import LabelState from './componentState/LabelState';
import LabelledState from './componentState/LabelledState';
import PositionedOverlayState  from './componentState/PositionedOverlayState';

const intialState : IDocumentAppState = {
  components: [
    ChoiceListState,
    PanelState,
    LabelState,
    LabelledState,
    PositionedOverlayState,
  ],
};

export default intialState;
