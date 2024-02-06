## Практика використання LLM



### Використовуйте ідентифікатори для розподілу промпту на окремі частини:

```
Summarize the text delimited by triple backticks \ 
into a single sentence.
'''
You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses.
'''
```


### Просити структуровану відповідь:

```
Generate a list of three made-up book titles along \ 
with their authors and genres. 
Provide them in JSON format with the following keys: 
book_id, title, author, genre.
```


### Визначення мови тексту:

```
Tell me what language this is, and then translate it to english and ukrainian:
'''
Mein Haus ist in der Gartenstraße. Wollen Sie es sehen? Dann zeige ich es Ihnen. Wir stehen jetzt vor dem Haus. Es hat zwei Stockwerke und liegt in einem Garten. Unten im Erdgeschoss wohne ich mit meiner Frau und meinen Kindern; über uns wohnt Familie Müller.
'''
```


### Визначення теми тексту:

```
Determine four topics that are being discussed in the \
following text, which is delimited by triple backticks.
Make each item one or two words long. 
Format your response as a list of items separated by commas.
Text sample:
'''
Spiele können helfen, körperliche Fähigkeiten zu entwickeln. Kinder im Vorschulalter, die interaktive Spiele wie die auf der Wii verfügbaren gespielt haben, haben nachweislich verbesserte motorische Fähigkeiten, zum Beispiel können sie einen Ball besser treten, fangen und werfen als Kinder, die keine Videospiele spielen. Eine Studie unter Chirurgen, die in Boston Mikrochirurgie durchführten, ergab, dass diejenigen, die Videospiele spielten, 27 Prozent schneller waren und 37 Prozent weniger Fehler machten als diejenigen, die dies nicht taten. Das Sehvermögen wird ebenfalls verbessert, insbesondere beim Erkennen des Unterschieds zwischen Graustufen. Dies ist nützlich, um nachts zu fahren, ein Flugzeug zu steuern oder Röntgenbilder zu lesen.
'''
```

with a word/sentence/character limit:

```
Summarize the text below, delimited by triple 
backticks, in at most 20 words. 
'''
Spiele können helfen, körperliche Fähigkeiten zu entwickeln. Kinder im Vorschulalter, die interaktive Spiele wie die auf der Wii verfügbaren gespielt haben, haben nachweislich verbesserte motorische Fähigkeiten, zum Beispiel können sie einen Ball besser treten, fangen und werfen als Kinder, die keine Videospiele spielen. Eine Studie unter Chirurgen, die in Boston Mikrochirurgie durchführten, ergab, dass diejenigen, die Videospiele spielten, 27 Prozent schneller waren und 37 Prozent weniger Fehler machten als diejenigen, die dies nicht taten. Das Sehvermögen wird ebenfalls verbessert, insbesondere beim Erkennen des Unterschieds zwischen Graustufen. Dies ist nützlich, um nachts zu fahren, ein Flugzeug zu steuern oder Röntgenbilder zu lesen.
'''
```


### Переклад стилю тексту

```
Translate the following from slang to a business letter: 
'Dude, This is Vishnu, check out this spec on this standing lamp.'
```


### Використання "Rephrase"

```
Rephrase this text to be more formal: 
'Dude, This is Vishnu, check out this spec on this standing lamp.'
```


### Перевірка тексту:

```
proofread and correct this review:
'''
Got this for my sister for her birthday cuz she keeps taking \
mine from my room.  Yes, adults also like pandas too.  She takes \
it everywhere with her, and it's super soft and cute.  One of the \
ears is a bit lower than the other, and I don't think that was \
designed to be asymmetrical. It's a bit small for what I paid for it \
though. I think there might be other options that are bigger for \
the same price.  It arrived a day earlier than expected, so I got \
to play with it myself before I gave it to my sister.
'''
```

### Перевірка коду

```
Need you to review the following Python code that I just wrote. The following code is required to calculate the factorial of a given number. After reading the code, please answer only in YES or NO, if you understand it. 
'''
def factorial(n):
    return 1 if (n==1 or n==0) else n * factorial(n - 1) 
'''
```


### Надати моделі "роль"

Ставтеся до LLM як до свого універсального помічника з написання, призначивши йому роль, яка відповідає вашому вмісту. Використовуйте підказки на зразок «You are a [role], and your task is to [action]». Залежно від ваших письменницьких потреб, ролі можуть включати юриста, літературного редактора, видавця, професора англійської мови або наукового комунікатора.

Наприклад: «You are a creative writing professor at Harvard. Critique my writing and provide feedback on how I can improve it.». Ви можете отримати спеціалізовану допомогу та цінну інформацію LLM, використовуючи ролі.


### Комбінування стратегій:

Для найефективнішого використання LLM варто комбінувати різноманітні перелічені вище стратегії.

