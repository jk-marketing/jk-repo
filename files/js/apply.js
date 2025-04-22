// apply.js
// const data = {

// }
// const loanAmount = 0;
// const email = "";
// const phone = "";
// const last4ssn = "";
// const firstName = "";
// const lastname = "";
// const birthDate = "";
// const zipcode="";
// const streetAddress="";
// const state="";
// const city="";
// const timeOfResidence="";
// const ownerOrRented="";
// const sourceOfIncome="";
// const monthlyIncome="";
// const nextPayDate="";
// const employerName="";
// const jobTitle="";
// const workPhone="";
// const howOftenPaid="";
// const howPayCheckIsReceived="";
// const bankRoutingNumber="";
// const bankName="";
// const accountNumber="";
// const accountType="";
const data = {
  bG9hbkFtb3VudA: "", // loanAmount
  ZW1haWw: "", // email
  cGhvbmU: "", // phone
  // bGFzdDRzc24: "", // last4ssn
  Zmlyc3ROYW1l: "", // firstName
  bGFzdE5hbWU: "", // lastName
  // YmlydGhEYXRl: "", // birthDate
  emlwY29kZQ: "", // zipcode
  c3RyZWV0QWRkcmVzcw: "", // streetAddress
  c3RhdGU: "", // state
  Y2l0eQ: "", // city
  // dGltZU9mUmVzaWRlbmNl: "", // timeOfResidence
  // b3duZXJPclJlbnRlZA: "", // ownerOrRented
  // c291cmNlT2ZJbmNvbWU: "", // sourceOfIncome
  // d328dh39jd927d29u2d29u: "", // employedForMonths
  // bW9udGhseUluY29tZQ: "", // monthlyIncome
  // bmV4dFBheURhdGU: "", // nextPayDate
  // ZW1wbG95ZXJOYW1l: "", // employerName
  // am9iVGl0bGU: "", // jobTitle
  // d29ya1Bob25l: "", // workPhone
  // aG93T2Z0ZW5QYWlk: "", // howOftenPaid
  // aG93UGF5Q2hlY2tJc1JlY2VpdmVk: "", // howPayCheckIsReceived
  // YmFua1JvdXRpbmdOdW1iZXI: "", // bankRoutingNumber
  // YmFua05hbWU: "", // bankName
  // YWNjb3VudFR5cGU: "", // accountType
  // aWREZXRhaWxz: "", // idDetails
  // aWRJc3N1aW5nU3RhdGU: "", // idIssuingState
  // Y3JlZGl0U2NvcmU: "", // creditScore
  // c3Nu: "", // ssn
};

const params = new URLSearchParams(window.location.search);

// Populate form fields if they exist in URL
if (params.has("first_name")) {
  document.getElementById("id_field_first_name").value =
    params.get("first_name");
}

if (params.has("last_name")) {
  document.getElementById("id_field_last_name").value = params.get("last_name");
}

if (params.has("zip")) {
  document.getElementById("id_field_zip").value = params.get("zip");
}

// Script 1: Update displaySpan based on select change
const select = document.getElementById("id_field_requested_amount");
const displaySpan = document.querySelector(".kWGRmg");

select.addEventListener("change", () => {
  displaySpan.textContent = select.options[select.selectedIndex].text;
  data.bG9hbkFtb3VudA = select.value;
});
// Script 1: Update displaySpan based on select change
const stateSelect = document.getElementById("id_field_state");
const stateDisplaySpan = document.querySelector(".kWGRmgS");
stateSelect.addEventListener("change", () => {
  validateForm(); // Check validity of prefilled data
  const selectedOption = stateSelect.options[stateSelect.selectedIndex].text;
  stateDisplaySpan.textContent = selectedOption;
  const stateContainer = document.getElementById("state-field-container");
  stateContainer.classList.add("B0A4Qg");
  data.c3RhdGU = selectedOption;
});

