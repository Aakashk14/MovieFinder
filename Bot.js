const puppeteer = require('puppeteer');


module.exports.run= async(url)=>{
    // set browser path
    const browser = await puppeteer.launch({
        executablePath: "/usr/bin/chromium-browser",
        args:['--no-sandbox']}
        );
    const page = await browser.newPage();
    await page.goto(url);

    let temp = await page.evaluate(()=>{

        let i_status = document.querySelector("#dv-action-box-wrapper").innerText;
        let chkagainst = new RegExp("unavailable")
        if(chkagainst.test(i_status)){
            return 0
        }else{
            return 1
        }
    })
    return temp;
}


