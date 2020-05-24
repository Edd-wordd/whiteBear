// toggles sign in form on the landing page
$(".car").click(function () {
   $("#upBar").toggleClass("d-none");
});
// removes sign up botton after login
$(".car").click(function () {
   $(".car").addClass("d-none");
});
// toggles the success alert
$("#save-imagery").click(function () {
   $("#success-banner").toggleClass("d-flex d-none");
});
// toggles the error alert
$("#backToAnswer").click(function () {
   $("#error-banner").toggleClass("d-flex d-none");
});
// toggles the delete button
$("#customCheck1").click(function () {
   $("#delete-card").toggleClass("d-none");
});

// index.html
// checks to see if there only characters in the email input field when lets go button is clicked on sign up card
$("#letsGoIndex").click(function () {
   var checkEmail1 = $("#email_1").val().length;
   var userEmail = $("#email_1").val(); // get the value of the email inputed
   var foundYou = userEmail.indexOf("@"); //getting the index of where the '@' symbol is
   var getFirstPart = userEmail.slice(0, foundYou); //grabbing the local-part of the email that was inputed using slice

   if (checkEmail1 == 0) {
      $("#email_1").addClass("is-invalid");
   }
   differentChar = "";
   for (let i in getFirstPart) {
      if (differentChar.indexOf(getFirstPart[i]) == -1) {
         differentChar = differentChar + getFirstPart[i];
      }
   }
   if (differentChar.length < 3) {
      $("#email_1").addClass("is-invalid");
      $(".unique-mess").text("Must enter unique characters");
   } else {
      $("#email_1").addClass("is-valid");
   }

   console.log(differentChar);
});

// // checks to see if password is input field is empty on sign up card
$("#letsGoIndex").click(function () {
   var checkPass1 = $("#password_1").val().length;
   var inputedPassword = $("#password_1").val(); //grabbing the value of the password inputed.

   if (checkPass1 == 0) {
      $("#password_1").addClass("is-invalid");
   } else if (checkPass1 <= 8) {
      $("#password_1").addClass("passwordTooShort");
   } else if (newPasswordList.indexOf(inputedPassword)) {
      $(".beOriginal").text("Passwords needs to be more original");
   } else {
      $("#password_1").addClass("is-valid");
   }
});

// // checks to see if there only characters in the email input field when sign in button is clicked on login card
$("#loginPage").click(function () {
   var checkEmail2 = $("#email_2").val().length;

   if (checkEmail2 == 0) {
      $("#email_2").addClass("is-invalid");
   } else {
      $("#email_2").addClass("is-valid");
   }
});
// // checks to see if there only characters in the password input field sign in button is clicked on login card
$("#loginPage").click(function () {
   var checkPass2 = $("#password_2").val().length;

   if (checkPass2 == 0) {
      $("#password_2").addClass("is-invalid");
   } else if (checkPass2 <= 8) {
      $("#password_2").addClass("is-invalid");
   } else {
      $("#password_2").addClass("is-valid");
   }
});

// count the characters on the bottom of the cards
var maxCharacters = 240;

