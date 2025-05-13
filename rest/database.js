const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data.json');

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

const getNextId = () => {
  const items = readData();
  return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
};

module.exports = { readData, writeData, getNextId };