// const timeOfResidenceSelect = document.getElementById(
//   "id_field_address_length_months"
// );
// const timeOfResidenceDisplaySpan = document.querySelector(".kWGRmgR");
// timeOfResidenceSelect.addEventListener("change", () => {
//   const selectedOption =
//     timeOfResidenceSelect.options[timeOfResidenceSelect.selectedIndex].text;
//   timeOfResidenceDisplaySpan.textContent = selectedOption;
//   const timeOfResidenceContainer = document.getElementById(
//     "time-of-residence-field-container"
//   );
//   timeOfResidenceContainer.classList.add("B0A4Qg");
//   data.dGltZU9mUmVzaWRlbmNl = selectedOption;
// });
// // own or rented
// // const timeOfResidenceSelect = document.getElementById(
// //     "id_field_address_length_months"
// //   );
// const ownerOrRentedSelect = document.getElementById("id_field_own_or_rent");
// const ownerOrRented = document.querySelector(".kWGRmgRR");
// ownerOrRentedSelect.addEventListener("change", () => {
//   const selectedOption =
//     ownerOrRentedSelect.options[ownerOrRentedSelect.selectedIndex].text;
//   ownerOrRented.textContent = selectedOption;
//   const ownerOrRentedContainer = document.getElementById(
//     "own-or-rent-field-container"
//   );
//   ownerOrRentedContainer.classList.add("B0A4Qg");
//   data.b3duZXJPclJlbnRlZA = selectedOption;
// });

// // source of income

// const sourceOfIncomeSelect = document.getElementById("id_field_income_type");
// const sourceOfIncome = document.querySelector(".kWGRmgJI");
// sourceOfIncomeSelect.addEventListener("change", () => {
//   const selectedOption =
//     sourceOfIncomeSelect.options[sourceOfIncomeSelect.selectedIndex].text;
//   sourceOfIncome.textContent = selectedOption;
//   const sourceOfIncomeContainer = document.getElementById(
//     "source-of-income-field-container"
//   );
//   sourceOfIncomeContainer.classList.add("B0A4Qg");
//   data.c291cmNlT2ZJbmNvbWU = selectedOption;
// });

// //time employed field months
// const timeEmployedSelect = document.getElementById("id_field_employed_months");
// const timeEmployed = document.querySelector(".kWGRmgEM");
// timeEmployedSelect.addEventListener("change", () => {
//   const selectedOption =
//     timeEmployedSelect.options[timeEmployedSelect.selectedIndex].text;
//   timeEmployed.textContent = selectedOption;
//   const timeEmployedContainer = document.getElementById(
//     "time-employed-field-container"
//   );
//   timeEmployedContainer.classList.add("B0A4Qg");
//   data.d328dh39jd927d29u2d29u = selectedOption;
// });

// //monthly income field
// const monthlyIncomeInputSelect = document.getElementById(
//   "id_field_monthly_income"
// );
// const monthlyIncomeInput = document.querySelector(".kWGRmgMI");
// monthlyIncomeInputSelect.addEventListener("change", () => {
//   const selectedOption =
//     monthlyIncomeInputSelect.options[monthlyIncomeInputSelect.selectedIndex]
//       .text;

//   const monthlyIncomeContainer = document.getElementById(
//     "monthly-gross-income-container"
//   );
//   monthlyIncomeContainer.textContent = selectedOption;
//   data.bW9udGhseUluY29tZQ = selectedOption;
// });
// // Script 2: Validate email input
const emailInput = document.getElementById("id_field_email");
const emailWrapper = emailInput.closest(".S1KhMM");

emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  data.ZW1haWw = value;

  if (value !== "" && isValidEmail) {
    emailWrapper.classList.add("B0A4Qg");
  } else {
    emailWrapper.classList.remove("B0A4Qg");
  }
});

// Script 3: Format and validate phone input
const phoneInput = document.getElementById("id_field_home_phone");
const phoneWrapper = phoneInput.closest(".S1KhMM");

phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "").substring(0, 10);
  let formatted = "";

  if (value.length > 0) formatted = "(" + value.substring(0, 3);
  if (value.length >= 4) formatted += ") " + value.substring(3, 6);
  if (value.length >= 7) formatted += "-" + value.substring(6, 10);

  e.target.value = formatted;
  data.cGhvbmU = value;

  if (value.length === 10) {
    phoneWrapper.classList.add("B0A4Qg");
  } else {
    phoneWrapper.classList.remove("B0A4Qg");
  }
});

// // Script 4: Format and validate SSN input
// const input = document.getElementById("id_field_last4ssn");
// const ssnContainer = document.getElementById("ssn-field-container");
// const prefix = "×××-××-";
// const maxDigits = 4;

// input.addEventListener("focus", setCursor);
// input.addEventListener("keydown", (e) => {
//   const key = e.key;
//   const cursorPos = input.selectionStart;
//   const isBackspace = key === "Backspace";
//   const isNumber = /^\d$/.test(key);