$("#text1").keypress(function () {
   var count = $("#text1").val().length;
   $("#countMe").text(count + "/" + maxCharacters);
   if (count == 0 || count > maxCharacters) {
      $("#nextAnswer").addClass("disabled");
      $("#countMe").addClass("text-danger");
   } else {
      $("#countMe").removeClass("text-danger");
      $("#nextAnswer").removeClass("disabled");
   }
});
// list of common passwords
var commonPassword = [
   "x002tp00",
   "x4ww5qdr",
   "x72jhhu3z",
   "xaccess2",
   "xakep1234",
   "xboxlive",
   "xcalibur",
   "xcountry",
   "xenocide",
   "xenogear",
   "xenophobia",
   "xenophobic",
   "xenophon",
   "xexeylhf",
   "xianzong",
   "xiaoping",
   "xiaoyua123",
   "xinjiang",
   "xohzi3g4",
   "xpressmusic",
   "xsvnd4b2",
   "xsw21qaz",
   "xsw23edc",
   "xthtgfirf",
   "xtutdfhf",
   "xuanzang",
   "xuanzong",
   "xufrgemw",
   "xxx12345",
   "xxxp455w0rd5",
   "xxxxxxx1",
   "xyh28af4",
   "xylophone",
   "xzsawq21",
   "y'knowwhati'msayin",
   "y'understand",
   "yachting",
   "yaglasph",
   "yakovlev",
   "yakushova",
   "yamagata",
   "yamaha12",
   "yamahar1",
   "yamahar6",
   "yamakasi",
   "yamamoto",
   "yamanashi",
   "yamashita",
   "yammering",
   "yangzhou",
   "yankeemp",
   "yankees0",
   "yankees1",
   "yankees2",
   "yankees3",
   "yankees4",
   "yankees7",
   "yankees9",
   "yankovic",
   "yanochka",
   "yanshi1982",
   "yanukovych",
   "yarborough",
   "yarbrough",
   "yardbird",
   "yardbirds",
   "yardstick",
   "yarmouth",
   "yaroslav",
   "yaroslavl",
   "yasacrac",
   "yasuhiro",
   "ybrbnbyf",
   "ybrbnf_25",
   "ybrbnjcbr",
   "ybrjkftd",
   "ybrjkftdbx",
   "ybrjkftdyf",
   "ycwvrxxh",
   "yeahbaby",
   "yeahrigh",
   "yeahright",
   "year2000",
   "year2005",
   "yearbook",
   "yearbooks",
   "yearning",
   "yearnings",
   "yekaterinburg",
   "yelburton",
   "yelena03",
   "yellow12",
   "yellow22",
   "yellowhead",
   "yellowish",
   "yellowknife",
   "yellowstone",
   "yelverton",
   "yemenite",
   "yengeese",
   "yeomanry",
   "yes90125",
   "yeshivas",
   "yessenia",
   "yesterda",
   "yesterday",
   "yesterdays",
   "yfcnfcmz",
   "yfcntymrf",
   "yfcnz123",
   "yfcnzvjz",
   "yfcnzyfcnz",
   "yfdbufnjh",
   "yfeiybrb",
   "yfgjktjy",
   "yfhrjnbrb",
   "yfltymrf",
   "yfnfitymrf",
   "yfxfkmybr",
   "ygfxbkgt",
   "yggdrasi",
   "yielding",
   "yildirim",
   "yingling",
   "yingyang",
   "yitzchak",
   "yjdbrjdf",
   "yjdjcnbf",
   "yjdsqgfhjkm",
   "yjdsqujl",
   "yjdujhjl",
   "yjhbkmcr",
   "ym3cautj",
   "yogibear",
   "yogyakarta",
   "yohannan",
   "yokohama",
   "yokosuka",
   "yokozuna",
   "yorkshir",
   "yorkshire",
   "yorktown",
   "yorkville",
   "yosemite",
   "yoshihiro",
   "youandme",
   "youlanda",
   "youngblood",
   "youngest",
   "youngman",
   "youngone",
   "youngster",
   "youngsters",
   "youngstown",
   "yourmama",
   "yourmom1",
   "yourname",
   "yourself",
   "yourselves",
   "yousuck1",
   "youthful",
   "yoyodyne",
   "ypsilanti",
   "yqlgr667",
   "yqmbevgk",
   "yr8wdxcq",
   "ytdxz2ca",
   "ytngfhjkz",
   "ytnhjufnm",
   "ytrhjvfyn",
   "ytyfdbcnm",
   "yudhoyono",
   "yugoslav",
   "yugoslavia",
   "yugoslavian",
   "yuitre12",
   "yujyd360",
   "yuletide",
   "yushchenko",
   "yvelines",
   "yvtte545",
   "yxkck878",
   "yy5rbfsc",
   "yyyyyyy1",
   "yzerman1",
   "z1234567",
   "z123456789",
   "z123456z",
   "z1x2c3v4",
   "z1x2c3v4b5",
   "z1x2c3v4b5n6m7",
   "z1z2z3z4",
   "z3cn2erv",
   "zacatecas",
   "zacharia",
   "zachariah",
   "zacharias",
   "zachary1",
   "zaharova",
   "zakamatak",
   "zalewski",
   "zalgiris",
   "zamarripa",
   "zambales",
   "zamboanga",
   "zambrano",
   "zamindar",
   "zamoyski",
   "zanesville",
   "zantopia",
   "zanzibar",
   "zapatista",
   "zaphod42",
   "zaporizhia",
   "zapruder",
   "zaq!2wsx",
   "zaq11qaz",
   "zaq12345",
   "zaq123wsx",
   "zaq12qaz",
   "zaq12wsx",
   "zaq1xsw2",
   "zaq1xsw2cde3",
   "zaqwsx123",
   "zaqwsxcde",
   "zaqwsxcderfv",
   "zaqxsw123",
   "zaqxswcde",
   "zaragoza",
   "zaratustra",
   "zarzuela",
   "zasranec",
   "zatunica",
   "zawahiri",
   "zaxscdvf",
   "zbigniew",
   "zcfvfzkexifz",
   "zcxfcnkbdf",
   "zcxfcnkbdfz",
   "zealander",
   "zealanders",
   "zebra123",
   "zechariah",
   "zeebrugge",
   "zeitgeist",
   "zeitschrift",
   "zeljeznicar",
   "zemanova",
   "zendejas",
   "zenit2011",
   "zeppelin",
   "zeringue",
   "zerocool",
   "zesyrmvu",
   "zhaozong",
   "zhejiang",
   "zhengzhou",
   "zhjckfdf",
   "zhongguo",
   "zhongshan",
   "zhongshu",
   "zhongzong",
   "zhytomyr",
   "zidane10",
   "ziegfeld",
   "zielinski",
   "zigazaga",
   "ziggy123",
   "zildjian",
   "zillions",
   "zimbabwe",
   "zimbabwean",
   "zimmerma",
   "zimmerman",
   "zimmermann",
   "zinedine",
   "zinfandel",
   "zinoviev",
   "zionists",
   "zipdrive",
   "zippy123",
   "zirconia",
   "zirconium",
   "zjses9evpa",
   "zldej102",
   "zoidberg",
   "zolushka",
   "zombie13",
   "zookeeper",
   "zoological",
   "zoologist",
   "zooplankton",
   "zootsuit",
   "zoroaster",
   "zoroastrian",
   "zoroastrianism",
   "zoroastrians",
   "zorro123",
   "zpflhjn1",
   "zqjphsyf6ctifgu",
   "zrjdktdf",
   "zse45rdx",
   "zse4xdr5",
   "zsecyus56",
   "zucchero",
   "zucchini",
   "zuckerberg",
   "zuckerman",
   "zukowski",
   "zulfikar",
   "zulfiqar",
   "zvonareva",
   "zweibrucken",
   "zx123456",
   "zx123456789",
   "zxasqw12",
   "zxc12345",
   "zxc123456",
   "zxc123zxc",
   "zxcasd123",
   "zxcasdqw",
   "zxcasdqwe",
   "zxcasdqwe123",
   "zxcqweasd",
   "zxcv1234",
   "zxcv4321",
   "zxcvasdf",
   "zxcvb123",
   "zxcvb1234",
   "zxcvb12345",
   "zxcvbasdfg",
   "zxcvbn12",
   "zxcvbn123",
   "zxcvbn123456",
   "zxcvbnm.",
   "zxcvbnm1",
   "zxcvbnm12",
   "zxcvbnm123",
   "zxcvbnm123456789",
   "zxcvbnma",
   "zxcvbnmm",
   "zxcvbnmz",
   "zxcvfdsa",
   "zxcvvcxz",
   "zz123456",
   "zz8807zpl",
   "zzxxccvv",
   "zzzxxxccc",
   "zzzzxxxx",
   "zzzzzzz1",
];

