/**
 * A "stem" is a "base version" of a word
 * This naive implementation will return some stems which are not technically words themselves but can still be manipulated by other services
 * --> argue => argu, for example
 */
export interface iStemmer {
    /**
     * Get the step of a single word
     */
    stemWord(word: string): string;

    /**
     * Get the stems of multiple words
     */
    stemWords(words: string[]): string[];
}