//   if (cursorPos <= prefix.length && !isBackspace) {
//     e.preventDefault();
//     setCursor();
//     return;
//   }

//   if (isBackspace && cursorPos > prefix.length) return;
//   if (["ArrowLeft", "ArrowRight", "Tab"].includes(key)) return;
//   if (!isNumber) {
//     e.preventDefault();
//     return;
//   }

//   const enteredDigits = input.value.slice(prefix.length).replace(/[^0-9]/g, "");
//   if (enteredDigits.length >= maxDigits) {
//     e.preventDefault();
//     return;
//   }
// });

// input.addEventListener("input", () => {
//   const entered = input.value.slice(prefix.length).replace(/[^0-9]/g, "");
//   const padded = entered.padEnd(4, "_");
//   input.value = prefix + padded;
//   ssnContainer.classList.add("B0A4Qg");

//   if (entered.length === maxDigits) {
//     data.bGFzdDRzc24 = entered;
//   } else {
//     ssnContainer.classList.remove("B0A4Qg");
//   }

//   setCursor();
// });

// function setCursor() {
//   setTimeout(() => {
//     input.setSelectionRange(input.value.length, input.value.length);
//   }, 0);
// }

// Script 5: Validate first name input
const firstNameInput = document.getElementById("id_field_first_name");
const parentDiv = document.getElementById("firstname-field-container");

function validateInput() {
  data.Zmlyc3ROYW1l = firstNameInput.value;
  if (firstNameInput.value.trim() !== "") {
    parentDiv.classList.add("B0A4Qg");
  } else {
    parentDiv.classList.remove("B0A4Qg");
  }
}

firstNameInput.addEventListener("input", validateInput);
firstNameInput.addEventListener("blur", validateInput);

// Script 6: Validate last name input
const lastNameInput = document.getElementById("id_field_last_name");
const parentDivLastName = document.getElementById("lastname-field-container");

function validateInputLastName() {
  if (lastNameInput.value.trim() !== "") {
    parentDivLastName.classList.add("B0A4Qg");
    data.bGFzdE5hbWU = lastNameInput.value;
  } else {
    parentDivLastName.classList.remove("B0A4Qg");
  }
}

lastNameInput.addEventListener("input", validateInputLastName);
lastNameInput.addEventListener("blur", validateInputLastName);

const cityInput = document.getElementById("id_field_city");
const cityInputContainer = document.getElementById("city-field-container");

function validateCity() {
  if (lastNameInput.value.trim() !== "") {
    cityInputContainer.classList.add("B0A4Qg");
    data.bGFzdE5hbWU = lastNameInput.value;
  } else {
    cityInputContainer.classList.remove("B0A4Qg");
  }
}
cityInput.addEventListener("input", validateCity);
cityInput.addEventListener("blur", validateCity);
// // Script 7: Format and validate birth date input
// const birthDateInput = document.getElementById("id_field_birth_date");
// const parentDivDob = document.getElementById("dob-field-container");
// const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

// function formatDateInput(event) {
//   let value = birthDateInput.value.replace(/\D/g, "").substring(0, 8);

//   if (value.length >= 3 && value.length < 5) {
//     value = value.slice(0, 2) + "/" + value.slice(2);
//   } else if (value.length >= 5) {
//     value =
//       value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
//   }

//   birthDateInput.value = value;
//   validateDate();
// }

// function validateDate() {
//   if (datePattern.test(birthDateInput.value.trim())) {
//     parentDivDob.classList.add("B0A4Qg");
//     data.YmlydGhEYXRl = birthDateInput.value;
//     parentDivDob.classList.remove("invalid");
//   } else {
//     parentDivDob.classList.remove("B0A4Qg");
//     parentDivDob.classList.add("invalid");
//   }
// }

// birthDateInput.addEventListener("input", formatDateInput);
// birthDateInput.addEventListener("blur", validateDate);

// Script 8: Validate zip code input
const zipCodeInput = document.getElementById("id_field_zip");
const parentDivZip = document.getElementById("zip-field-container");
const zipPattern = /^\d{5}(-\d{4})?$/;

