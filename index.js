#!/usr/bin/env node
const unzip_crx = require('unzip-crx')

if (!process.argv[2]) {
    console.warn('Please type the crx filename')
    console.log('e.g: ucrx filename.crx')
    return
}
unzip_crx(process.argv[2]).then(function(){
    console.log('Successfully unzipped your crx file.')
})
