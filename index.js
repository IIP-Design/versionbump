#!/usr/bin/env node


/**
  * Usage: versionbump 'version.json' 'package.json'
  *
  */


var fs = require('fs');
var jsonfile = require('jsonfile');
var args = require('process').argv;


function bump(file, packageJson) {
  var packageVersion;

  fs.access(file, fs.F_OK, function(err) {
    if (err) {
      console.error(err);
    }
  });

  jsonfile.readFile(packageJson, function(err, obj) {
    if (err) {
      console.error(err);
    }

    packageVersion = { version: "'" + obj.version + "'" };

    jsonfile.writeFile(file, packageVersion, { spaces: 2 }, function(err) {
      if (err) {
        console.error(err);
      }
    });
  });
}


function main() {
  var file = args[2];
  var packageJson = args[3];

  bump(file, packageJson);
}


main();
