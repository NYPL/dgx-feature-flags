import alt from 'dgx-alt-center';
import immutable from 'alt-utils/lib/ImmutableUtil';
import Immutable from 'immutable';

import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

class FeatureFlagsStore {
  constructor() {
    const { activateFeature, deactivateFeature } = FeatureFlagsActions;

    this.bindListeners({
      setFeature: activateFeature,
      removeFeature: deactivateFeature,
    });

    this.exportPublicMethods({
      _isFeatureActive: this._isFeatureActive,
      _getImmutableState: this._getImmutableState,
    });

    this.state = Immutable.Map();
  }

  /*
  * PUBLIC METHODS
  */
  _isFeatureActive(feature) {
    return !!this.state.get(feature);
  }

  _getImmutableState() {
    return Immutable.fromJS(this.getState());
  }

  /*
  * PRIVATE METHODS
  */
  setFeature(feature) {
    this.setState(
      this.state.set(feature, true)
    );
  }

  removeFeature(feature) {
    this.setState(
      this.state.delete(feature)
    );
  }
}

export default alt.createStore(immutable(FeatureFlagsStore));
