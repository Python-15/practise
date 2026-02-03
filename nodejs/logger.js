const EventEmitter = require('events');



class Logger extends EventEmitter{
    logger(){
        //Send an HTTP requestion

        //raise an event based on response

        this.emit('loggerevent', {id:1, message:'hello'})
    }
}

module.exports =Logger
