const http = require("http"); //create an HTTP server.
const fs = require("fs"); //read and write files.
const url = require("url"); //Helps extract parts of the URL from a request.
const querystring = require("querystring"); //Parses form data sent by the user.

const PORT = 3000;
const JSON_FILE = "data.json"; // The file to store JSON data

// Create an HTTP server
http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Serve the registration form (HTML)
    if (parsedUrl.pathname === "/") {
      fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading the form");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }

    // Handle form submission via POST request
    else if (parsedUrl.pathname === "/submit" && req.method === "POST") {
      let body = "";

      // Collect the incoming data
      req.on("data", (chunk) => {
        body += chunk;
      });

      // When the entire data is received, process it
      req.on("end", () => {
        const formData = querystring.parse(body);

        // Read existing data from the JSON file (if any)
        fs.readFile(JSON_FILE, "utf-8", (err, jsonData) => {
          let data = [];

          if (!err && jsonData) {
            data = JSON.parse(jsonData);
          }

          // Add the new registration entry
          data.push(formData);

          // Write the updated data to the JSON file
          fs.writeFile(JSON_FILE, JSON.stringify(data, null, 2), (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Error writing to JSON file");
              return;
            }

            // Send a response back with the data
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({
                message: "Form submitted successfully",
                data: formData,
              })
            );
          });
        });
      });
    }

    // Default response for other routes
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });