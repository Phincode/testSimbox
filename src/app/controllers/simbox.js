//module import
const SmsTransceiver = require('node-sms-transceiver');
const SerialCommander = require('@westh/serial-commander') // or use import ... from ...


exports.testSimBox=async(req,res)=>{
    var response=await main();
    res.json(response);
}


const serialCommander = new SerialCommander({
  port: 'COM28', // defaults to /dev/modem
  //baudrate: 9600, // defaults to 115200
  //readDelimiter = "\r", // defaults to '/n'
 // writeDelimiter = "\n", // defaults to '/r/n'
  disableLog: false, // defaults to false
  defaultDelay: 50, // delay [ms] before the command is issued defaults to 100
  log: string => console.log(`[${new Date().toISOString()}] ${string}`) // default logging function
})

async function main () {
  const options = {
    expectedResponses: ['OK', 'YEAH'], // defaults to ['OK']
    timeout: 500,  // defaults to 1000
    delay: 100 // defaults to defaultDelay set in the constructor
  }
  const response = await serialCommander.send('AT', options)
  console.log(response)
  serialCommander.close()
  return response;
}