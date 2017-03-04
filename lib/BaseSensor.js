"use strict";

const Sensor = require("imergo-generic-sensor-api").Sensor;

module.exports = class BaseSensor extends Sensor
{
    constructor(config)
    {
        super(config);
    }

    initDefaults()
    {
        super.initDefaults();
        this._name = "Base Sensor";
        this._type = this.constructor.name;
        this._moduleName = 'imergo-sensor-base';
        this._sensorOptions = {};
    }

    get name()
    {
        return this._name;
    }

    set name(value)
    {
        this._name = value;
    }

    get type()
    {
        return this._type;
    }

    set type(value)
    {
        this._type = value;
    }

    get moduleName()
    {
        return this._moduleName;
    }

    set moduleName(value)
    {
        this._moduleName = value;
    }

    get sensorOptions()
    {
        return this._sensorOptions;
    }

    set sensorOptions(value)
    {
        this._sensorOptions = value;
    }

    updateReading(values)
    {
        let reading = this.createReading(values);
        reading.sensorId = this.id;
        this.reading = reading;
    }

    start()
    {
        return super.start().then(() => { this.handleStarted(); });
    }

    stop()
    {
        super.stop().then(() => { this.handleStopped(); });
    }

    /**
     * @abstract
     * @return {null}
     */
    createReading(values)
    {
        return null;
    }

    /**
     * @abstract
     */
    handleStarted() { }

    /**
     * @abstract
     */
    handleStopped() { }
};