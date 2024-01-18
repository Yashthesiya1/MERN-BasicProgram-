const fs = require('fs');
function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  async function main() {
    try {
      console.log('Start reading file...');
      
      // Use 'await' to wait for the asynchronous operation to complete
      const content = await readFileAsync('file.json');
      
      console.log('File content:', content);
      
      console.log('Finished reading file.');
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }
  
  main();