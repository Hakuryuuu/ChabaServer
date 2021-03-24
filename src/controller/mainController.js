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
        "014ad71cfd": {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
              "type": "carousel",
              "columns": [
                {
                  "title": "ร้านอาหาร",
                  "text": "ขัอมูล",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "ลิ้งค์",
                      "uri": "https://www.wongnai.com/listings/restaurants-surin?fbclid=IwAR1JqDlW2pDdUFcyakonXq7oyKFyZtAxeBeByGq3pYM2mYyIJO03Fzuc1Zk"
                    },
                    {
                      "type": "uri",
                      "label": "เฮียเกี๊ยก เย็นตาโฟ ",
                      "uri": "https://www.wongnai.com/restaurants/17019FT-เฮียเกี๊ยก-เย็นตาโฟ"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                },
                {
                  "title": "โรงแรม",
                  "text": "ข้อมูล",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "ลิ้งค์",
                      "uri": "https://www.agoda.com/th-th/pages/agoda/default/DestinationSearchResult.aspx?city=17765&site_id=1891451&tag=2c232039-1efe-18d6-7476-309fc9700870&device=c&network=g&adid=492681439083&rand=16189908099684075239&expid=&adpos=&aud=kwd-300128420814&gclid=CjwKCAjwxuuCBhATEiwAIIIz0Qg_gew2J70frSS3xDfkNvj6yTRs4yOKKQRPeopRDt6TFaA5ibft6RoCw6oQAvD_BwE"
                    },
                    {
                      "type": "uri",
                      "label": "The wood",
                      "uri": "https://www.agoda.com/th-th/the-wood-h13753342/hotel/surin-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1891451&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2021-04-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=THB&isFreeOccSearch=false&tag=2c232039-1efe-18d6-7476-309fc9700870&tspTypes=1,16&los=1&searchrequestid=5ed94ef2-0f52-48c6-a2b2-960b77a4fdd2&tabbed=true"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                }
              ]
            }
          },

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
    // body.push(serviceLine.messageText(`${msg}`));

    body.push(msg)

    if (body.length > 0) {
        serviceLine.replyLine(reply_token, body);
    }

    res.sendStatus(200); 
}; 