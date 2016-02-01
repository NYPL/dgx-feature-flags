import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

export default {
	activateExperiment(experiment) {
		return FeatureFlagsActions.activateExperiment(experiment);
	},
	deactivateExperiment(experiment) {
		return FeatureFlagsActions.deactivateExperiment(experiment);
	}
}
