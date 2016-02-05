import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

export default {
	activateFeature(feature) {
		return FeatureFlagsActions.activateFeature(feature);
	},
	deactivateFeature(feature) {
		return FeatureFlagsActions.deactivateFeature(feature);
	},
};
