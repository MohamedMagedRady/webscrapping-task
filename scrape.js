const request= require('request');
const cheerio= require('cheerio');

request('http://hazine.info/tag/ottoman-empire/',(error, response, html) =>{
    if(!error && response.statusode == 200){
        const $ = cheerio.load(html);
        const sitetitle = $('.site-title')
        console.log(sitetitle)
    }
});