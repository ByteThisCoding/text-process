import { iStemmer } from "../models/stemmer";
import { stemmer } from "./porter-stemmer";

/**
 * A "stem" is a "base version" of a word
 * This naive implementation will return some stems which are not technically words themselves but can still be manipulated by other services
 * --> argue => argu, for example
 *
 * This implementation uses an open source version of "porter-stemmer" which is included directly in this library
 */
export class Stemmer implements iStemmer {
    stemWord(word: string): string {
        return stemmer(word);
    }

    stemWords(words: string[]): string[] {
        return words.map((word) => this.stemWord(word));
    }
}
