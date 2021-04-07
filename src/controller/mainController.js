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
          "altText": "ปราสาทศีขรภูมิ",
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

        "014b374550":{
          "type": "template",
          "altText": "วนอุทยานแห่งชาติพนมสวายสุรินทร์",
          "template": {
            "type": "carousel",
            "imageSize": "contain",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/2838189a6e09cee978ea9098fc04cd93.jpg",
                "title": "วนอุทยานแห่งชาติพนมสวายสุรินทร์",
                "text": "ตั้งอยู่ที่ตำบลนาบัว อำเภอเมือง จังหวัดสุรินทร์ เป็นภูเขาบนท",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://www.paiduaykan.com/travel/อุทยานพนมสวาย"
                  }
                ],
                "imageBackgroundColor": "#FFFFFF"
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/6ddc49423d01382de6d5bd4c8afb87ba.jpg",
                "title": "ร้านอาหารใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "ร้านอาหารที่ต้องเเวะ ร้านสวนเรา และอีกมากมาย",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://www.wongnai.com/businesses?page.number=2&nearBusinessId=341052&rerank=false&domain=1"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://sv1.picz.in.th/images/2021/04/06/A07OJV.jpg",
                "title": "ที่พักใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "มีให้เลือกมากมาย ตอบโจทย์ความต้องการของลูกค้าทุกกลุ่ม",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://www.choowap.com/th/hotels-near-วนอุทยานพนมสวาย/3647"
                  }
                ]
              }
            ]
          }
        }
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

 

var admin = require("firebase-admin");

var moment = require('moment-timezone');

var serviceAccount = {
  "type": "service_account",
  "project_id": "chaba-test-firestore",
  "private_key_id": "ee8865dfc641626533aa523a782ef264ea8bb720",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCo0JyWIeEzfYF5\nBOTrIlzt7kgdMufMHTWHD3DiRNHy/APVShRr+u4spItphG1AKYxbbX6uh6BDChwz\nBem0vbT/tsQ9qeewpoEoi7b4uJouNGm8hvItwiiieBOZKLDsxkerM3NJQYtX3Ncf\nSJ/D/4zaVEAAMpHJ0v65R8C1fJTdaTkSHpkqhQ0/m9bIeRru4KM0NM8IUgAKYWpl\nLSFFMWNZeql2VQCvOHzXzHqfigChNXMMFGFiFA1zHY0iY77vngRh7ZTYl9NK3to+\n2pXbANPlRUgoG4dtRoyxmP5nJ3BTKkl3FeTXyFe56z8AyQhEVCxzCnndv6R+pebA\nXsOrn6vZAgMBAAECggEATmeFMl1N4MI7rd9OCr8M9hyjNZx899nhEHdlcFGSSQ4v\nIZKkZXpHwEgzz7AHpbMmUxhJq/mlvz0k17W5U46AT/usrQ8KYosSlag+NMpYIXmK\nWls6g3IXuU2XnJy/f1if1K2yr6VXeFlDOG5cdYVs/8H9b5oNB/WNBLSElkXkRehk\nAAUArUYjEKEviMx6rO6Rwy5dOsprdpjF7MlyXPUSJ8IPnzUxjEyMvLL14iq7sqIB\n9n5RmN/ZqdTb3IQFyY8/e48P7TQNao5gCk7ADOWa1PkYujuxNFP/HiEczJvpt50Y\nlMmCPDih7EjCMcwwyxxSN8Lw5TAkiwn3VTOwiRbauQKBgQDui/lRS4BGsbqqBFCy\nBYmlGkeKMGpnQYNTuNLqRU5cray/CS5tOlBSFsfs06eDHI3znJRCgYSY9IUKvE2a\nXRj5QraJZcKYFbhh5RwYmyf2+qEYgAYpENQeqzJoyz3bq6mAIrFW31aUaVIXgxAi\ntM5BopvyYmk/Sm93THS4q6VIDwKBgQC1KoviKyksbtwCaTB4tiBAPm1xLI0hg79r\nWrD8MI4R/BbspySVsrk6PFXt615co2fb0A0UmzYyqNQ+XN6Y3CdXXXcajTmyyJa6\nnq/is0a5RJFD1Kfiin41jjqfhNyO9LjIPL3ZXWWvJ80pOBAb6lj6GpYNoPltb7Ra\n1k8W4sgllwKBgQDB3vLmtjTvv5xUdyNaO5PtohkIX2bqulzQW0LXcTJJskDWFdEs\nppsGzEr5196peTiJB/Waw4aPhRLncbikPwt/8U9HBXQMhIKQ1VJrURY+7Nyme84F\n7A5pSnuynZONh8s/P3Lfhq3n+lzkjPk9K7MBtvWFHaQp8wX6cCHgwGeY0wKBgQCE\n79V5fqZV3ns+oaVZznrX6XcxZrmg8CYURpY8V/zIIa1ItlVYK69TllaPoPi7DYT2\nfTI7/rDEd7JWmJsWm+WabBErwJmoIRzJkAwMU/T/mdrmZTNUPr/h2J4X08xschLt\ni/TbfXdSEeiv6F2ZvlrQG5YkJg0hSqiTR1L9vieTvQKBgCdxRQNlZafV3y8UFYmf\nZu14fYcgEr1jRf/m/9Mgcwan/9fegyPR+sHWZ/VbUMkxUwMUrcBFuH0arlbZEpNj\nEbkpwwUH5EP5SNoqzOGT8anRthr3Of97dUoHH/nXa+/y2skaUh0UtmAn5vsBLaX8\nBgPnXMnLFkSNRqDAcCGmxvk2\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-jwn2j@chaba-test-firestore.iam.gserviceaccount.com",
  "client_id": "110200610812242322333",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jwn2j%40chaba-test-firestore.iam.gserviceaccount.com"
}
;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
  
  const db = admin.firestore();
  
  const docRef = db.collection('users_access');
  
  try {

    let CH = await docRef.add({
      
      UserID: req.body.events[0].source.userId,
      HWID: getHwid,
      Locations: locationHwid[getHwid],
      date_time: moment().tz("Asia/Bangkok").format()
    });

    console.log(CH)
  
  } catch (error) {
    console.log(error);
  }
  

    res.sendStatus(200); 
}; 




