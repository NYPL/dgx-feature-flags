import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

export default {
	activateFlag(flag) {
		return FeatureFlagsActions.activateFlag(flag);
	},
	deactivateFlag(flag) {
		return FeatureFlagsActions.deactivateFlag(flag);
	}
}
