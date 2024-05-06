/**
 * Parser for conf file
 * Autor: Yannick Mueller
 * Version: 0.0.1
 * Last Modified: 2:15 PM 02.05.2024
 */

const fs = require('fs');

// ENV Variables
const FILE_PATH = '../settings/settings.conf';




//reads content of file and returns it in utf8 format
function readFile(_PATH,) {
    try {
        const data = fs.readFileSync(_PATH, 'utf8');
        return contentExists(data);
    } catch (err) {
        console.error('error:' + err);
        return null;
    }
};

// check if file not empty
function contentExists(_DATA) {
    if (_DATA.length === 0) {
        console.error('settings file empty')
        console.info('using default');
        return null;
    };
    return interpretFile(_DATA)
};

// return data as Object
function interpretFile(_DATA) {
    const lines = _DATA.split(/\r\n|\n/);
    for (const i in lines) {
        console.log(typeof lines[i])
        if (!lines[i].trim()){
            delete lines[i]
        }
    }
    let currentBlock = "";
    const confVariables = {

    };
    for (const i in lines) {
        switch (lines[i].charAt(0)) {
            case '[':
                currentBlock = lines[i].substring(1, lines[i].length - 1);
                confVariables[currentBlock] ??= {}
                break;
            case '#':
                break;
            default:
                let keyValues = variableHandler(lines[i])
                confVariables[currentBlock][keyValues[0]] = keyValues[1]
        };
    };
    return confVariables
};

//Handel variabels for Object
function variableHandler(_ARRAY) {
    let keyValues = _ARRAY.split('=')
    for (const key in keyValues) {
        keyValues[key] = keyValues[key].trim().replaceAll("'", "").replaceAll('"', '')

        if (keyValues[key].toLowerCase() === 'true') {
            keyValues[key] = true
        } else if (keyValues[key].toLowerCase() === 'false') {
            keyValues[key] = false
            continue;
        } else if (!isNaN(Number(keyValues[key]))) {
            keyValues[key] = Number(keyValues[key])
        }
    }
    return keyValues;
}

function Main(FILE_PATH) {
    return readFile(FILE_PATH);
};

exports.Main = Main
