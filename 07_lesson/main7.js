const alphabet = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-·-·--":"!",
    "·-·-·-":".",
    "--··--":","
};

let example1  = '..... -.-- .--- ..- - ...';
let example2 = '.... . -.--   .--- ..- -.. .';

function decodeMorse(str) {
    const words = str.split("   ");
    const translation = [];

    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split(" ");
        const word = [];

        for (let j = 0; j < letters.length; j++) {
            const letter = alphabet[letters[j]];
            word.push(letter);
        }

        translation.push(word.join(''));
    }

    console.log(translation.join(" "));
}

decodeMorse(example2);
