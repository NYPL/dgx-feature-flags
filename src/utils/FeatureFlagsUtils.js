import FeatureFlagsActions from '../actions/FeatureFlagsActions.js';

class FeatureFlagsUtils {
	activateExperiment(experiment) {
		return FeatureFlagsActions.activateExperiment(experiment);
	}

	deactivateExperiment(experiment) {
		return FeatureFlagsActions.deactivateExperiment(experiment);
	}
}

export default FeatureFlagsUtils;
