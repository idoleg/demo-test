const isAdult = require("../src/isAdult");

describe("isAdult", () => {
    it("returns false if age less than 18", () => {
        expect(isAdult(2)).toBeFalsy();
    });

    it("returns true if age eq 18", () => {
        expect(isAdult(18)).toBeTruthy();
    });

    it("returns true if age gr than 18", () => {
        expect(isAdult(30)).toBeTruthy();
    });
});
