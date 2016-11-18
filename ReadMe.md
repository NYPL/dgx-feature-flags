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

### Using Feature Flags on NYPL Node Applications

Feature flags help us moderate user studies for the coming new updates and keep the stable version of the header at the same time. By enabling specific feature flags, the user may interact with the new fucntions and interfaces, while by disabling it, the user goes back to use the exsisting released version.

The applications that want to use feature flags need to install the feature flag module first. And then depending on the way we want to toggle feature flags, some functions need to be added in the entry js file.

Below is a possible way to execute feature flags by the dev tool of the browser.

1. To install fature flags, have this line in the package.json and execute npm install.

```
#!javascript
"dgx-feature-flags": "git+https://git@bitbucket.org/NYPL/dgx-feature-flags.git#master"
```

2. In the entry js file of the application we like to have feature flags, import the feature flags module we just installed.

One possible way in ES6 style could be,

```
#!javascript
import FeatureFlags from 'dgx-feature-flags';
```

3. Expose feature flag to the browser. Have these lines of codes in the same entry js file.

```
#!javascript
if (!window.dgxFeatureFlags) {
  window.dgxFeatureFlags = FeatureFlags.utils;
}
```

4. Run the application. Open the dev tool of your browser. In console, type the line below and press enter to enable the feature flag.

```
#!javascript
dgxFeatureFlags.activateFeature([Your feature flag's name here. It should be a string.])
```
On the other hand, type

```
#!javascript
dgxFeatureFlags.deactivateFeature([Your feature flag's name here. It should be a string.])
```

to disable the feature flag.


## Credits

Rafael Hernandez
rafaelhernandez@nypl.org
