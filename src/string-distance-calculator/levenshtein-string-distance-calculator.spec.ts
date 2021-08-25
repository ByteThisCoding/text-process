import { LevenshteinStringDistanceCalculator } from "./levenshtein-string-distance-calculator";

describe("LevenshteinStringDistanceCalculator", () => {

    const service = new LevenshteinStringDistanceCalculator();

    it("should properly calculate string distances", () => {
        const subject = "bytethis";
        //some specific cases tested + random words selected for good measure
        const tests = [{
            str: "bitethis",
            distance: 1
        }, {
            str: "apple",
            distance: 8
        }, {
            str: "website",
            distance: 7
        }, {
            str: "bitethys",
            distance: 2
        }, {
            str: "",
            distance: 8
        }, {
            str: "bytethisbytethis",
            distance: 8
        }, {
            str: "bytethis",
            distance: 0
        }, {
            str: "ayselhss",
            distance: 4
        }];

        tests.forEach(test => {
            const actual = service.calculateDistance(subject, test.str);
            expect(actual).toBe(test.distance);
        })
    });

});