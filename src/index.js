const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    let letters = '';
    let string = '';
    for (let i=0; i<arr.length; i++) {
        if (i%10==0 && i!=0) {
            letters += ' '
        }
        letters += arr[i];
    }
    letters = letters.split(' ');

    letters.forEach((item) => {
        let subLetters = '';

        if (item === '**********') {
            item = ' ';
        }

        for (let i=0; i<item.length; i++) {
            if (item[i] === ' ') {
                subLetters += ' '
                console.log(item.length, 'item')
            }
            if (i%2==0 && i!=0) {
                subLetters += ' '
            }
            subLetters += item[i];
        }
        subLetters = subLetters.split(' ')

        let word = subLetters.map(item => {
            switch(item) {
                case '00': 
                    return item = ''
                case '10':
                    return item = '.'
                case '11':
                    return item = '-'
                case ' ':
                    return ' '
            }
        })
        item = word.join('')
        
        if (item in MORSE_TABLE) {
            string += MORSE_TABLE[item]
        } else {
            string += ' '
        }
    })
    return string
}

module.exports = {
    decode
}