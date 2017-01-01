"use strict";

describe("imergo-sensor-base::BaseSensor", () =>
{
    const assert = require("assert");
    const model = require("..");
    it("should init a sensor", () =>
    {
        const sensor = new model.BaseSensor();
        assert.strictEqual(sensor instanceof model.BaseSensor, true);
    });
});