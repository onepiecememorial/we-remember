const path = require('path');
const fs = require('fs');

// Change this as convenient for different files.
const CSV_FILENAME = 'lost-nakamas.csv';

const main = () => {
  const fileContent = fs
    .readFileSync(path.join(__dirname, `../data/${CSV_FILENAME}`))
    .toString();

  const [headerRows, ...content] = fileContent
    .trim()
    .replace('\r', '')
    .split('\n');

  const jsonData = [];

  const headerCells = headerRows.split(',');
  content.forEach((contentRow) => {
    const cells = contentRow.split(',');
    const data = {};

    cells.forEach((cell, index) => {
      data[headerCells[index]] = cell;
    });

    jsonData.push(data);
  });

  fs.writeFileSync(
    path.join(__dirname, `../src/${CSV_FILENAME.replace('csv', 'json')}`),
    JSON.stringify(jsonData, null, 2),
  );

  console.log('File correctly parsed and moved to src in JSON format! 🚀');
};

main();
