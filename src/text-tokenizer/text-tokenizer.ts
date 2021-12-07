import { iStemmer } from "../models/stemmer";
import { iTextTokenizer } from "../models/text-tokenizer";
import { STOP_WORDS_SET } from "../stop-words/stop-words-list";

/**
 * This implementation uses a stemmer + replaces non alphanumeric chars to tokenize words
 */
export class TextTokenizer implements iTextTokenizer {
    constructor(private stemmer: iStemmer) {}

    /**
     * Split a string into a list of word-like tokens which can be more easily processed by other services
     */
    tokenize(text: string): Set<string> {
        return new Set(text
            .replace(/(-|_|:)/g, " ")
            .replace(/[^0-9a-zA-Z\s]/g, "")
            .toLowerCase()
            .replace(/\s+/g, " ")
            .split(" ")
            .filter((word) => STOP_WORDS_SET.has(word))
            .map((word) => this.stemmer.stemWord(word))
        );
    }
}
