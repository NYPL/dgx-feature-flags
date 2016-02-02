import alt from 'dgx-alt-center';
import { immutable as ImmutableStore } from 'alt/utils/ImmutableUtil';
import Immutable from 'immutable';

import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

class FeatureFlagsStore {
  constructor() {
    const { activateFlag, deactivateFlag } = FeatureFlagsActions;

    this.bindListeners({
      setFlag: activateFlag,
      removeFlag: deactivateFlag,
    });

    this.exportPublicMethods({
      _isFlagActive: this._isFlagActive,
      _getImmutableState: this._getImmutableState,
    });

    this.state = Immutable.Map();
  }

  /*
  * PUBLIC METHODS
  */
  _isFlagActive(flag) {
    return !!this.state.get(flag);
  }

  _getImmutableState() {
    return Immutable.fromJS(this.getState());
  }

  /*
  * PRIVATE METHODS
  */
  setFlag(flag) {
    this.setState(
      this.state.set(flag, true)
    );
  }

  removeFlag(flag) {
    this.setState(
      this.state.delete(flag)
    );
  }
}

export default alt.createStore(ImmutableStore(FeatureFlagsStore));
