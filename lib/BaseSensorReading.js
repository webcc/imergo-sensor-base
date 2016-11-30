"use strict";
const SensorReading = require("imergo-generic-sensor-api").SensorReading;

module.exports = class BaseSensorReading extends SensorReading {
    constructor(config)
    {
        super(config);
    }

    initDefaults()
    {
        super.initDefaults();
        this._values = new Map();
        this._type = this.constructor.name;
        this._sensorId = '';
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
