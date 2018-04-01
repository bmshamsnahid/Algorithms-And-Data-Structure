let fs = require('fs');
fs.readFile('./file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error is: ' + err);
    } else {
        let array = data.split('\n');
        console.log(array);
    }
});