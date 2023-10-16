# chinese_text_to_separate_words
A script to get list of separate words from chinese text.

This script is made only in educational purposes.

How to use:

Put text files (.txt) with chinese text in <code>./subtitles</code> folder and execute <code>node index.js</code>.

You will get separate list of words from text in <code>./output</code> folder. 

Words in the list of words is not repeating.

You can exclude some words by adding them the to file no_words.txt (each word in new line).

Requirements:

Node js 18 [https://nodejs.org/] or newer should be installed

To install dependencies execute <code>node install</code>

This script depends on chinese-tokenizer [https://www.npmjs.com/package/chinese-tokenizer] and cc-ccedict chinese-english dictionary [https://cc-cedict.org/editor/editor.php].
