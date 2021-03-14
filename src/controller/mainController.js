const sendLine = require('../constant/sendLine');
const serviceLine = new sendLine();

exports.main = async function (req, res) {
    console.log(req.body);
    let reply_token = req.body.events[0].replyToken;
    let uuid = req.body.events[0].source.userId;
    let msg = '';
    let body = [];

    if (req.body.events[0].type == 'beacon') {
        msg = 'ที่นี่ปราสาทศีขรภูมิ';
    } else {
        msg = (req.body.events[0] && req.body.events[0].message.text) ? req.body.events[0].message.text : '';
    }

    // Test Return 
    body.push(serviceLine.messageText(`${msg} - UUID ${uuid}`));

    if (body.length > 0) {
        serviceLine.replyLine(reply_token, body);
    }

    res.sendStatus(200); 
};