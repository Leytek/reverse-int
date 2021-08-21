module.exports = reverse = n => +n.toString().split('').reverse().filter(c => c !== '-').join('')
