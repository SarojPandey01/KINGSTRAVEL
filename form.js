var country = document.getElementById("country").selectedOptions[0].value;
var time = document.getElementById("time").value;
var package = document.getElementById("package").selectedOptions[0].value;
var transport = document.getElementById("transport").selectedOptions[0].value;
var duration = document.getElementById("duration").selectedOptions[0].value;
var travelaim = document.getElementById("travelaim").selectedOptions[0].value;
// var form = document.getElementById("myForm");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkValidation();
// });

function checkValidation() {
  var name1 = document.getElementById("asdf").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  // let date = document.getElementById("date").value;
  // console.log(typeof "ss");
  let nop = document.getElementById("nop").value;
  let text = document.getElementById("text").value;

  if (name1 === "") {
    alert("Name Cannot Be Empty");
  }

  if (phone.toString().length != 10) {
    alert("Phone number must be 10 digits");
  }
  if (address == "") {
    alert("Please Enter address");
  }
  if (checkforattherate(email) == undefined) {
    alert("invalid email");
  }
  if (nop == "") {
    alert("Enter The Number of people");
  }
  if (text == "") {
    alert("Please Type the description");
  } else {
  }
}
// console.log(document.forms["myForm"]["name"]);
// var name1 = document.forms["myForm"]["name"].value;
// console.log(name1);
//   if (phone.length < 10 || phone.length > 10) {
//     alert("Phone number must be 10 digits");
//   }
//   if (!checkforattherate(email)) {
//     alert("invalid email");
//   }
//   return false;
// }

function checkforattherate(s) {
  for (i = 0; i < s.length; i++) {
    if (s[i] == "@") {
      return true;
    }
  }
}

let d = new Date(2028, 1, 11, 22, 07, 30, 99);
let any = d.getTime();
let now = Date.now();