// shorthand syntax to filter through the common passwords and return the passwords that are larger than 8 charaters
const newPasswordList = commonPassword.filter((items) => {
   return items.length > 8;
});
console.log(newPasswordList);

// $("#letsGoIndex").click(function () {
//    var inputedPassword = $("#password_1").val(); //grabbing the value of the password inputed.

$("#letsGoIndex").click(function () {
   var userEmail = $("#email_1").val(); // get the value of the email inputed
   var foundYou = userEmail.indexOf("@"); //getting the index of where the '@' symbol is
   var getFirstPart = userEmail.slice(0, foundYou); //grabbing the local-part of the email that was inputed using slice
   var inputedPassword = $("#password_1").val(); //grabbing the value of the password inputed.

   if (inputedPassword.indexOf(getFirstPart) > -1) {
      //condition to check if password inputed is the same as the local-part of email
      $(".error-message").text("Email can not be password, please try again");
      $("#password_1").addClass("btn-outline-danger");
   } else {
      function addPadding(num) {
         if (String(num).length < 2) {
            return "0" + num.toString();
         } else {
            return num;
         }
      }

      var todaysDate = new Date();
      console.log(todaysDate);
      //grabbing each part of the date from the date object using dot notation
      var todaysYear = todaysDate.getYear() - 100;
      console.log(todaysYear);

      var todaysMonth = todaysDate.getMonth() + 1; //needs to add one because it is zero indexed
      console.log(todaysMonth);
      var todaysDay = todaysDate.getDate();
      console.log(todaysDay);
      var todaysHour = todaysDate.getHours();
      console.log(todaysHour);
      var todaysMin = todaysDate.getMinutes();
      console.log(todaysMin);
      var todaysSec = todaysDate.getSeconds();
      console.log(todaysSec);
      var todaysMilli = todaysDate.getMilliseconds();
      console.log(todaysMilli);
      var allTodaysDate =
         "" + //turns it into a readable string
         addPadding(todaysYear) +
         addPadding(todaysMonth) +
         addPadding(todaysDay) +
         addPadding(todaysHour) +
         addPadding(todaysMin) +
         addPadding(todaysSec);
      console.log(allTodaysDate);

      //create a random number and concatenate with milli seconds var
      var getNumber = Math.floor(Math.random() * 1000);
      console.log(getNumber);
      var idCreated = "" + todaysMilli + getNumber;
      console.log(idCreated);

      var createdId = {
         _id: idCreated,
         email: userEmail,
         password: inputedPassword,
         createdOn: allTodaysDate,
      };

      console.log(createdId);
   }
});

