const sendLine = require('../constant/sendLine');
const serviceLine = new sendLine();

exports.main = async function (req, res) {
	console.log(req.body)
	let reply_token = req.body.events[0].replyToken;
	let msg = (req.body.events[0] && req.body.events[0].message.text) ? req.body.events[0].message.text : '';
	let uuid = req.body.events[0].source.userId;
	let body = [];

	// Test Return 
	body.push(serviceLine.messageText(`${msg} - UUID ${uuid}`));

	if (body.length > 0) {
		serviceLine.replyLine(reply_token, body);
	}

	res.sendStatus(200);
};