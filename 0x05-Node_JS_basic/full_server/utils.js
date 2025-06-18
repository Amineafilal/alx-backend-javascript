// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const result = {};

      for (const line of lines) {
        if (!line) continue;
        const [firstname, , , field] = line.split(',');
        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      }

      resolve(result);
    });
  });
}
