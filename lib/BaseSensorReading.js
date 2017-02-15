"use strict";

const SensorReading = require("imergo-generic-sensor-api").SensorReading;

module.exports = class BaseSensorReading extends SensorReading
{
    constructor(config)
    {
        super(config);
    }

    initDefaults()
    {
        super.initDefaults();
        const date = new Date();
        this._day = date.getDay();
        this._month = date.getMonth();
        this._year = date.getFullYear();
        this._values = new Map();
        this._type = this.constructor.name;
        this._sensorId = '';
    }

    get day()
    {
        return this._day;
    }

    set day(value)
    {
        this._day = value;
    }

    get month()
    {
        return this._month;
    }

    set month(value)
    {
        this._month = value;
    }

    get year()
    {
        return this._year;
    }

    set year(value)
    {
        this._year = value;
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