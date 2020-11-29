const { expect, it } = require("@jest/globals");
const memize = require("../src/memize");

describe("memize", () => {

    it("memized fn should be callel one times with the same args", () => {
        const mock = jest.fn();
        const memizedFn = memize(mock);

        memizedFn(true);
        memizedFn(true);
        memizedFn(true);

        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toBeCalledWith(true);
    });

    it("test", () => {
        const mock = jest.fn();
        const memizedFn = memize(mock);

        memizedFn(true);
        memizedFn(true);
        memizedFn("test");
        memizedFn("test");

        expect(mock).toHaveBeenCalledTimes(2);
        expect(mock).toBeCalledWith(true);
        expect(mock).toBeCalledWith("test");
    });

});