
const fs = require('fs');
const path = require('path');

fs.mkdir("folders", (err) => {
  if (err) {
    console.error("Error creating folder1:", err);
    return; 
  }
  console.log("Folders is created successfully");

  fs.mkdir("folders/subFolder", (err) => {
    if (err) {
      console.error("Error creating subFolder1:", err);
      return; 
    }
    console.log("Subfolder is created successfully");

    fs.writeFile("folders/subFolder/data.txt", "hello world", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return; 
      }
      console.log("File is created successfully");

      fs.readFile("folders/subFolder/data.txt", 'utf-8', (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return; 
        }
        console.log("File content:", data);

        fs.rename("folders/subFolder/data.txt", "folders/subFolder/newdata.txt", (err) => {
          if (err) {
            console.error("Error renaming file:", err);
            return; 
          }
          console.log("File renamed to newData.txt");

          deleteFolder("folders");
        });
      });
    });
  });
});

function deleteFolder(folderPath) {
    // Read all items (files and folders) inside the folder
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error(`Error reading folder ${folderPath}:, err`);
        return; 
      }
  
      let remaining = files.length; 
  
      if (remaining === 0) {
        return removeFolder(folderPath); 
      }
  
      // Loop through each item in the folder
      files.forEach((file) => {
        const currentPath = path.join(folderPath, file); 
  
        fs.stat(currentPath, (err, stats) => {
          if (err) {
            console.error(`Error getting stats of ${currentPath}:, err`);
            return; 
          }
  
          if (stats.isDirectory()) {
            
            deleteFolder(currentPath);
          } else {
           
            fs.unlink(currentPath, (err) => {
              if (err) {
                console.error(`Error deleting file ${currentPath}:, err`);
                return; 
              }
              console.log(`File deleted: ${currentPath}`);
              remaining -= 1; 
              if (remaining === 0) removeFolder(folderPath); 
            });
          }
        });
      });
    });
  }