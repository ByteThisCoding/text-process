# text-process
A library which provides functionality for reducing and processing words and phrases:
* **Stemmer:** reduce words to a common base word, such as "running" => "run"
* **Tokenizer:** reduce sentences to a list of stemmed words
* **String Distance:** determine the edit distance between strings

For more info on how to use + the concepts behind the implementation, please visit: https://bytethisstore.com/articles/pg/search-text-process

## Stemming
Stemming is a process which converts a word into a common base form which may or may not be a word itself. For example:
* running => run
* error => error
* worrying => worri (not a real word)
* exemplifying => exemplifi (not a real word)
* contained => contain

Stemming can be used as a means of normalizing words to a conceptual "base form" which an algorithm can then leverage to perform some operation, such as:
* **Comparing:** checking if two strings or documents contain the same words, even if there are different suffixes, such as "ing"
* **Searching:** reducing words in a search query to base forms so different forms of words can return the same results
* **Quantifying:** collecting logs or metrics about how often some particular word is included in a text, including variations on that word.

There is a similar process called *Lemmatization* which takes this a step further by considering the context in which a particular word is in, such as noun vs verb, and is able to convert the word to its correct base word which is called the *Lemma*. While more accurate, it is also more expensive to perform this operation.

## Stop Words
Stop words are words which are highly common, such as "the", "and", "I". In certain cases these words can be filtered out of strings when performing processing, analysis, or other operations in which these words are superfluous.

## Tokens and Tokenizing
The tokenizer in this library uses the Stemmer to convert a string to a list of *tokens* which are stemmed words with only alphanumeric characters. It filters out certain stop-words. A few examples:
* "The quick brown fox jumps over the lazy dog" => ["quick", "brown" , "fox", "jump", "lazi", "dog"]
* "An apple a day keeps the doctor away" => ["appl", "dai", "keep", "doctor", "awai"]
* "While I was running I ran into the wall" => ["run", "ran", "wall"]