var maxCharacters = 240;

$("#imagery-create").keypress(function () {
   var count = $("#imagery-create").val().length;
   $("#countMe2").text(count + "/" + maxCharacters);
   if (count == 0 || count > maxCharacters) {
      $("#save-imagery").addClass("disabled");
      $("#countMe2").addClass("text-danger");
   } else {
      $("#countMe2").removeClass("text-danger");
      $("#save-imagery").removeClass("disabled");
   }
});

$("#save-imagery").click(function () {
   var userImagery = $("#imagery-create").val(); // get the value of the text inputed

   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }

   var todaysDate = new Date();
   console.log("todaysDate", todaysDate);
   //grabbing each part of the date from the date object using dot notation
   var todaysYear = todaysDate.getYear() - 100;
   console.log(todaysYear);

   var todaysMonth = todaysDate.getMonth() + 1; //needs to add one because it is zero indexed
   console.log(todaysMonth);
   var todaysDay = todaysDate.getDate();
   console.log(todaysDay);
   var todaysHour = todaysDate.getHours();
   console.log(todaysHour);
   var todaysMin = todaysDate.getMinutes();
   console.log(todaysMin);
   var todaysSec = todaysDate.getSeconds();
   console.log(todaysSec);
   var todaysMilli = todaysDate.getMilliseconds();
   console.log(todaysMilli);
   var allTodaysDate =
      "" + //turns it into a readable string
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   console.log(allTodaysDate);

   //create a random number and concatenate with milli seconds var
   var getNumber = Math.floor(Math.random() * 1000);
   console.log(getNumber);
   var idCreated = "" + todaysMilli + getNumber;
   console.log(idCreated);

   var imageryId = {
      _id: idCreated,
      imagery: `?x=${encodeURIComponent(userImagery)}`,
      answer: `?x=${encodeURIComponent(
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->"
      )}`,
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: allTodaysDate,
      lastAttemptedOn: allTodaysDate, // same as createdOn
   };
   console.log(imageryId);
});
