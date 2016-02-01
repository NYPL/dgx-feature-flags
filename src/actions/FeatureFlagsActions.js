import alt from 'dgx-alt-center';

class FeatureFlagsActions {

  activateExperiment(experimentName) {
    this.dispatch(experimentName);
  }

  deactivateExperiment(experimentName) {
    this.dispatch(experimentName);
  }
}

export default alt.createActions(FeatureFlagsActions);
