// const checkage = () => {
//   var birthdateInput = document.getElementById("birthdate").value;
//   var ageparagraph = document.getElementById("age");
//   var dateofbirth = new Date(birthdateInput);
//   var birthyear = dateofbirth.getFullYear();
//   var birthmonth = dateofbirth.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index (0 for January)
//   var birthdate = dateofbirth.getDate();

//   console.log(dateofbirth);

//   //   if (birthdateInput === "") {
//   //     return (ageparagraph.innerHTML = `Please Enter your date of birth`);
//   //   }

//   //   const TodayDate = new Date();
//   //   const Todayyear = TodayDate.getFullYear();
//   //   const Todaymonth = TodayDate.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index (0 for January);
//   //   const Todaydate = TodayDate.getDate();

//   //   ageparagraph.innerHTML = `Your age is ${
//   //     birthmonth > Todaymonth ? Todayyear - birthyear - 1 : Todayyear - birthyear
//   //   } years, ${
//   //     birthmonth < Todaymonth
//   //       ? Math.abs(Todaymonth - birthmonth - 12)
//   //       : Math.abs(Todaymonth - birthmonth)
//   //   } months, and ${Math.abs(Todaydate - birthdate)} days.`;
// };

function calculateAge() {
  var birthdateInput = document.getElementById("birthdate").value;
  var birthdate = new Date(birthdateInput);
  var today = new Date();

  var age = today.getFullYear() - birthdate.getFullYear();
  var monthDiff = today.getMonth() - birthdate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  var ageInMonths = (today.getMonth() - birthdate.getMonth() + 12) % 12;
  var ageInDays = today.getDate() - birthdate.getDate();
  if (ageInDays < 0) {
    var daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageInDays = daysInLastMonth - birthdate.getDate() + today.getDate();
    ageInMonths--;
  }

  var resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Your age is " +
    age +
    " years, " +
    ageInMonths +
    " months, and " +
    ageInDays +
    " days.";
}
