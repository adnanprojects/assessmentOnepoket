const express = require("express");
const app = express();
const data = require("./dataManipulation");
const path = require("path");
const fs = require("fs").promises;

const port = 3000;

async function wordCount() {
  const filePath = path.join(__dirname, ".", "data.txt");

  try {
    const data = await fs.readFile(filePath, "utf8");

    console.log(data.split(" ").length);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
  }
}

// async function wordCount() {
//   const filePath = path.join(__dirname, ".", "data.txt");

//   await fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data.split(" ").length);
//     }
//   });
// }

app.use((req, res) => {
  // Task 1
  res.send("<h1>Hello, World!</h1>");

  // Task 2
  console.log(data.sum([1, 2, 3, 9, 8, 7, 4]));

  // Task 3
  wordCount();
});

app.listen(port, () => {
  console.log(`App is listening at https://localhost:${port}`);
});
