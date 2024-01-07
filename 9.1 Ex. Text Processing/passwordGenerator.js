function passwordGenerator (arr) {
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCount = str1.match(/[aeiou]/g).length + str2.match(/[aeiou]/g).length;
    let password = '';
    let symbolIndex = 0;

    for (let i = 0; i < str1.length; i++) {
        const ch = str1[i];
        if (vowels.includes(ch)) {
            password += arr[2][symbolIndex].toUpperCase();
            symbolIndex = (symbolIndex + 1) % arr[2].length;
        } else {
            password += ch;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        const ch = str2[i];
        if (vowels.includes(ch)) {
            password += arr[2][symbolIndex].toUpperCase();
            symbolIndex = (symbolIndex + 1) % arr[2].length;
        } else {
            password += ch;
        }
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator ([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ]);