const sendLine = require('../constant/sendLine');
const serviceLine = new sendLine();

exports.main = async function (req, res) {
    console.log(req.body.events[0]);
    let reply_token = req.body.events[0].replyToken;
    let msg = '';
    let body = [];
    let getHwid = req.body.events[0].beacon.hwid;
    let locationLists =
    {
        "014ad71cfd": "ที่นี่ปราสาทศีขรภูมิ",
        "014b374550": "ที่นี่วนอุทยานพนมสวาย"
    };

    Object.keys(locationLists).map( hwid => {
        if (hwid == getHwid) {
            msg = locationLists[hwid]
        }
    })

    // if (req.body.events[0].type == 'beacon') {
    //     msg = '';
    // } else {
    //     msg = (req.body.events[0] && req.body.events[0].message.text) ? req.body.events[0].message.text : '';
    // }


    // Test Return 
    body.push(serviceLine.messageText(`${msg}`));

    if (body.length > 0) {
        serviceLine.replyLine(reply_token, body);
    }

    res.sendStatus(200); 
}; 