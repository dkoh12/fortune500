# fortune500
Index of Fortune 500 companies

Getting raw data of fortune 500 companies for free is not easy.
Doing a curl on Fortune 500 did not return me a list of html elements to look at the data.

Essentially this became a web scraping project.
If I can't look at Fortune 500, I looked at the components of the S&P 500 index.


Yahoo Finance no longer supports api. Fortune 500 has no api. The web page is filled with junk and useless ads
that makes trivial parsing more difficult.

## Reference

let baseUrl = "https://www.slickcharts.com/sp500";

let baseUrl = "https://www.suredividend.com/sp-500-stocks/";


Trading Economics
https://tradingeconomics.com/

### API

https://github.com/cmusam/fortune500


Yahoo Finance is outdated.

Use Alpha Vantage (free. 5 api requests per min)
https://www.alphavantage.co/documentation/

World Trading data (free. 5 stocks per request)
https://www.worldtradingdata.com/documentation#introduction

IEX
https://iexcloud.io/


Trading Economics
https://tradingeconomics.com/
