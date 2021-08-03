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
      "014b374550":"หมู่บ้านทอผ้าไหมบ้านท่าสว่าง"
    }

    let locationLists =
    {
        "014ad71cfd":{
          "type": "template",
          "altText": "this is a carousel template",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://sv1.picz.in.th/images/2021/08/01/2i9t8n.md.jpg",
                "title": "ปราสาทศีขรภูมิ",
                "text": "Sikhoraphum Castle",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ปราสาทศีขรภูมิ/@14.9445743,103.7961633,17z/data=!3m1!4b1!4m5!3m4!1s0x3117423624777d49:0xace0ac8ccc4d46f6!8m2!3d14.9445743!4d103.798352"
                  },
                  {
                    "type": "message",
                    "label": "ประวัติสถานที่",
                    "text": "ประวัติปราสาทศีขรภูมิ"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://th.wikipedia.org/wiki/ปราสาทศีขรภูมิ"
                  }
                ],
                "imageBackgroundColor": "#FFFFFF"
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1c948f6b27775b941abd49e6065661e0.jpg",
                "title": "สินค้าOTOP ใกล้ปราสาทศีขรภูมิ",
                "text": "Souvenir ",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/กาละแมสดศรีขรภูมิ+ตราปราสาทเดียว/@14.9448126,103.7849399,17z/data=!3m1!4b1!4m5!3m4!1s0x3117425092567181:0x6de552c03f882906!8m2!3d14.9448126!4d103.7871286"
                  },
                  {
                    "type": "message",
                    "label": "ประวัติสินค้า",
                    "text": "ประวัติสินค้าของปราสาทศีขรภูมิ "
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://www.brighttv.co.th/lifestyle/ขนมหวานโบราณ-ขึ้นชื่อ-แห"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://sv1.picz.in.th/images/2021/08/01/2iT1EZ.md.jpg",
                "title": "ร้านอาหารใกล้ปราสาทศีขรภูมิ",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหารแถวปราสาทศีขรภูมิ/@14.9448126,103.7849399,17z/data=!3m1!4b1"
                  },
                  {
                    "type": "message",
                    "label": "ร้านอาหาร ",
                    "text": "ร้านอาหารใกล้ปราสาทศีขรภูมิ"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://www.facebook.com/ร้านเจ๊เหนียง-ใกล้ปราสาทศีขรภูมิ-314893475598491/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1d96b495165b1f80d8091c63c057ee36.th.jpg",
                "title": "ที่พักใกล้ปราสาทศีขรภูมิ",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ที่พักใกล้ปราสาทศีขรภูมิ/@14.9448019,103.717088,12z/data=!3m1!4b1"
                  },
                  {
                    "type": "message",
                    "label": "ที่พัก",
                    "text": "ที่พักใกล้ปราสาทศีขรภูมิ"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://www.paiduaykan.com/hotel/ที่พักสุรินทร์/"
                  }
                ]
              }
            ]
          }
                
        },

        "014b374550":{
          "type": "template",
          "altText": "หมู่บ้านทอผ้าไหมบ้านท่าสว่าง",
          "template": {
            "type": "carousel",
            "imageSize": "cover",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/9f87dc7d6ff015bc2750a135109af0d6.jpg",
                "title": "หมู่บ้านทอผ้าไหมบ้านท่าสว่าง",
                "text": "ตั้งอยู่ในอำเภอเมือง จังหวัดสุรินทร์ เป็นหมู่บ้านท่องเที่ยวเ",
                "actions": [
                  {
                    "type": "uri",
                    "label": "อ่านเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/locationeight"
                  },
                  {
                    "type": "message",
                    "label": "สถานที่ใกล้เคียง",
                    "text": "สถานที่ใกล้เคียง2"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/4b88dc05f9bbd8ff96f657e74f526099.jpg",
                "title": "ผ้าไหมยกทอง",
                "text": "ผ้าไหมยกทองโบราณบ้านท่าสว่างเป็นสินค้าประจำจังหวัดชื่อดังของ",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เลือกสินค้า",
                    "uri": "https://host-chaba.web.app/Producteight"
                  },
                  {
                    "type": "message",
                    "label": "สินค้าอื่นๆ",
                    "text": "สินค้าอื่นๆ2"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/d6125fcd738de77ca2747cc8ea6f59ba.jpg",
                "title": "Service",
                "text": "ร้านอาหาร และ ที่พัก",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เลือก",
                    "uri": "https://host-chaba.web.app/serviceeight"
                  },
                  {
                    "type": "message",
                    "label": "เลือกเพิ่มเติม",
                    "text": "เลือกเพิ่มเติม2"
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