function validateZipCode() {
  if (zipPattern.test(zipCodeInput.value.trim())) {
    parentDivZip.classList.add("B0A4Qg");
    data.emlwY29kZQ = zipCodeInput.value;
    parentDivZip.classList.remove("invalid");
  } else {
    parentDivZip.classList.remove("B0A4Qg");
    parentDivZip.classList.add("invalid");
  }
}

zipCodeInput.addEventListener("input", validateZipCode);
zipCodeInput.addEventListener("blur", validateZipCode);

// // Script 10: next button click event
// document;
// const page1 = document.getElementById("page_1");
// // const page2 = document.getElementById("page_2");
// // const page3 = document.getElementById("page_3");
// // page2.classList.add("hidden");
// // page3.classList.add("hidden");

// document.getElementById("next_btn_1").addEventListener("click", () => {
//   page1.classList.add("hidden");
// //   page2.classList.remove("hidden");
// //   page3.classList.add("hidden");
// });

// document.getElementById("next_btn_2").addEventListener("click", () => {
//   page2.classList.add("hidden");
//   page1.classList.add("hidden");
//   page3.classList.remove("hidden");
//   updateProgressBar("66");
//   updateProgressText("66");
// });
document.addEventListener("DOMContentLoaded", () => {
  validateForm(); // Check validity of prefilled data
});

function validateForm() {
  const email = document.getElementById("id_field_email").value.trim();
  const phone = document
    .getElementById("id_field_home_phone")
    .value.trim()
    .replace(/\D/g, "");
  const firstName = document.getElementById("id_field_first_name").value.trim();
  const lastName = document.getElementById("id_field_last_name").value.trim();
  const zip = document.getElementById("id_field_zip").value.trim();
  const address = document.getElementById("id_field_address").value.trim();
  const state = document.getElementById("id_field_state").value.trim();
  const city = document.getElementById("id_field_city").value.trim();
  const loanAmount = document
    .getElementById("id_field_requested_amount")
    .value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let validCount = 0;
  const totalFields = 9;

  if (emailRegex.test(email)) validCount++;
  if (phone.length === 10) validCount++;
  if (firstName) validCount++;
  if (lastName) validCount++;
  if (zip) validCount++;
  if (address) validCount++;
  if (state) validCount++;
  if (city) validCount++;
  if (loanAmount) validCount++;

  const progress = ((validCount / 9) * 100).toFixed(2);
  // document.getElementById("progressBar").style.width = `${progress}%`;
  updateProgressBar(progress);
  updateProgressText(progress);
  const isFormValid = validCount === totalFields;
  // document.getElementById("next_btn_3").disabled = !isFormValid;

  return isFormValid;
}

const responseEl = document.getElementById("response");

