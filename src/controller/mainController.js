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
      "0150c51f2e":"พิพิธภัณฑสถานแห่งชาติสุรินทร์",
      "01518a9413":"หมู่บ้านผ้าไหมยกทองโบราณบ้านท่าสว่าง",
      "01518ccb72":"ศาลหลักเมือง",
      "01518d2194":"ศูนย์คชศึกษา",
      "015192bcd0":"วัดบูรพาราม",
      "015194f4d6":"อ่างเก็บน้ำห้วยเสนง"
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
                "thumbnailImageUrl": "https://www.img.in.th/images/db57fe354c70eaaf06811aa1598b2395.jpg",
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
                    "uri": "https://wed-chaba.web.app/?fbclid=IwAR0NgCg9telUfC-SAmlqYDY5SKag391Udhcqy-VTCGc847GSiAvZ7zg2QPI"
                  }
                ],
                "imageBackgroundColor": "#FFFFFF"
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/cda8f709dcb0f941a138dc739100139a.jpg",
                "title": "สินค้าOTOP ",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/กาละแมสดศรีขรภูมิ+ตราปราสาทเดียว/@14.9448126,103.7849399,17z/data=!3m1!4b1!4m5!3m4!1s0x3117425092567181:0x6de552c03f882906!8m2!3d14.9448126!4d103.7871286"
                  },
                  {
                    "type": "uri",
                    "label": "ดูเพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/21e5ad2845ae19a56c247570c8e692f9.jpg",
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
                    "uri": "https://wed-chaba.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/380522de0c844d9920abfd3d9f6143de.jpg",
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
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ที่พัก"
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
                "thumbnailImageUrl": "https://www.img.in.th/images/5b5dad3111927935405bdfbe51eea0a5.jpg",
                "title": "ปราสาทช่างปี่",
                "text": "Chang Bei Castle",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ปราสาทช่างปี่/@14.9299002,103.6997212,17z/data=!3m1!4b1!4m5!3m4!1s0x31175ce893229689:0xce09a6c00f7150a7!8m2!3d14.9299002!4d103.7019099"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/445cf0f060cf0674ec7c384989976293.jpg",
                "title": "ร้านอาหารใกล้ปราสาทช่างปี่",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.9298975,103.6668903,13z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/96676846225512a2959df85de45f3fee.jpg",
                "title": "สินค้า OTOP ",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ศูนย์แสดงและจำหน่ายสินค้าโอทอปสุรินทร์/@14.8842927,103.4883787,15.7z/data=!4m12!1m6!3m5!1s0x3119e3b46a998e87:0x3b44016a0ba95dea!2z4Lio4Li54LiZ4Lii4LmM4LmB4Liq4LiU4LiH4LmB4Lil4Liw4LiI4Liz4Lir4LiZ4LmI4Liy4Lii4Liq4Li04LiZ4LiE4LmJ4Liy4LmC4Lit4LiX4Lit4Lib4Liq4Li44Lij4Li04LiZ4LiX4Lij4LmM!8m2!3d14.8821578!4d103.4938808!3m4!1s0x3119e3b46a998e87:0x3b44016a0ba95dea!8m2!3d14.8821578!4d103.4938808?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/7383c3f8d546251094ca426ee49a6fd5.jpg",
                "title": "ที่พักใกล้ ปราสาทช่างปี่",
                "text": "Hotel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@14.9299002,103.6997212,17z?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ที่พัก"
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
                "thumbnailImageUrl": "https://www.img.in.th/images/7a0c2ca80b59b810d680b6ad9fb8ba3a.jpg",
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
                    "uri": "https://wed-chaba.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/50c0feb29e70a77092efdc122edbaab2.jpg",
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
                    "uri": "https://wed-chaba.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/6873505993358c1cb3bc200288a9ff49.jpg",
                "title": "สินค้า OTOP ",
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
                "thumbnailImageUrl": "https://www.img.in.th/images/3bb4c5b6b8f986a97363b6541cfa2fb5.jpg",
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
                    "uri": "https://wed-chaba.web.app/ที่พัก"
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
                "thumbnailImageUrl": "https://www.img.in.th/images/a5739fb0964db02293f3aa840b128578.md.jpg",
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
                    "uri": "https://wed-chaba.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/3e15c2b41cbe35076ce5f4552823e7e8.jpg",
                "title": "ร้านอาหารใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.762859,103.3042807,12z"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/b8d74a8620a6a7ed8e828e5c9f3f22ec.jpg",
                "title": "สินค้า OTOP ",
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
                    "uri": "https://wed-chaba.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/c87f6e9d40b5ee4a2f5aa272864eb2a8.jpg",
                "title": "ที่พักใกล้วนอุทยานแห่งชาติพนมสวาย",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/โรงแรม+สวนป่ารีสอร์ท/@14.764519,103.3032507,12z/data=!4m12!1m2!2m1!1z4LmC4Lij4LiH4LmB4Lij4Lih!3m8!1s0x3119e36a8ca8a6fb:0xbb373c88ca2954ed!5m2!4m1!1i2!8m2!3d14.8507839!4d103.4760928!15sChLguYLguKPguIfguYHguKPguKGSAQxyZXNvcnRfaG90ZWw"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ที่พัก"
                  }
                ]
              }
            ]
          }
        
        },

        "0150c51f2e":{
          "type": "template",
          "altText": "พิพิธภัณฑสถานแห่งชาติสุรินทร์",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/5d67cdffb43bb30793bdd6f84030dfbb.md.jpg",
                "title": "พิพิธภัณฑสถานแห่งชาติสุรินทร์",
                "text": "Surin National Museum",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/พิพิธภัณฑ์สถานแห่งชาติสุรินทร์/@14.8483478,103.4716596,17z/data=!3m1!4b1!4m5!3m4!1s0x3119e36cae4dcf7f:0xe4e0953081e3c720!8m2!3d14.8483585!4d103.4738515?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/6faa274c235a7a7c94d3b3ba180c3dca.jpg",
                "title": "ร้านอาหารใกล้พิพิธภัณฑสถานแห่งชาติ",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.8483478,103.4716596,17z/data=!3m1!4b1?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/73aaeebc0606687efc86d3e8f283783f.jpg",
                "title": "สินค้า OTOP ",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ร้านกุนเชียง+5+ดาว+สาขา+1/@14.7997869,103.3367343,9.69z/data=!4m9!1m2!2m1!1z4LiC4Lit4LiH4Lid4Liy4LiB4Lie4Li04Lie4Li04LiY4Lig4Lix4LiT4LiR4Liq4LiW4Liy4LiZ4LmB4Lir4LmI4LiH4LiK4Liy4LiV4Li04Liq4Li44Lij4Li04LiZ4LiX4Lij4LmM!3m5!1s0x3119e3b665f76c97:0x5f1a9836f74a7da2!8m2!3d14.8846956!4d103.4905672!15sCmnguILguK3guIfguJ3guLLguIHguJ7guLTguJ7guLTguJjguKDguLHguJPguJHguKrguJbguLLguJnguYHguKvguYjguIfguIrguLLguJXguLTguKrguLjguKPguLTguJnguJfguKPguYxacCJu4LiC4Lit4LiHIOC4neC4suC4gSDguJ7guLTguJ7guLTguJjguKDguLHguJPguJHguKrguJbguLLguJkg4LmB4Lir4LmI4LiHIOC4iuC4suC4leC4tCDguKrguLjguKPguLTguJnguJfguKPguYySAQ5zb3V2ZW5pcl9zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOWmVVNVVha2gzRUFF?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/8dfeaba3a031f2fabde77daa9179928c.jpg",
                "title": "ที่พักใกล้พิพิธภัณฑสถานแห่งชาติสุรินทร์",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@14.8483471,103.4563387,14z/data=!3m1!4b1?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://wed-chaba.web.app/ที่พัก"
                  }
                ]
              }
            ]
          }
        },
        "01518a9413":{
          "type": "template",
          "altText": "หมู่บ้านผ้าไหมยกทองโบราณบ้านท่าสว่าง",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/e2917ce75de25fe75f10098b25ca55cb.jpg",
                "title": "หมู่บ้านผ้าไหมยกทองโบราณบ้านท่าสว่าง",
                "text": "Ban Tha Sawang",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/หมู่บ้านทอผ้าไหมบ้านท่าสว่าง/@14.9557246,103.4698883,17z/data=!3m1!4b1!4m5!3m4!1s0x3119e143b3a894d1:0x17d3891badc493a8!8m2!3d14.9557246!4d103.472077"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/8fa22240e191b2c39fb8ed521d1e8e1a.jpg",
                "title": "ร้านอาหารใกล้บ้านท่าสว่าง",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.9557244,103.4633222,15z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/2faee6e84020f7ca0e9d05b8acfff9be.jpg",
                "title": "สินค้า O-TOP",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/Otop+นวัตวิถี+บ้านท่าสว่าง/@14.9557246,103.4698883,17z/data=!4m12!1m6!3m5!1s0x3119e143b3a894d1:0x17d3891badc493a8!2z4Lir4Lih4Li54LmI4Lia4LmJ4Liy4LiZ4LiX4Lit4Lic4LmJ4Liy4LmE4Lir4Lih4Lia4LmJ4Liy4LiZ4LiX4LmI4Liy4Liq4Lin4LmI4Liy4LiH!8m2!3d14.9557246!4d103.472077!3m4!1s0x0:0x7457e299bd3cb10d!8m2!3d14.9564848!4d103.4725692"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/5864f1ac381353df0598f1bcb4c82fab.jpg",
                "title": "ที่พักใกล้บ้านท่าสว่าง",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@14.9557139,103.4020362,12z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ที่พัก"
                  }
                ]
              }
            ]
          }
        },
        "01518ccb72":{
          "type": "template",
          "altText": "ศาลหลักเมือง",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1e5cec3fdab46441b003cbc2158ec06d.jpg",
                "title": "ศาลหลังเมือง",
                "text": "City Court",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ศาลหลักเมือง+สุรินทร์/@14.8845663,103.4869965,17z/data=!3m1!4b1!4m5!3m4!1s0x3119e3b65a616233:0x5b25ef07fd4a9766!8m2!3d14.8846162!4d103.4892016"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/08a2501cd892e26420d3d30cbd633fa3.jpg",
                "title": "ร้านอาหารใกล้ศาลหลังเมือง",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.8845663,103.4869965,17z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/8828d5181ddf4c29e91b43fc5f358251.jpg",
                "title": "สินค้า O-TOP",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ร้านกุนเชียง+5+ดาว+สาขา+1/@14.8851634,103.4895368,17z/data=!4m13!1m7!3m6!1s0x3119e3b5e12359d1:0xc93c22c02c9435e2!2z4LiL4Lit4LiiIOC4p-C4seC4lOC4muC4ueC4o-C4nuC4suC4o-C4suC4oSDguJXguLPguJrguKUg4LmD4LiZ4LmA4Lih4Li34Lit4LiHIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4quC4uOC4o-C4tOC4meC4l-C4o-C5jCDguKrguLjguKPguLTguJnguJfguKPguYwgMzIwMDA!3b1!8m2!3d14.8851634!4d103.4917255!3m4!1s0x3119e3b665f76c97:0x5f1a9836f74a7da2!8m2!3d14.8846956!4d103.4905672"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/de5c814ef53c61f381d33e1833e01988.jpg",
                "title": "ที่พักใกล้ศาลหลังเมือง",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@14.8845663,103.4869965,17z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ที่พัก"
                  }
                ]
              }
            ]
          }
        },
        "01518d2194":{
          "type": "template",
          "altText": "ศูนย์คชศึกษา",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/ce1940a984c47df351f04d2161c50f54.jpg",
                "title": "พิพิธภัณฑ์ช้าง ศูนย์คชศึกษา ",
                "text": "Elephant Museum",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/วัดช่างปี่/@14.9303968,103.6951879,17z/data=!3m1!4b1!4m5!3m4!1s0x31175cedfb07e1cd:0x59d6c90f89978a33!8m2!3d14.9303968!4d103.6973766"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/a9bb7f88feb28922fe4d5f772ce80cc6.jpg",
                "title": "ร้านอาหารใกล้ศูนย์คชศึกษา ",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@15.2661564,103.4950218,17z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/d8d2dfef1327d78ccb9beea956868a1c.jpg",
                "title": "สินค้า O-TOP",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ศูนย์คชศึกษา/@15.2661564,103.4950218,17z/data=!3m1!4b1!4m5!3m4!1s0x3119d6878630d9cd:0x5baf5b5edad25b1d!8m2!3d15.2661564!4d103.4972105"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/40513a8d43a855919f9e1e66f9f41bae.jpg",
                "title": "ที่พักใกล้ศูนย์คชศึกษา ",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@15.2661455,103.4271697,12z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ที่พัก"
                  }
                ]
              }
            ]
          }
        },
        "015192bcd0":{
          "type": "template",
          "altText": "วัดบูรพาราม",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1b3954b8f21abc8d3353b8c8aac4522c.jpg",
                "title": "วัดบูรพาราม",
                "text": "Burapharam Temple",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/วัดบูรพาราม/@14.8851634,103.4895368,17z/data=!4m13!1m7!3m6!1s0x3119e3b5e12359d1:0xc93c22c02c9435e2!2z4LiL4Lit4LiiIOC4p-C4seC4lOC4muC4ueC4o-C4nuC4suC4o-C4suC4oSDguJXguLPguJrguKUg4LmD4LiZ4LmA4Lih4Li34Lit4LiHIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4quC4uOC4o-C4tOC4meC4l-C4o-C5jCDguKrguLjguKPguLTguJnguJfguKPguYwgMzIwMDA!3b1!8m2!3d14.8851634!4d103.4917255!3m4!1s0x3119e3b5b169b8a1:0x3615d85ccdf237d7!8m2!3d14.8844173!4d103.4930797"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/f46848b2aa559b55146f736e1dbfa9b4.jpg",
                "title": "ร้านอาหารใกล้วัดบูรพาราม",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหาร/@14.8851634,103.4895368,17z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1a56f0ba44724237e839f4aadf1ee964.jpg",
                "title": "สินค้า O-TOP",
                "text": "Product",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/ร้านกุนเชียง+5+ดาว+สาขา+1/@14.8851634,103.4895368,17z/data=!4m13!1m7!3m6!1s0x3119e3b5e12359d1:0xc93c22c02c9435e2!2z4LiL4Lit4LiiIOC4p-C4seC4lOC4muC4ueC4o-C4nuC4suC4o-C4suC4oSDguJXguLPguJrguKUg4LmD4LiZ4LmA4Lih4Li34Lit4LiHIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4quC4uOC4o-C4tOC4meC4l-C4o-C5jCDguKrguLjguKPguLTguJnguJfguKPguYwgMzIwMDA!3b1!8m2!3d14.8851634!4d103.4917255!3m4!1s0x3119e3b665f76c97:0x5f1a9836f74a7da2!8m2!3d14.8846956!4d103.4905672"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/สินค้า"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/a6b8662314afeda7e3c1700660ee4fdc.jpg",
                "title": "ที่พักใกล้วัดบูรพาราม",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/โรงแรม/@14.8851634,103.4895368,17z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ที่พัก"
                  }
                ]
              }
            ]
          }
        },
        "015194f4d6":{
          "type": "template",
          "altText": "อ่างเก็บน้ำห้วยเสนง",
          "template": {
            "type": "carousel",
            "columns": [
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/424e89e8540c657bf2c7735ddab1b2d1.jpg",
                "title": "อ่างเก็บน้ำห้วยเสนง",
                "text": "Huai Senong Reservoir",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/place/อ่างเก็บน้ำห้วยเสนง/@14.802297,103.4634526,13z/data=!4m9!1m2!2m1!1z4Lit4LmI4Liy4LiH4LmA4LiB4LmH4Lia4LiZ4LmJ4Liz4Lir4LmJ4Lin4Lii4LmA4Liq4LiZ4LiHIOC4quC4uOC4o-C4tOC4meC4l-C4o-C5jA!3m5!1s0x3119d8784366e127:0xf16bd5e2e91ce917!8m2!3d14.811796!4d103.4907618!15sClLguK3guYjguLLguIfguYDguIHguYfguJrguJnguYnguLPguKvguYnguKfguKLguYDguKrguJnguIcg4Liq4Li44Lij4Li04LiZ4LiX4Lij4LmMWlYiVOC4reC5iOC4suC4h-C5gOC4geC5h-C4muC4meC5ieC4syDguKvguYnguKfguKIg4LmA4Liq4LiZ4LiHIOC4quC4uOC4o-C4tOC4meC4l-C4o-C5jJIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSSmNuTmhhMDVCRUFF"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/1b457361fb65361dd2dfa5cbffb73e09.jpg",
                "title": "ร้านอาหารใกล้อ่างเก็บน้ำ        ห้วยเสนง",
                "text": "Restaurant",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ร้านอาหารอ่างเก็บน้ําห้วยเสนง+/@14.8022811,103.4634525,13z/data=!3m1!4b1?hl=th"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่มเติม",
                    "uri": "https://host-test-19838.web.app/ร้านอาหาร"
                  }
                ]
              },
              {
                "thumbnailImageUrl": "https://www.img.in.th/images/6361193d3d3263b6d1ff1f4b7ef673eb.jpg",
                "title": "ที่พักใกล้อ่างเก็บน้ำห้วยเสนง",
                "text": "Hostel",
                "actions": [
                  {
                    "type": "uri",
                    "label": "ที่ตั้ง",
                    "uri": "https://www.google.com/maps/search/ที่พักใกล้อ่างเก็บน้ำห้วยเสนง/@14.8687375,103.4683057,13z/data=!3m1!4b1"
                  },
                  {
                    "type": "uri",
                    "label": "เพิ่ม้ติม",
                    "uri": "https://host-test-19838.web.app/ที่พัก"
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
const { linkSync } = require('fs');

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




