const {Builder, By, Key, until} = require('selenium-webdriver');

const tryID = async (id, driver) => {
	await driver.get('https://jitsi.otos3.nl/' + id);

    let el = await driver.findElement(By.id('filmstripRemoteVideosContainer'));
    findElements(By.xpath("//*[contains(@id,'js_')]"));
  	await driver.wait(until.elementIsVisible(el), 50000);
  	//let spans = await driver.findElements(By.xpath("//*[contains(@id,'participant_')]"));
  	let spans = await driver.findElements(By.xpath("//div"));
  	console.log('Number of participants: ' + spans);

  	if(spans > 1) {
  		console.log('Found active session at ID:', id);
  		console.log('Active users:', spans -1);
  	} else {
  		console.log('Session ID ' + id + ' is inactive.')
  	}

	/*
    await driver.wait(until.titleIs('A | Jitsi Meet'), 50000);
    driver.wait(until.elementLocated(By.className('participants-count-number')), 5 * 10000).then(element => {
      console.log('Number of participants: ' + element.text);
    });
    await driver.findElement(By.id('filmstripRemoteVideosContainer'))
    await driver.wait(until.titleIs('webdriver - Google Suche'), 1000);
    await driver.findElement(By.className('participants-count-number'))
    
  	  //.findElements(driver.By.tagName('span'))
      .then(function(element){
        console.log('Number of participants: ' + element.text);
      });
    await driver.wait(until.titleIs('webdriver - Google Suche'), 1000);
    */
}
 
(async function example() {
	let driver = await new Builder().withCapabilities({'browserName': 'firefox', acceptSslCerts: true, acceptInsecureCerts: true}).build();

	ids = ['test123', 'amazingRoom', 'hola']; //These IDs can be changed or iterated over.

	try {
		ids.forEach((item, index) => {
				tryID(item, driver)
		});
	} finally {
		await driver.quit();
	}
})();