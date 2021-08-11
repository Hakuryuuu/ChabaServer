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
      "014b374550":"ปราสาทช่างปี่",
      "0150ac0335":"อนุสาวรีย์หลวงไชยสุริยง",
      "0150c1a853":"วนอุทยานแห่งชาติพนมสวาย",
      "0150c51f2e":""
    }

    let locationLists =
    {
        "014ad71cfd":{
          "type": "template",
          "altText": "ปราสาทศีขรภูมิ",
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
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home"
                  }
                ],
                "imageBackgroundColor": "#FFFFFF"
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1c948f6b27775b941abd49e6065661e0.jpg",
                "title": "สินค้าOTOP ใกล้ปราสาทศีขรภูมิ",
                "text": "Product ",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/กาละแมสดศรีขรภูมิ+ตราปราสาทเดียว/@14.9448126,103.7849399,17z/data=!3m1!4b1!4m5!3m4!1s0x3117425092567181:0x6de552c03f882906!8m2!3d14.9448126!4d103.7871286"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/Productone"
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
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/serviceone"
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
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/serviceone"
                  }
                ]
              }
            ]
          }
        
        },

        "014b374550":{
          "type": "template",
          "altText": "ปราสาทช่างปี่",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/b0c23235544ddfb44c93a7aba226c9c1.jpg",
                "title": "ปราสาทช่างปี่",
                "text": "Chang Bei Castle",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.co.th/maps/dir//WPH2+XQ7+ปราสาทช่างปี่+ตำบล+ช่างปี่+อำเภอ+ศีขรภูมิ+สุรินทร์+32110/@14.9299777,103.7000948,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31175ce893229689:0xce09a6c00f7150a7!2m2!1d103.7019099!2d14.9299002?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/6e116c6c93d038feacc6bb9595e39156.png",
                "title": "ร้านอาหารใกล้ปราสาทช่างปี่",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหารใกล้ปราสาทช่างปี่/@14.8895622,103.5040917,11z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/d619f52d3421e8bd3e703b7ccd6758ca.jpg",
                "title": "สินค้าOTOPใกล้ปราสาทช่างปี่",
                "text": "Product ",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.facebook.com/เครื่องเคลือบบ้านช่างปี่-เครื่องปั้นดินเผาสุรินทร์-555733474908954/"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1344baf8934eb24ba42353b0a34ef3d5.png",
                "title": "ที่พักใกล้ปราสาทช่างปี่",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ที่พักใกล้ปราสาทช่างปี่/@14.8894771,103.5040911,11z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home"
                  }
                ]
              }
            ]
          }
        
        },

        "0150ac0335":{
          "type": "template",
          "altText": "อนุสาวรีย์หลวงไชยสุริยง",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/69c5a9f5809b827ea75ae960a5e80ac5.th.jpg",
                "title": "อนุสาวรีย์หลวงไชยสุริยง",
                "text": "Luang Chai Suriya Monument",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/อนุสาวรีย์หลวงไชยสุริยง+เจ้าเมืองศีขรภูมิ/@14.9448293,103.7843472,17z/data=!3m1!4b1!4m5!3m4!1s0x31174251de88a80f:0x2addc12f581ad214!8m2!3d14.9448293!4d103.7865359"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/a7137ddc721b3d9e5414bde5ef4ef1cb.png",
                "title": "ร้านอาหารใกล้อนุสาวรีย์หลวงไชยสุริยง",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหารอนุสาวรีย์หลวงไชยสุริยง+เจ้าเมืองศีขรภูมิ/@14.9376106,103.7836886,16z/data=!3m1!4b1?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/71fc4a01c90b0c76a65cdf87b04c8af5.th.jpg",
                "title": "สินค้า OTOP ใกล้อนุสาวรีย์หลวงไชยสุริยง",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ร้านของฝาก+OTop@ศีขรภูมิ/@14.9379616,103.7842354,16.24z/data=!4m9!1m2!2m1!1z4Liq4Li04LiZ4LiE4LmJ4LiyIE9UT1Ag4Lit4LiZ4Li44Liq4Liy4Lin4Lij4Li14Lii4LmM4Lir4Lil4Lin4LiH4LmE4LiK4Lii4Liq4Li44Lij4Li04Lii4LiHIOC5gOC4iOC5ieC4suC5gOC4oeC4t-C4reC4h-C4qOC4teC4guC4o-C4oOC4ueC4oeC4tA!3m5!1s0x3117435aa168fb7b:0x6b99f5bcd6a00b95!8m2!3d14.9384425!4d103.7886813!15sCpEB4Liq4Li04LiZ4LiE4LmJ4LiyIE9UT1Ag4Lit4LiZ4Li44Liq4Liy4Lin4Lij4Li14Lii4LmM4Lir4Lil4Lin4LiH4LmE4LiK4Lii4Liq4Li44Lij4Li04Lii4LiHIOC5gOC4iOC5ieC4suC5gOC4oeC4t-C4reC4h-C4qOC4teC4guC4o-C4oOC4ueC4oeC4tFqZASKWAeC4quC4tOC4meC4hOC5ieC4siBvdG9wIOC4reC4meC4uOC4quC4suC4p-C4o-C4teC4ouC5jCDguKvguKXguKfguIcg4LmE4LiK4LiiIOC4quC4uOC4o-C4tOC4ouC4hyDguYDguIjguYnguLIg4LmA4Lih4Li34Lit4LiHIOC4qOC4teC4guC4o-C4oOC4ueC4oeC4tJIBBXN0b3Jl?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/c8d480e634f91e8974503ef4aefd62c7.th.png",
                "title": "ที่พักใกล้อนุสาวรีย์หลวงไชยสุริยง",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ที่พักอนุสาวรีย์หลวงไชยสุริยง+เจ้าเมืองศีขรภูมิ/@14.9376106,103.7836886,15.88z?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              }
            ]
          }
        },

        "0150c1a853":{
          "type": "template",
          "altText": "วนอุทยานแห่งชาติพนมสวาย",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/d52dba45493cd215979c61fff07ce3c2.th.jpg",
                "title": "วนอุทยานแห่งชาติพนมสวาย",
                "text": "Phanom Sawai National Park",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/วนอุทยานพนมสวาย/@14.7628696,103.3721328,17z/data=!3m1!4b1!4m5!3m4!1s0x3119fa72354f839d:0xdd30811bf08258a2!8m2!3d14.7628696!4d103.3743215?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/d2fe085f4689bec603c942820bda568d.jpg",
                "title": "ร้านอาหารใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.7125947,103.3061936,11.57z?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/cbca43a531a86ecbad59bf7ca5423ae9.th.jpg",
                "title": "ของฝากใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ของฝากใกล้+วนอุทยานแห่งชาติพนมสวาย/@14.7758043,102.7435045,9z/data=!3m1!4b1?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/adf4e061d9f56fa774b7a21f955ead2b.jpg",
                "title": "ที่พักใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@14.762859,103.3042807,12z/data=!3m1!4b1?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-chaba.web.app/home?fbclid=IwAR3O61KUunRnW82jVqctip37rGvvgOOtG1J_Kg5k72sHkNr5PGWNPLf2Jqs"
                  }
                ]
              }
            ]
          }
        
        },

        "0150c51f2e":{
          "type": "template",
          "altText": "ทดสอบ2",
          "template": {
            "type": "carousel",
            "imageSize": "cover",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/b049e383561d52fbb5c3a6e7ac6ce575.jpg",
                "title": "ปราสาทศีขรภูมิ สุรินทร์",
                "text": "ปราสาทศีขรภูมิ หรือ ปราสาทระแงง ตั้งอยู่ อำเภอศีขรภูมิ จังหว",
                "actions": [
                  {
                    "type": "uri",
                    "label": "อ่านเพิ่มเติม",
                    "uri": "https://host-chaba.web.app/locationone"
                  },
                  {
                    "type": "message",
                    "label": "สถานที่ใกล้เคียง",
                    "text": "สถานที่ใกล้เคียง"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/260cc53f99cb82e8d68db1d64d9197da.png",
                "title": "สินค้าขึ้นชื่อของที่นี่",
                "text": "ผ้าไหมลายหนอนทอง",
                "actions": [
                  {
                    "type": "uri",
                    "label": "รายละเอียด",
                    "uri": "https://host-chaba.web.app/Productone"
                  },
                  {
                    "type": "message",
                    "label": "สินค้าอื่นๆ",
                    "text": "สินค้าอื่นๆ"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/85ecf0433a74a781116632cd8c7cefa8.jpg",
                "title": "Service",
                "text": "บริการร้านอาหาร และ ที่พัก",
                "actions": [
                  {
                    "type": "uri",
                    "label": "เลือก",
                    "uri": "https://host-chaba.web.app/serviceone"
                  },
                  {
                    "type": "message",
                    "label": "เลือกดูเพิ่มเติม",
                    "text": "เลือกดูเพิ่มเติม"
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




