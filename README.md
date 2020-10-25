# github-linguist-json

##### Defines all Languages known to GitHub in JSON.

## JSON Structure

#### route `/`

It gives all the GitHub linguist details.

```JSON
"JavaScript":{"type":"programming","tm_scope":"source.js","ace_mode":"javascript","codemirror_mode":"javascript","codemirror_mime_type":"text/javascript","color":"#f1e05a","aliases":["js","node"],"extensions":[".js","._js",".bones",".cjs",".es",".es6",".frag",".gs",".jake",".jsb",".jscad",".jsfl",".jsm",".jss",".mjs",".njs",".pac",".sjs",".ssjs",".xsjs",".xsjslib"],"filenames":["Jakefile"],"interpreters":["chakra","d8","gjs","js","node","nodejs","qjs","rhino","v8","v8-shell"],"language_id":183}
```

#### route `/lang`

It gives GitHub the linguist color code for the particular language.

```JSON
{
    "1C Enterprise": "#814CCC",
    "ABAP": "#E8274B",
    "AGS Script": "#B9D9FF",
    "AL Code": "#3AA2B5",
    "AMPL": "#E6EFBB",
    "ANTLR": "#9DC3FF",
}

```

## Keys

| Key                  | Description                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fs_name              | It is an Optional field. Only necessary as a replacement for the sample directory name if the language name is not a valid filename under the Windows filesystem (e.g. if it contains an asterisk).                                                  |
| type                 |It can be either data, programming, markup, prose, or nil.                                                                                                                                                                                              |
| aliases              | An Array of additional aliases (implicitly includes name.downcase).                                                                                                                                                                          |
| ace_mode             | A String name of the Ace Mode is used for the highlighting whenever a file is edited. This must match one of the filenames in http://git.io/3XO_C.g. Use "text" if a mode does not exist.                                                           |
| codemirror_mode      | A String name of the CodeMirror Mode is used for the highlighting whenever a file is edited. This must match a mode from https://git.io/vi9Fx .                                                                                                       |
| codemirror_mime_type | A String name of the file mime type is used for the highlighting whenever a file is edited. This should match the `mime` associated with the mode from https://git.io/f4SoQ .                                                                      |
| wrap                 | Boolean wrap to is used to enable line wrapping (default: false).                                                                                                                                                                                       |
| extensions           | An Array of associated extensions (the first one is considered the primary extension, the others should be listed alphabetically).                                                                                                           |
| filenames            | An Array of filenames commonly associated with the language.                                                                                                                                                                                 |
| interpreters         | An Array of associated interpreters.                                                                                                                                                                                                       |
| searchable           | Boolean flag to enable searching (defaults to true).                                                                                                                                                                                     |
| language_id          | Integer used as a language-name-independent indexed field so that we can rename languages in Linguist without reindexing all the code on GitHub. Must not be changed for existing languages without the explicit permission of GitHub staff. |
| color                | CSS hex color used to represent the language. It used only if type is "programming" or "markup".                                                                                                                                                     |
| tm_scope             | The TextMate scope that represents this programming language. This should match one of the scopes listed in the grammars.yml file. Use "none" if there is no grammar for this language.                                                      |
| group                | It is Name of the parent language. Languages in a group are counted in the statistics as the parent language.                                                                                                                                      |
