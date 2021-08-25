import { iStringDistanceCalculator } from "../models/string-distance-calculator";

export class LevenshteinStringDistanceCalculator
    implements iStringDistanceCalculator
{
    /**
     * Calculate the string distance using the Levenshtein algorithm
     * This matrix approach will store previous evaluations for performance improvement
     * :: mimics the recursive nature of evaluating distances between substrings
     */
    calculateDistance(a: string, b: string): number {
        //handle base cases
        if (a.length === 0) {
            return b.length;
        }
        if (b.length === 0) {
            return a.length;
        }

        //initialize an array where we can store distances betwen substrings
        const distances: number[][] = new Array(a.length+1).fill(0).map((_, aInd) => {
            //initialize with zeros
            let ar = new Array(b.length+1).fill(0);
            if (aInd === 0) {
                ar = ar.map((_, bInd) => bInd);
            } else {
                ar[0] = aInd;
            }
            return ar;
        });

        //iterate over all characters in a
        for (let aIt=1; aIt<=a.length; aIt++) {
            //iterate over all characters in b
            for (let bIt=1; bIt<=b.length; bIt++) {
                //add 1 to the cost if charaters are different, 0 if they are the same (no substitution cost)
                const diagonalCost = a[aIt-1] === b[bIt-1] ? 0 : 1;

                distances[aIt][bIt] = Math.min(
                    //condition if removing char from a
                    1 + distances[aIt-1][bIt], 
                    //condition if removing char from b
                    1 + distances[aIt][bIt - 1],
                    //condition if substituting char
                    diagonalCost + distances[aIt-1][bIt - 1]
                )
                
            }
        }

        //last entry is the result
        return distances[a.length][b.length];
    }

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
    } {
        //reduce the a array to an object which contains the aind, bind, and distance
        //complexity is O(n^2)
        return a.reduce(
            (res, aStr, aIndex) => {
                //find the partial min of comparing this aStr to all bStr
                const partialMin = b.reduce(
                    (res, bStr, bIndex) => {
                        //calculate the distances between the two strings
                        const distance = this.calculateDistance(aStr, bStr);
                        //if distances is smaller, update the collection object
                        if (distance < res.distance) {
                            res.index = bIndex;
                            res.distance = distance;
                        }
                        return res;
                    },
                    {
                        index: -1,
                        distance: Infinity,
                    }
                );

                //compare the result from this aStr to the total
                if (partialMin.distance < res.distance) {
                    res.aIndex = aIndex;
                    res.bIndex = partialMin.index;
                    res.distance = partialMin.distance;
                }

                return res;
            },
            //default case, no indices and Infinite distance
            {
                aIndex: -1,
                bIndex: -1,
                distance: Infinity,
            }
        );
    }
}
