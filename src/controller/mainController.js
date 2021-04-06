const sendLine = require('../constant/sendLine');
const serviceLine = new sendLine();

exports.main = async function (req, res) {
  
    console.log(req.body.events[0]);
    let reply_token = req.body.events[0].replyToken;
    let msg = '';
    let body = [];
    let getHwid = req.body.events[0].beacon.hwid;
    let locationHwid = 
    {
      "014ad71cfd":"ปราสาทศีขรภูมิ",
      "014b374550":"ที่นี่วนอุทยานพนมสวาย"
    }

    let locationLists =
    {
        "014ad71cfd":{
          "type": "template",
          "altText": "this is a carousel template",
          "template": {
            "type": "carousel",
            "imageSize": "contain",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/b049e383561d52fbb5c3a6e7ac6ce575.jpg",
                "title": "ปราสาทศีขรภูมิ สุรินทร์",
                "text": "ปราสาทศีขรภูมิ หรือ ปราสาทระแงง ตั้งอยู่ อำเภอศีขรภูมิ จังหว",
                "actions": [
                  {
                    "type": "uri",
                    "label": "อ่านเพิ่มเติม",
                    "uri": "https://www.paiduaykan.com/travel/ปราสาทศรีขรภูมิ"
                  }
                ],
                "imageBackgroundColor": "#FFFFFF"
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/cf218a07ae7756a3e2a2535d2b8531e2.jpg",
                "title": "สินค้าขึ้นชื่อของที่นี่",
                "text": "กาละแมสดศีขรภูมิ",
                "actions": [
                  {
                    "type": "uri",
                    "label": "อ่านเพิ่มเติม",
                    "uri": "http://i-san.tourismthailand.org/867/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/85ecf0433a74a781116632cd8c7cefa8.jpg",
                "title": "ร้านอาหาร ใกล้ปราสาทศีขรภูมิ ",
                "text": "อร่อยถูกปากแน่นอน",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://www.wongnai.com/businesses?nearBusinessId=336962&rerank=false&domain=1"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/9fde11ac5bec5ce1ac2e6404ccc356ac.jpg",
                "title": "ที่พักใกล้ปราสาทศีขรภูมิ",
                "text": "มีให้เลือกมากมาย ตอบโจทย์ความต้องการของลูกค้าทุกกลุ่ม",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เลือกที่พัก",
                    "uri": "https://www.wongnai.com/hotels?spatialInfo.radius=31.0686&nearBusinessId=336962&rerank=false&domain=3"
                  }
                ]
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

    exports.firestore = async(req,res) => {
  var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
  
  const db = admin.firestore();
  
  const docRef = db.collection('users').doc('alovelace');
  
  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
}

var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
  
  const db = admin.firestore();
  
  const docRef = db.collection('users_access');
  
  await docRef.set({
    UserID: req.body.events[0].source.userId,
    HWID: getHwid,
    Locations: locationHwid.getHwid,
    date_time: new Date().toLocaleString()
  });


    res.sendStatus(200); 
}; 




