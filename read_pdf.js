const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('DOC/About us – Computational Science and Engineering Association (CSEA).pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log("Done writing to pdf_content.txt");
}).catch(function(error) {
    fs.writeFileSync('pdf_error.txt', error.toString());
});
