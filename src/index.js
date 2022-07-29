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
        //Функция которая делит массив на подмассивы по количеству символов
        const letter =(expr, max=10, arr=[])=>{
            arr.push(expr.substring(max*(arr.length), max*(arr.length+1)));
            return (arr.length < expr.length / max | 0) ? letter(expr, max, arr) : arr;
        };
        let myArr = letter(expr,10);
        let newArr = [];
        myArr.forEach(sym => {
            if (sym == '**********') sym = ' ';
            let mySymbols = letter(sym,2); 
            //console.log(mySymbols);
            mySymbols.forEach(e => {
                if(e == '11') e = '-'
                else if( e == '10') e = '.';
                newArr.push(e)
            });
        });
        let res = [];
        for( let i = 0; i < myArr.length ; i++){ 
            let myArr2 = myArr[i];
            let myArr3 = [];
            myArr2 = letter(myArr2,2)
            for(let i = 0; i < myArr2.length; i++){
                if(myArr2[i] != '00') myArr3.push(myArr2[i])
            }
            for(let i = 0; i < myArr3.length; i++){
                if (myArr3[i] == '10') myArr3[i] = '.';
                else if(myArr3[i] == '11') myArr3[i] = '-';
            }
            let str = []
            str = myArr3.join('');
            if(str === '.-') str = 'a' , res.push(str);
            else if(str === '-...') str = 'b' , res.push(str);
            else if(str === '-.-.') str = 'c' , res.push(str);
            else if(str === '-..') str = 'd' , res.push(str);
            else if(str === '.') str = 'e' , res.push(str);
            else if(str === '..-.') str = 'f' , res.push(str);
            else if(str === '--.') str = 'g' , res.push(str);
            else if(str === '....') str = 'h' , res.push(str);
            else if(str === '..') str = 'i' , res.push(str);
            else if(str === '.---') str = 'j' , res.push(str);
            else if(str === '-.-') str = 'k' , res.push(str);
            else if(str === '.-..') str = 'l' , res.push(str);
            else if(str === '--') str = 'm' , res.push(str);
            else if(str === '-.') str = 'n' , res.push(str);
            else if(str === '---') str = 'o' , res.push(str);
            else if(str === '.--.') str = 'p' , res.push(str);
            else if(str === '--.-') str = 'q' , res.push(str);
            else if(str === '.-.') str = 'r' , res.push(str);
            else if(str === '...') str = 's' , res.push(str);
            else if(str === '-') str = 't' , res.push(str);
            else if(str === '..-') str = 'u' , res.push(str);
            else if(str === '...-') str = 'v' , res.push(str);
            else if(str === '.--') str = 'w' , res.push(str);
            else if(str === '-..-') str = 'x' , res.push(str);
            else if(str === '-.--') str = 'y' , res.push(str);
            else if(str === '--..') str = 'z' , res.push(str);
            else if(str === '.----') str = '1' , res.push(str);
            else if(str === '..---') str = '2' , res.push(str);
            else if(str === '...--') str = '3' , res.push(str);
            else if(str === '....-') str = '4' , res.push(str);
            else if(str === '.....') str = '5' , res.push(str);
            else if(str === '-....') str = '6' , res.push(str);
            else if(str === '--...') str = '7' , res.push(str);
            else if(str === '---..') str = '8' , res.push(str);
            else if(str === '----.') str = '9' , res.push(str);
            else if(str === '-----') str = '0' , res.push(str);
            else if(str === '**********') str =' ' ,res.push(str)
        }
        return res.join('');
}

module.exports = {
    decode
}