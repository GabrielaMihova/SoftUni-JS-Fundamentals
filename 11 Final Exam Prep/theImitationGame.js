function theImitationGame (input) {
    let text = input.shift();

    for (let line of input) {
        if (line === 'Decode') {
            break;
        }
        let tokens = line.split("|");
        let action = tokens[0];

        switch (action) {
            case 'Move':
                let n = Number(tokens[1]);
                for (let i = 0; i < n; i++) {
                    let firstL = text.substring(0, 1);
                    let anotherL = text.substring(1);
                    text = anotherL + firstL;
                }
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];
                text = text.substring(0, index) + value + text.substring(index);
                break;
            case 'ChangeAll':
                let oldL = tokens[1];
                let newL = tokens[2];
                while (text.includes(oldL)) {
                    text = text.replace(oldL, newL);
                }
                break;
        }
    }
    console.log(`The decrypted message is: ${text}`);
}
theImitationGame ([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ]);