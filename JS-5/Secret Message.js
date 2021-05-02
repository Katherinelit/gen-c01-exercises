let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

const removed = secretMessage.pop();
console.log(secretMessage);
console.log(removed);
console.log(secretMessage.length);
function addSecretMessage(arr) {
  arr.push('to', 'Program');
}

addSecretMessage(secretMessage);
console.log(secretMessage);

secretMessage[7] = 'right';
console.log(secretMessage);

const firstElement = secretMessage.shift();
console.log(secretMessage);

console.log(secretMessage.unshift('Programming'));
console.log(secretMessage);

console.log(secretMessage.splice(6, 5, 'know'));
console.log(secretMessage);

console.log(secretMessage.join(''));



