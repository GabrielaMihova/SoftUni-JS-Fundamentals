/*
1. Special Symbols
\ - escape
. - any symbol without \n
^ - start of a string
$ - end of a string
| - or

2.Character Classes
Character classes in regular expressions are used to match any one 
character from a set of characters. Here are some common character classes:

[abc]: match any one character from the set a, b, or c
[^abc]: match any one character not in the set a, b, or c
[a-z]: match any one lowercase letter from a to z
[A-Z]: match any one uppercase letter from A to Z
[0-9]: match any one digit from 0 to 9
\w: match any one word character (letters, digits, or underscores)
\W: match any one non-word character (anything except letters, digits, or underscores)
\d: match any one digit (equivalent to [0-9])
\D: match any one non-digit (equivalent to [^0-9])
.: match any one character except a newline.

const regex = /[abc]/;
const str = 'this is a string with a match';

if (regex.test(str)) {
  console.log('The pattern was found!');
} else {
  console.log('The pattern was not found.');
}

3. Quantifier 
Quantifiers in regular expressions are used to match a certain number of 
characters. Here are some common quantifiers:

*: match zero or more of the preceding character
+: match one or more of the preceding character
?: match zero or one of the preceding character
{n}: match exactly n of the preceding character
{n,}: match at least n of the preceding character
{n,m}: match between n and m of


4. Capturing group
() - normal
(?:) - non capturing
(?<name>) - named
\1 - backreference by group number
\k<name> - backreference by group name

5. Operatori
.match
.split
.replace
.test - returns true or false
.exec

6. Flags
Regular expressions in JavaScript can also include flags to modify 
their behavior. Here are some common flags:

i: case-insensitive matching
g: global matching (find all matches, not just the first)
m: multiline matching (treat the string as multiple lines)

const regex = /pattern/gi;
*/



