import alt from 'dgx-alt-center';

class FeatureFlagsActions {

  activateFeature(feature) {
    this.dispatch(feature);
  }

  deactivateFeature(feature) {
    this.dispatch(feature);
  }
}

export default alt.createActions(FeatureFlagsActions);
