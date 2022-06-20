//module import
const Port = require('serial-at');
const SmsTransceiver = require('node-sms-transceiver');

exports.testSimBox=async(req,res)=>{
    var response=await helloword();
    res.json(response);
}

async function helloword(){
    try {
        // create serial connection
    const port = new Port('COM28');
 
    // open serial connection
    await port.open();
 
    // execute AT command and diaplay result
    console.log(await port.at('AT'));
 
    // close serial connection
    await port.close();
    return "ok";
    } catch (error) {
        return error;
    }
}