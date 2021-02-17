// Code your solutions in this file

function writeCards(name, eventName) {
    let messages = [];
    for(let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
