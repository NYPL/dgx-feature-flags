import alt from 'dgx-alt-center';

class FeatureFlagsActions {

  activateFlag(flag) {
    this.dispatch(flag);
  }

  deactivateFlag(flag) {
    this.dispatch(flag);
  }
}

export default alt.createActions(FeatureFlagsActions);
