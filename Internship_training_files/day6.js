
// import {retrieveData} from './day5.js';
const loadData = require ('./day5.js');

loadData.retrieveData()
  .then(() => {
    console.log("Data retrieval completed successfully.");
  })
  .catch(error => {
    console.error("Error during data retrieval:", error);
  });