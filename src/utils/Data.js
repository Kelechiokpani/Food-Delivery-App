import I1 from "../img/i1.png"; 
import F1 from "../img/f1.png"; 
import C3 from "../img/c3.png"; 
import Fi1 from "../img/fi1.png"; 
import Bg2 from  "../img/bg2.jpg"
import Bg3 from  "../img/bg3.jpg"
import Bg from  "../img/bg.jpg"
// menu

// soup
import sp1 from "../img/sp1.jpg"
import sp2 from "../img/sp2.jpg"
import sp3 from "../img/sp3.jpg"
import sp4 from "../img/sp4.jpg"
import sp5 from "../img/sp5.jpg"
import sp6 from "../img/sp6.jpg"
import sp7 from "../img/sp7.jpg"
import sp8 from "../img/sp8.jpg"

// desert
import ds1 from "../img/s1.jpg"
import ds2 from "../img/s2.jpg"
import ds3 from "../img/s3.jpg"
import ds4 from "../img/s4.jpg"

// Rice
import R1 from "../img/R1.jpg"
import R2 from "../img/R2.jpg"
import R3 from "../img/R3.jpg"
import R4 from "../img/R4.jpg"
import R5 from "../img/R5.jpg"



// static image data on landing page 
export const heroData = [
    {
        id : 1,
        name: "Ice Cream",
        description : "Chocolate & Vanilla",
        price : "7.80",
        imageSrc : I1

    },
     {
        id : 2,
        name: "Strawberries",
        description : "Fresh Strawberries ",
        price : "10.23",
        imageSrc : F1

    },
    {
        id : 3,
        name: "Chiken kebab",
        description : "Mixed Kebab Plate",
        price : "13.20",
        imageSrc : C3

    },
    {
        id : 4,
        name: "Fish sauce",
        description : "Mixed Fixed Sauce",
        price : "10.80",
        imageSrc : Fi1

    },

]
// categories where admin can make possible upload to from clinet side
export const categories = [
    {
        id : 1,
        name: "Chicken",
        urlParamName: "chicken",
        des:"chicken sauce & spiced salad"
    },
    {
        id : 2,
        name: "Curry",
        urlParamName: "curry"
    },
    {
        id : 3,
        name: "Rice",
        urlParamName: "rice"
    },
    {
        id : 4,
        name: "Fish",
        urlParamName: "fish"
    },
    {
        id : 5,
        name: "Fruits",
        urlParamName: "fruits"
    },
     {
        id : 6,
        name: "Ice Creams",
        urlParamName: "icecreams"
    }, 
   
    {
        id : 7,
        name: "Soft Drinks",
        urlParamName: "drinks"
    },
    {
        id : 8,
        name: "Desert",
        urlParamName: "desert"
    },

] 
// carousel
export const reuseable = [
   {
    imgsrc1 : Bg,
    pHeader1: "Home Service",
    pBody1:"For the convenience of our ever busy customers, we offer an Office/Home delivery service with a quick response time; we do not keep our customers waiting for long. We encourage our customers to call our home delivery direct lines in the ``contact us`` area of our web site to have their delicious meals and cakes delivered at their door steps in no time. Customers can also use this service to surprise their loved ones on occasions of birthdays, valentines, anniversaries etc. All you need to do is just call, order and give us the address and we will surprise your recipient to your delight.",
    imgsrc2 : Bg2,
    imgsrc3 : Bg3,
    pHeader2: "Outdoor Service",
    pBody2: "We offer outdoor catering services to the delight of our Clients and we brighten up their occasion with our unique event management services. With our seasoned, skilled and well cultured event planning and management team, we cater for: Your Anniversaries , Group Breakfast, Christmas Menu, Recognition parties, Tea Reception, Packet Meals, Buffet, Dinners, Luncheons, Brunch, Birthdays. Weddings, Holiday Parties, Bereavements, Anniversaries, Fundraisers, Seminars, Dedications, etcetera. Our outdoor service products are not limited to our in-house (Counter) products.",
   },
//    {
//        imgsrc3 : Bg2,
//        pHeader3 : "Indoor Service",
//        pBody3:"We have imbibed a service culture that offers every customer the chance to conveniently site and order their meals from fresh and hygienically displayed array of products. These products are served either as ``Take aways`` or as ``Eat Ins`` in a serene, clean and fantastically ambient Environment by well-trained friendly and courteous service personnel. A visit to any of our eateries, the conveniences, a taste of our products and a touch of our friendly service will give you a feel of international standard. For our ever busy customers, we offer an Office/Home delivery service with a quick response time."
//    },

   
]

// Menu products
export const soup = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: 1400,
      imageSrc: sp1,
      imageAlt: '.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 1900,
      imageSrc: sp2,
      imageAlt: '.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 2300,
      imageSrc: sp3,
      imageAlt: '.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 2400,
      imageSrc: sp4,
      imageAlt: '.',
    }, {
      id: 5,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 3200,
      imageSrc: sp5,
      imageAlt: '.',
    },{
      id: 6,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 1870,
      imageSrc: sp6,
      imageAlt: '.',
    },{
      id: 7,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 1560,
      imageSrc: sp7,
      imageAlt: '.',
    },{
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 2100,
      imageSrc: sp8,
      imageAlt: '.',
    },
  
  ]
export const desert = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: 1400,
      imageSrc: ds1,
      imageAlt: '.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 1900,
      imageSrc: ds2,
      imageAlt: '.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 2300,
      imageSrc: ds3,
      imageAlt: '.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 2400,
      imageSrc: ds4,
      imageAlt: '.',
    },
  
  ]
export const rice = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: 1400,
      imageSrc: R1,
      imageAlt: '.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 1900,
      imageSrc: R2,
      imageAlt: '.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 2300,
      imageSrc: R3,
      imageAlt: '.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 2400,
      imageSrc: R4,
      imageAlt: '.',
    },
  
  ]
