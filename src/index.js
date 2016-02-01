import FeatureFlagsActions from './actions/FeatureFlagsActions.js';
import FeatureFlagsStore from './store/FeatureFlagsStore.js';
import FeatureFlagsUtils from './utils/FeatureFlagsUtils.js';

export default {
	store: FeatureFlagsStore,
	actions: FeatureFlagsActions,
	utils: FeatureFlagsUtils,
};
