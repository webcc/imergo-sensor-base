"use strict";

const SensorReading = require("imergo-generic-sensor-api").SensorReading;

module.exports = class BaseSensorReading extends SensorReading
{
    constructor(config)
    {
        super(config);
        if(config.values) {
            let map = new Map();
            for (let key of Object.keys(config.values)) {
                map.set(key, config.values[key]);
            }
            this._values = map;
        }
    }

    initDefaults()
    {
        super.initDefaults();
        this._values = new Map();
        this._type = this.constructor.name;
        this._sensorId = '';
        this._date = new Date(this.timestamp);
    }

    set timestamp(value)
    {
        super.timestamp = value;
        this._date = new Date(this.timestamp);
    }

    get timestamp()
    {
        return super.timestamp;
    }

    get day()
    {
        return this._date.getDate();
    }

    get month()
    {
        return this._date.getMonth() + 1;
    }

    get year()
    {
        return this._date.getFullYear();
    }

    get type()
    {
        return this._type;
    }

    set type(value)
    {
        this._type = value;
    }

    get values()
    {
        return this._values;
    }

    set values(value)
    {
        this._values = value;
    }

    get sensorId()
    {
        return this._sensorId;
    }

    set sensorId(value)
    {
        this._sensorId = value;
    }
};