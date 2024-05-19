const nameInput = document.querySelector('input[name="name1"]');
const emailPhoneInput = document.querySelector("#email_phone");
const submitButton = document.getElementById("submitButton");
const nameError = document.getElementById("nameError");
const emailPhoneError = document.getElementById("emailPhoneError");

nameInput.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    nameError.textContent = "";
    submitButton.disabled = false; // Enable submit button if name is valid
  } else {
    nameError.textContent = "Please enter your name.";
    submitButton.disabled = true; // Disable if name is empty
  }
});

emailPhoneInput.addEventListener("input", function () {
  const emailRegex =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})?$|^0?[1-9]\d{9}$/; // Combined email and phone validation
  if (emailRegex.test(this.value)) {
    emailPhoneError.textContent = "";
    submitButton.disabled = false; // Enable submit button if email/phone is valid
  } else {
    emailPhoneError.textContent = "Please enter a valid email or phone number.";
    submitButton.disabled = true; // Disable if email/phone is invalid
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  if (!submitButton.disabled) {
    // Submit only if validation passes
    // Simulate form submission logic (replace with your actual submission code)
    console.log("Form submitted successfully!");

    // Clear form fields after successful submission
    form.reset();
    // Disable submit button again
    submitButton.disabled = true;
  }
});
// const nameInput = document.querySelector('input[name="name1"]');
// const emailPhoneInput = document.querySelector('#email_phone');
// const submitButton = document.getElementById('submitButton');
// const nameError = document.getElementById('nameError');
// const emailPhoneError = document.getElementById('emailPhoneError');
// const form = document.getElementById('contact-form-data');

// const validateForm = () => {
//     const isNameValid = nameInput.value.trim() !== '';
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$|^0?[1-9]\d{9}$/; // Combined email and phone validation
//     const isEmailPhoneValid = emailRegex.test(emailPhoneInput.value);

//     if (isNameValid && isEmailPhoneValid) {
//         submitButton.disabled = false;
//         nameError.textContent = '';
//         emailPhoneError.textContent = '';
//     } else {
//         submitButton.disabled = true;
//         if (!isNameValid) {
//             nameError.textContent = 'Please enter your name.';
//         } else {
//             nameError.textContent = '';
//         }
//         if (!isEmailPhoneValid) {
//             emailPhoneError.textContent = 'Please enter a valid email or phone number.';
//         } else {
//             emailPhoneError.textContent = '';
//         }
//     }
// };

// nameInput.addEventListener('input', validateForm);
// emailPhoneInput.addEventListener('input', validateForm);

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     if (!submitButton.disabled) { // Submit only if validation passes
//         // Simulate form submission logic (replace with your actual submission code)
//         console.log('Form submitted successfully!');

//         // Clear form fields after successful submission
//         form.reset();

//         // Disable submit button again
//         submitButton.disabled = true;
//     }
// });
