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

	...store.getState(); //Returns Immutable State

	...store._isExperimentActive(string) //Returns a boolean for specified experiment

	// Using Actions
	FeatureFlags.actions //Allows you to dispatch specific events to activate/deactivate flags

	...actions.activateExperiment(string)

	...actions.deactivateExperiment(string)

	// Using Utils
	FeatureFlags.utils //Public utility methods to set or remove featured flags
```


## Credits

Rafael Hernandez
rafaelhernandez@nypl.org
