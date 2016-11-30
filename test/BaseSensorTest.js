"use strict";
const assert = require("assert");
const model = require("..");
describe("imergo-sensor-base", () =>
{
    describe("#BaseSensor", () =>
    {
        it("should init a sensor", () =>
        {
            let sensor = new model.BaseSensor();
            assert.equal(sensor instanceof model.BaseSensor, true);
        });
    });
});
