
var request = require('request');
var fs = require('fs');
var underscore = require('underscore');
var chalk = require('chalk');
var moment = require('moment');
var jsdom = require('jsdom');
var jquery = require('jquery');


// Fortune website really sucks. can't web crawl data

// If I can't look at Fortune 500 data, look at S&P 500 index data.
// S&P 500 is US only. not global.

let baseUrl = "https://www.slickcharts.com/sp500";

// let baseUrl = "https://fortune.com/fortune500/2019/search/";
// let baseUrl = "https://www.suredividend.com/sp-500-stocks/";

// "https://finance.yahoo.com/quote/AAPL/financials?p=AAPL";



// "https://fortune.com/fortune500/2019/walmart/";

// need to do debug / verbose / trace mode


/**
 * Fetch the basic info and names of fortune 500 companies.
 * Need to do web crawling... on HTML DOM elements

 * Fetch HTML for page asynch
 * Feed HTML to JSDOM and get DOM object in return
 * feed DOM object into JQuery
 * use JQuery to grab required pieces of data

 */
function fetchCompanies() {
  let lst = [];

  // console.log(baseUrl + "2019/search/");

  request(baseUrl, (error, response, body) => {
    if (response.statusCode != 200) {
      console.log("status code: " + response.statusCode);
      console.log("errored with the following message: " + error);
      return;
    }

    // read ul class

    // write to file
    fs.writeFile('sp500.txt', body, (err) => {
      if (err) throw err;
    });

    // jsdom.env({
    //   html: body,
    // }, (err, window) => {
    //   var $ = window.jQuery;
    //
    // })


    const {JSDOM} = jsdom;
    const dom = new JSDOM(body);
    const $ = jquery(dom.window);
    var items = $(".thead");

    console.log(items);

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
