import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const fields = {};
        lines.forEach((line) => {
          const [firstName, , , , , field] = line.split(',');
          if (field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          }
        });
        resolve(fields);
      }
    });
  });
};

export default readDatabase;
