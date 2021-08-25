/**
 * Encapsulation to provide calculations between strings based on some metric
 */
export interface iStringDistanceCalculator {
    /**
     * Calculate the difference between two strings
     * The implementor will determine how to define the metric
     */
    calculateDistance(a: string, b: string): number;

    /**
     * Find a string in "a" and string in "b" which are closer to eachother than all others
     */
    findMinDistance(
        a: string[],
        b: string[]
    ): {
        aIndex: number;
        bIndex: number;
        distance: number;
    };
}
