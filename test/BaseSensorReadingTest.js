"use strict";

describe("imergo-sensor-base::BaseSensorReading", () =>
{
    const assert = require("assert");
    const model = require("..");
    it("should init day, month and year based on timestamp", () =>
    {
        const date = new Date();
        date.setDate(date.getDate() - 300);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const sensorReading = new model.BaseSensorReading({
            timestamp: date.getTime()
        });
        assert.strictEqual(sensorReading instanceof model.BaseSensorReading, true);
        assert.strictEqual(sensorReading.timestamp, date.getTime());
        assert.strictEqual(sensorReading.day, day);
        assert.strictEqual(sensorReading.month, month);
        assert.strictEqual(sensorReading.year, year);
    });
});