const request = require('request');

class sendLine {

    replyLine(reply_token, msgArray) {
        let token = process.env.LINE_TOKEN_CHANNEL || "xxx";
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };

        let body = JSON.stringify({
            replyToken: reply_token,
            messages: msgArray
        });

        console.log(body);

        request.post({
            url: 'https://api.line.me/v2/bot/message/reply',
            headers: headers,
            body: body
        }, (err, res, body) => {
            console.log('status = ' + res.statusCode);
            if (res.statusCode == 200) {
                return true;
            }
        });

        return false;
    }

    messageText(message) {
        const msg = {
            type: 'text',
            text: message
        };

        return msg;
    }

    // messageflex(alttext, Objectcontent){
    //     const msg = {
    //         type: 'flex',
    //         altText: alttext,
    //         contents: Objectcontent
    //     }
    // }
}

module.exports = sendLine;