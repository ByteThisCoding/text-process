export interface iTextTokenizer {
    /**
     * Split a string into a list of word-like tokens which can be more easily processed by other services
     */
    tokenize(text: string): Set<string>;

    /**
     * Tokenize many texts at once into a single set
     */
    tokenizeMany(texts: string[]): Set<string>;
}
