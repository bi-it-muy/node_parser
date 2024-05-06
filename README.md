# node_parser
This is a small node toml parser for conf files that was created for learning purpose.
# Configuration File Parser

This JavaScript code parses a configuration file (`settings.conf`) and returns its contents as a JavaScript object. It reads the file, interprets its structure, and extracts key-value pairs for configuration settings.
This project was mainly writen to learn how to read a `.config` file.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system. If not, download and install it from [nodejs.org](https://nodejs.org/).

## Usage

1. **Installation**: You simply need nodes base `fs` module.

2. **Example Usage**: Incorporate the parser into your Node.js project as follows:

   ```javascript
   const confParser = require('./lib/conf_parser');

   console.log(confParser.Main('settings/settings.conf'));
   ```

   Replace `'settings/settings.conf'` with the path to your configuration file and inted of `console.log` pass it ot a `variable` 

## Supported Formats

The parser supports the following data types in the configuration file:

- **Integer**: Represented by whole numbers, e.g., `1`.
- **Float**: Represented by decimal numbers, e.g., `1.3`.
- **Boolean**: Represented by `true` or `false`.
- **String**: Represented by text enclosed in double quotes, e.g., `"Hello world"`.

### Configuration File Example

```conf
[current_formats]
Int = 1
Float = 1.3
Boolean = true
String = "Hello world"
```

The parser is designed to handle these formats and extract corresponding values appropriately.
