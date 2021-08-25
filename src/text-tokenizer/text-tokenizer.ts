import { iStemmer } from "../models/stemmer";
import { iTextTokenizer } from "../models/text-tokenizer";
import { STOP_WORDS } from "../stop-words/stop-words-list";

/**
 * This implementation uses a stemmer + replaces non alphanumeric chars to tokenize words
 */
export class TextTokenizer implements iTextTokenizer {
    constructor(private stemmer: iStemmer) {}

    /**
     * Split a string into a list of word-like tokens which can be more easily processed by other services
     */
    tokenize(text: string): string[] {
        return text
            .replace(/(-|_|:)/g, " ")
            .replace(/[^0-9a-zA-Z\s]/g, "")
            .toLowerCase()
            .replace(/\s+/g, " ")
            .split(" ")
            .filter((word) => STOP_WORDS.indexOf(word) === -1)
            .map((word) => this.stemmer.stemWord(word));
    }
}
