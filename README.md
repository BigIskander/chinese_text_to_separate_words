# chinese_text_to_separate_words

<a href="#ENG">In English</a>

Скрип для получения списка отдельных слов из текста на китайском.

Это скрипт написан только в образовательных целях.

<b>Как исползовать:</b>

Создать папки <code>./subtitles</code> и <code>./output</code> в папке со скриптом.

Поместить текстовые файлы (.txt) с текстом на китайском в папку <code>./subtitles</code> и выполнить комманду <code>node index.js</code>.

Вы получите список отдельных слов из текста в папке <code>./output</code>.

Слова в списке слов не повторяются.

Вы можете исключить некоторые слова добавив их в файл no_words.txt (каждое слово в отдельной строке).

<b>Требования:</b>

Должен быть установлен Node js 18 [https://nodejs.org/] или более новой версии.

Для того чтобы установить зависимости, выполните комманду <code>node install</code>

<b>Скрипт использует:</b> </br>
chinese-tokenizer [https://www.npmjs.com/package/chinese-tokenizer] и  </br>
cc-cedict китайско-английский словарь [https://cc-cedict.org/editor/editor.php].

<hr id="ENG"/>

A script to get list of separate words from chinese text.

This script is made only in educational purposes.

<b>How to use:</b>

Create ./subtitles and ./output folders in the folder with this script.

Put text files (.txt) with chinese text in <code>./subtitles</code> folder and execute <code>node index.js</code>.

You will get separate list of words from text in <code>./output</code> folder. 

Words in the list of words is not repeating.

You can exclude some words by adding them the to file no_words.txt (each word in separate line).

<b>Requirements:</b>

Node js 18 [https://nodejs.org/] or newer should be installed

To install dependencies execute <code>node install</code>

<b>This script uses:</b> </br>
chinese-tokenizer [https://www.npmjs.com/package/chinese-tokenizer] and  </br>
cc-cedict chinese-english dictionary [https://cc-cedict.org/editor/editor.php].
