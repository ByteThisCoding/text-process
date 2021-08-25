export interface iTextTokenizer {
    /**
     * Split a string into a list of word-like tokens which can be more easily processed by other services
     */
    tokenize(text: string): string[];
}