document.getElementById("next_btn_3").addEventListener("click", () => {
  //   page2.classList.add("hidden");
  // page4.classList.remove("hidden");
  //   page1.classList.add("hidden");
  if (validateForm()) {
    data.ZW1haWw = document.getElementById("id_field_email").value;
    data.cGhvbmU = document.getElementById("id_field_home_phone").value;
    data.Zmlyc3ROYW1l = document.getElementById("id_field_first_name").value;
    data.bGFzdE5hbWU = document.getElementById("id_field_last_name").value;
    data.emlwY29kZQ = document.getElementById("id_field_zip").value;
    data.c3RyZWV0QWRkcmVzcw = document.getElementById("id_field_address").value;
    data.c3RhdGU = document.getElementById("id_field_state").value;
    data.Y2l0eQ = document.getElementById("id_field_city").value;
    data.bG9hbkFtb3VudA = document.getElementById(
      "id_field_requested_amount"
    ).value;
    if (
      !data.ZW1haWw ||
      !data.cGhvbmU ||
      !data.Zmlyc3ROYW1l ||
      !data.bGFzdE5hbWU ||
      !data.emlwY29kZQ ||
      !data.c3RyZWV0QWRkcmVzcw ||
      !data.c3RhdGU ||
      !data.Y2l0eQ ||
      !data.bG9hbkFtb3VudA
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.ZW1haWw)) {
      alert("Please enter a valid email address.");
      return;
    }
    const phoneNumber = data.cGhvbmU.replace(/\D/g, ""); // keep only digits

    // ✅ Phone number should be 10 digits
    if (phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwuiR2alMqa7mfL6YBilP73AG6HmWfMT9ycMcEVWps65x4_J2yVmFYd0jJFp4suuEUP/exec",
      {
        method: "POST",
        mode: "no-cors", // use "cors" if your app script is set up for it
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        //   responseEl.innerText = "Submitted successfully!";
        //   form.reset();
        redirectPage();
      })
      .catch((e) => {
        //   responseEl.innerText = "There was an error.";
        console.log(e);
      });
  } else {
    showCustomAlert("Please fill in all fields.");
  }
  // data.c3RyZWV0QWRkcmVzcw = document.getElementById("id_field_address").value;
});
function showCustomAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("customAlertMessage");

  alertMessage.textContent = message;
  alertBox.classList.remove("hidden");
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
    setTimeout(() => alertBox.classList.add("hidden"), 300);
  }, 3000); // alert hides after 3 seconds
}
function triggerTrackingPixel() {
  const visitorId = localStorage.getItem("propeller_clickid"); // or generateUUID()
  const pixel = new Image();
  pixel.src = `http://ad.propellerads.com/conversion.php?aid=3813520&tid=143216&visitor_id=${visitorId}&payout=1`;
}

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function redirectPage() {
  triggerTrackingPixel(); // Call the tracking pixel function
  const phoneNumber = data.cGhvbmU.replace(/\D/g, ""); // keep only digits

  const redirectUrl = `https://fundsjoy.com/apply?manual=1&aid=2992&email=${
    data.ZW1haWw
  }&first_name=${data.Zmlyc3ROYW1l}&last_name=${data.bGFzdE5hbWU}&zip=${
    data.emlwY29kZQ
  }&state=${encodeURIComponent(data.c3RhdGU)}&city=${encodeURIComponent(
    data.Y2l0eQ
  )}&address=${encodeURIComponent(
    data.c3RyZWV0QWRkcmVzcw
  )}&home_phone=${phoneNumber}`;

  // Redirect to the constructed URL
  window.location.href = redirectUrl;
}
// Script 11: Update progress bar based on page
const progressBar = document.querySelector(".V9BRuY");
const progressText = document.querySelector(".Kr7tEZ span");

function updateProgressText(progress) {
  progressText.innerHTML = `${progress}<small>%</small>`;
}
function updateProgressBar(progress) {
  progressBar.style.setProperty("--progress", progress);
}
updateProgressBar("0");
updateProgressText("0");

(function () {
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const clickid = getQueryParam("clickid");
  if (clickid && clickid.length >= 10) {
    // Save to localStorage
    localStorage.setItem("propeller_clickid", clickid);
    console.log("ClickID stored:", clickid);
  }
})();

// document.getElementById("next_btn_1").addEventListener("click", () => {
//   updateProgressBar("33");
//   progressText.innerHTML = `${33}<small>%</small>`;
// });

// document.getElementById("next_btn_2").addEventListener("click", () => {
//     updateProgressBar("66");
// });

// document.getElementById("next_btn_1").addEventListener("click", () => {
//     updateProgressText("58");
// });

// document.getElementById("next_btn_2").addEventListener("click", () => {
//     updateProgressText("25");
// });
// Scroll to top when clicked on any next button
// document.getElementById("next_btn_1").addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// document.getElementById("next_btn_2").addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// document.getElementById("id_button_back_2").addEventListener("click", () => {
//   page2.classList.add("hidden");
//   page1.classList.remove("hidden");
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   updateProgressBar("33");
//   updateProgressText("33");
// });

// document.getElementById("id_button_back_3").addEventListener("click", () => {
//   page3.classList.add("hidden");
//   page2.classList.remove("hidden");
//   page1.classList.remove("hidden");
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   updateProgressBar("66");
//   updateProgressText("66");
// });

// const formSubmit = document.getElementById("next_btn_3");

// formSubmit.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const data = {
//     name: document.getElementById("id_field_first_name").value,
//     email: document.getElementById("id_field_first_name").value,
//     message: document.getElementById("id_field_first_name").value,
//   };

//   fetch(
//     "https://script.google.com/macros/s/AKfycbygxJvtHtCGXMErwbE6mFYDyLoStg03J3-NXiYKEFbHqQSf0nvXYNg5bFMsovxvtFmd/exec",
//     {
//       method: "POST",
//       mode: "no-cors", // use "cors" if your app script is set up for it
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   )
//     .then(() => {
//       responseEl.innerText = "Submitted successfully!";
//       form.reset();
//     })
//     .catch(() => {
//       responseEl.innerText = "There was an error.";
//     });
// });
