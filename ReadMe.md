# NYPL Feature Flags Module

An ES6 Javascript library that uses Alt.js to independently store
feature flags for A/B testing.

## Installation

Add to your package.json

```
#!javascript
	"dgx-feature-flags": "git+ssh://bitbucket.org/NYPL/dgx-feature-flags.git#master"
```


## Usage

```
#!javascript
	// ES6:
	import FeatureFlags from 'dgx-feature-flags';

	// Using the Store:
	FeatureFlags.store //Allows the following methods

	...store.getState(); OR ...store._getImmutableState(); //Returns Immutable State

	...store._isFeatureActive(string) //Returns a boolean for specified feature flag

	// Using Actions
	FeatureFlags.actions //Allows you to dispatch specific events to activate/deactivate features

	...actions.activateFeature(string);

	...actions.deactivateFeature(string);

	// Using Utils
	FeatureFlags.utils //Public utility methods to set or remove featured flags

	...utils.activateFeature(string);

	...utils.deactivateFeature(string);
```


## Credits

Rafael Hernandez
rafaelhernandez@nypl.org
