// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (callback) => {
  let data = [];
  let error = null;
  let counter = 0;
  let check = () => {
    counter++;
    if (counter === 3) {
      callback(error, data);
    }
  };
  fs.readFile(file1, (err, data1) => {
    if (err) {
      error = err;
    } else {
      const parsingData1 = JSON.parse(data1);
      const splitData1 = parsingData1.message.split(" ")[1];
      data.push(splitData1);
    }
    check();
  });
  fs.readFile(file2, (err, data2) => {
    if (err) {
      error = err;
    } else {
      const parsingData2 = JSON.parse(data2);
      const splitData2 = parsingData2[0].message.split(" ")[1];
      data.push(splitData2);
    }
    check();
  });
  fs.readFile(file3, (err, data3) => {
    if (err) {
      error = err;
    } else {
      const parsingData3 = JSON.parse(data3);
      const splitData3 = parsingData3[0].data.message.split(" ")[1];
      data.push(splitData3);
    }
    check();
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
