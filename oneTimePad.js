oneTimePadMethodEncryption = (message, oneTimePad, cb) => {
    let lowerCaseCharacterList = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let upperCaseCharacterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let length = message.length;
    let encryptedMessage = '';

    if (length > oneTimePad.length) {
        return cb('Length of oneTimePad is smaller than the message length.', null);
    }

    for (let index = 0; index < message.length; index ++) {

        let messageCharacter = message.charAt(index);
        let oneTimePadCharacter = oneTimePad.charAt(index);
        let messageCharacterIndex, oneTimePadCharacterIndex;
        let newCharacter, newCharacterIndex;

        if (messageCharacter == messageCharacter.toUpperCase()) {
            messageCharacterIndex = upperCaseCharacterList.indexOf(messageCharacter) + 1;
        } else {
            messageCharacterIndex = lowerCaseCharacterList.indexOf(messageCharacter) + 1;
        }

        if (oneTimePadCharacter == oneTimePadCharacter.toUpperCase()) {
            oneTimePadCharacterIndex = upperCaseCharacterList.indexOf(oneTimePadCharacter) + 1;
        } else {
            oneTimePadCharacterIndex = lowerCaseCharacterList.indexOf(oneTimePadCharacter) + 1;
        }

        newCharacterIndex = (messageCharacterIndex + oneTimePadCharacterIndex) % 26;

        // newCharacterIndex --;
        if (newCharacterIndex <= 0) newCharacterIndex += 25;

        newCharacter = (messageCharacter == messageCharacter.toUpperCase()) ? upperCaseCharacterList[newCharacterIndex] : lowerCaseCharacterList[newCharacterIndex];
        console.log(messageCharacter + '(' + messageCharacterIndex + ') ' + oneTimePadCharacter + '(' + oneTimePadCharacterIndex + ') ' + newCharacter + '(' + newCharacterIndex + ')');

        encryptedMessage += newCharacter;
    }

    console.log('message    : ' + message);
    console.log('oneTime Pad: ' + oneTimePad);

    return cb(null, encryptedMessage);
};

oneTimePadMethodDecryption = (message, oneTimePad, cb) => {
    let lowerCaseCharacterList = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let upperCaseCharacterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let length = message.length;
    let encryptedMessage = '';

    if (length > oneTimePad.length) {
        return cb('Length of oneTimePad is smaller than the message length.', null);
    }

    for (let index = 0; index < message.length; index ++) {

        let messageCharacter = message.charAt(index);
        let oneTimePadCharacter = oneTimePad.charAt(index);
        let messageCharacterIndex, oneTimePadCharacterIndex;
        let newCharacter, newCharacterIndex;

        if (messageCharacter == messageCharacter.toUpperCase()) {
            messageCharacterIndex = upperCaseCharacterList.indexOf(messageCharacter);
        } else {
            messageCharacterIndex = lowerCaseCharacterList.indexOf(messageCharacter);
        }

        // messageCharacterIndex ++;

        if (oneTimePadCharacter == oneTimePadCharacter.toUpperCase()) {
            oneTimePadCharacterIndex = upperCaseCharacterList.indexOf(oneTimePadCharacter);
        } else {
            oneTimePadCharacterIndex = lowerCaseCharacterList.indexOf(oneTimePadCharacter);
        }

        oneTimePadCharacterIndex ++;

        newCharacterIndex = (messageCharacterIndex - oneTimePadCharacterIndex);
        if (newCharacterIndex < 0) newCharacterIndex = newCharacterIndex  + 26;


        newCharacter = (messageCharacter == messageCharacter.toUpperCase()) ? upperCaseCharacterList[newCharacterIndex] : lowerCaseCharacterList[newCharacterIndex];
        console.log(messageCharacter + '(' + messageCharacterIndex + ') ' + oneTimePadCharacter + '(' + oneTimePadCharacterIndex + ') ' + newCharacter + '(' + newCharacterIndex + ')');

        encryptedMessage += newCharacter;
    }

    console.log('message    : ' + message);
    console.log('oneTime Pad: ' + oneTimePad);

    return cb(null, encryptedMessage);
};

oneTimePadMethodEncryption('M', 'M', (err, encryptedMessage) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Encrypted Message: ' + encryptedMessage);
        console.log('----------------------------------------------------------------------------------------');
        oneTimePadMethodDecryption(encryptedMessage, 'M', (err, decryptedMessage) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Decrypted Message: ' + decryptedMessage)   ;
            }
        });
    }
});
