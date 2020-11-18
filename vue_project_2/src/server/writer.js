const fs = require('fs')
const { writer } = require('repl')
const logger = require('./logger')

function wrtFile (file, text, res, log) {
    fs.writeFile(file, text, (err) => {
        if(err) {
            res.sendStatus(500, '{"result": 0}')
        } else {
            res.send('{"result": 1}')
            logger(log.name, log.action)
        }
    })
}

module.exports = wrtFile