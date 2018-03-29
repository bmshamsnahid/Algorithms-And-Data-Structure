let transposition = (myString, column, cb) => {

    createMatrix(myString, column, (err, matrix, row) => {
        let transposedMessage = '';
        if (err) {

        } else {
            for (let j=0; j<column; j++) {
                for (let i=0; i<row; i++) {
                    if (matrix[i][j] == null) {

                    } else {
                        transposedMessage += matrix[i][j];
                    }
                }
            }

            return cb(null, transposedMessage);
        }
    });
};

let createMatrix = (myString, column, cb) => {
    myString = myString.split('');
    let row,
        length = myString.length,
        tempRowF = length/column,
        tempRowR = parseInt(length/column),
        matrix = new Array();

    if (tempRowR == tempRowF) {
        row = tempRowR;
    } else {
        row = tempRowR + 1;
    }

    let index = 0;

    for (let i=0; i<row; i++) {
        matrix[i] = new Array();
    }

    for (let i=0; i<row; i++) {
        for (let j=0; j<column; j++) {
            if (myString[index] == ' ') {
                matrix[i][j] = '-';
            } else if (index >= length) {
                matrix[i][j] = null;
            } else {
                matrix[i][j] = myString[index];
            }
            index ++;
        }
    }

    return cb(null, matrix, row);
};

transposition('ABCDEF', 3, (err, encryptMessage) => {
    if (err) {

    } else {
        console.log(encryptMessage);
        transposition(encryptMessage, 3, (err, decryptMessage) => {
            console.log(decryptMessage);
        })
    }
});

