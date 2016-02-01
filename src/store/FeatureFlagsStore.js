import alt from 'dgx-alt-center';
import ImmutableStore from 'alt/utils/ImmutableUtil';
import Immutable from 'immutable';

import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

class FeatureFlagsStore {
  constructor() {
    const { activateExperiment, deactivateExperiment } = FeatureFlagsActions;

    this.bindListeners({
      setExperiment: activateExperiment,
      removeExperiment: deactivateExperiment,
    });

    this.exportPublicMethods({
      _isExperimentActive: this._isExperimentActive,
      _getImmuteState: this._getImmuteState,
    });

    this.state = Immutable.Map();
  }

  /*
  * PUBLIC METHODS
  */
  _isExperimentActive(experiment) {
    return !!this.state.get(experiment);
  }

  _getImmuteState() {
    return Immutable.fromJS(this.getState());
  }

  /*
  * PRIVATE METHODS
  */
  setExperiment(experiment) {
    this.setState(
      this.state.set(experiment, true)
    );
  }

  removeExperiment(experiment) {
    this.setState(
      this.state.delete(experiment)
    );
  }
}

export default alt.createStore(ImmutableStore(FeatureFlagsStore));
