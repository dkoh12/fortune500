
var request = require('request');
var fs = require('fs');
var underscore = require('underscore');
var chalk = require('chalk');
var moment = require('moment');

let baseUrl = "https://fortune.com/fortune500/";

// need to do debug / verbose / trace mode


/**
 * Fetch the basic info and names of fortune 500 companies
 */
function fetchCompanies() {
  let lst = [];
  request(baseUrl, (error, response, body) => {
    if (response.statusCode != 200) {
      console.log("status code: " + response.statusCode);
      console.log("errored with the following message: " + error);
    }

    console.log("body: " + body);

  });

  return lst;
}

/**
 * @{param} company - Get detailed financial info on a company
 */
function getDetailedCompanyInfo(company) {
  console.log(company);

}


fetchCompanies();


module.exports = {}
