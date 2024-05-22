# READ ME For Internationalization Usage

## Rules to Keep in mind
    1. Remember to add keys in a alphabetical order and wrt to a context based key, whether it be a component key or a global key.
    3. While adding a language file, ensure type safety with the help of example of french language below.
    2. After adding a language file, make sure to configure regex for allowed languages for browser language capture.

## For Adding a Language use the following format for a ts file as shown in the Example of french language :

<!-- Contents of file "fr.ts" start -->
```

const fr : typeof import('./en').default= {
	"APP":  {
		"LANGUAGE_SELECT": "S'il vous plaît sélectionner une langue"
	},
	"MANAGE_TRACKER": {
		"TRACKER_HEADING": "Traqueur"
	}
}
export default fr
```
<!-- Contents of file "fr.ts" end -->

## Use Tools for Managing Internationalization Files
	-Babel Edit
		-Link for a [hack for full version](https://gist.github.com/Fusseldieb/a4ca4c2f2c736b55fe4879c61cab4de0)