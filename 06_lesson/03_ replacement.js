const str = 'RgTjIklk20'
    console.log(str)
function replacement(str) {
    const arr = str.split('');

    for (let i = 0; i < arr.length; i++) {

        if(!isNaN(arr[i])) {
            arr[i] = '_';
        } else {
            let code = arr[i].codePointAt(0);
            if (code >= 97 && code <= 122) {
                arr[i] = arr[i].toUpperCase();
            }
            if(code >= 41 && code <= 90) {
                arr[i] = arr[i].toLowerCase();
            }
        }
        
    }

    console.log(arr.join(''))
}


replacement(str)
