//contact us form in jquery


// $(".contact_btn").on('click', function () {
//     //disable submit button on click
//     // $(".contact_btn").attr("disabled", "disabled");
//     // $(".contact_btn b").text('Sending');
//     $(".contact_btn i").removeClass('d-none');

//     //simple validation at client's end
//     var post_data, output;
//     var proceed = "true";
//     // var allBlank;

//     var str = $('#contact-form-data').serializeArray();

//     $('#contact-form-data input').each(function() {
//         if(!$(this).val()){
//             // alert('Some fields are empty');
//             proceed = "false";
//         }
//     });

//     //everything looks good! proceed...
//     if (proceed === "true") {

//         var pathArray = window.location.pathname.split('/');
//         var secondLevelLocation = pathArray[3];

//         var accessURL;
//         if(secondLevelLocation){
//             accessURL="../vendor/contact-mailer.php";
//         }else{
//             accessURL="vendor/contact-mailer.php";
//         }
//         //data to be sent to server
//         $.ajax({
//             type: 'POST',
//             // url: 'vendor/contact-mailer.php',
//             url: accessURL,
//             data: str,
//             dataType: 'json',
//             success: function (response) {
//                 if (response.type == 'error') {
//                     output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
//                 } else {
//                     output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
//                     //reset values in all input fields
//                     $('.contact-form input').val('');
//                     $('.contact-form textarea').val('');
//                 }

//                 if ($("#result").length) {
//                     // alert("yes");
//                     $("#result").hide().html(output).slideDown();
//                     $(".contact_btn i").addClass('d-none');
//                 }else{
//                     if (response.type == 'error') {
//                         Swal.fire({
//                             type: 'error',
//                             icon: 'error',
//                             title: 'Oops...',
//                             html: '<div class="text-danger">'+ response.text +'</div>',
//                         })
//                         $(".contact_btn i").addClass('d-none');
//                     }else{
//                         Swal.fire({
//                             type: 'success',
//                             icon: 'success',
//                             title: 'Success!',
//                             html: '<div class="text-success">'+ response.text +'</div>',
//                         })
//                         $(".contact_btn i").addClass('d-none');
//                     }
//                 }
//             },
//             error: function () {
//                 alert("Failer");
//             }
//         });

//     }
//     else
//     {
//         if ($("#result").length) {
//             // alert("yes");
//             output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
//             $("#result").hide().html(output).slideDown();
//             $(".contact_btn i").addClass('d-none');
//         }else{
//             Swal.fire({
//                 icon: 'error',
//                 type: 'error',
//                 title: 'Oops...',
//                 html: '<div class="text-danger">Please provide the missing fields.</div>'
//             })
//             $(".contact_btn i").addClass('d-none');
//         }

//     }


// });



//modal window form

// $(".modal_contact_btn").on('click', function () {
//     //disable submit button on click
//     // $(".modal_contact_btn").attr("disabled", "disabled");
//     // $(".modal_contact_btn b").text('Sending');
//     $(".modal_contact_btn i").removeClass('d-none');

//     //simple validation at client's end
//     var post_data, output;
//     var proceed = "true";

//     var str=$('#modal-contact-form-data').serializeArray();

//     $('#modal-contact-form-data input').each(function() {
//         if(!$(this).val()){
//             proceed = "false";
//         }
//     });

//     //everything looks good! proceed...
//     if (proceed === "true") {
//         var pathArray = window.location.pathname.split('/');
//         var secondLevelLocation = pathArray[3];

//         var accessURL;
//         if(secondLevelLocation){
//             accessURL="../vendor/contact-mailer.php";
//         }else{
//             accessURL="vendor/contact-mailer.php";
//         }
//         //data to be sent to server
//         $.ajax({
//             type : 'POST',
//             // url : 'vendor/contact-mailer.php',
//             url : accessURL,
//             data : str,
//             dataType: 'json',
//             success: function(response) {
//                 if (response.type == 'error') {
//                     output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
//                 } else {
//                     output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
//                     //reset values in all input fields
//                     $('.contact-form input').val('');
//                     $('.contact-form textarea').val('');
//                 }


//                 if ($("#quote_result").length) {
//                     $("#quote_result").hide().html(output).slideDown();
//                     $(".modal_contact_btn i").addClass('d-none');
//                 }else{
//                     if (response.type == 'error') {
//                         Swal.fire({
//                             type: 'error',
//                             icon: 'error',
//                             title: 'Oops...',
//                             html: '<div class="text-danger">'+ response.text +'</div>',
//                         })
//                         $(".modal_contact_btn i").addClass('d-none');
//                     }else{
//                         Swal.fire({
//                             type: 'success',
//                             icon: 'success',
//                             title: 'Success!',
//                             html: '<div class="text-success">'+ response.text +'</div>',
//                         })
//                         $(".modal_contact_btn i").addClass('d-none');
//                     }
//                 }
//                 // $("#quote_result").hide().html(output).slideDown();
//                 // $(".modal_contact_btn i").addClass('d-none');
//             },
//             error: function () {
//                 alert("Failer");
//             }
//         });

//     }
//     else {
//         // output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
//         // $("#quote_result").hide().html(output).slideDown();
//         // $(".modal_contact_btn i").addClass('d-none');
//         if ($("#quote_result").length) {
//             // alert("yes");
//             output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
//             $("#quote_result").hide().html(output).slideDown();
//             $(".modal_contact_btn i").addClass('d-none');
//         }else{
//             Swal.fire({
//                 icon: 'error',
//                 type: 'error',
//                 title: 'Oops...',
//                 html: '<div class="text-danger">Please provide the missing fields.</div>'
//             })
//             $(".modal_contact_btn i").addClass('d-none');
//         }
//     }

// });



// In javascript //


// Contact us form
document.querySelector(".contact_btn").addEventListener('click', function () {
    // Disable submit button on click
    // document.querySelector(".contact_btn").setAttribute("disabled", "disabled");
    // document.querySelector(".contact_btn b").textContent = 'Sending';
    document.querySelector(".contact_btn i").classList.remove('d-none');

    // Simple validation at client's end
    var post_data, output;
    var proceed = true;

    var formData = new FormData(document.getElementById('contact-form-data'));
    for (const value of formData.values()) {
        if (!value.trim()) {
            proceed = false;
            break;
        }
    }

    // Everything looks good! Proceed...
    if (proceed) {
        var pathArray = window.location.pathname.split('/');
        var secondLevelLocation = pathArray[3];

        var accessURL;
        if (secondLevelLocation) {
            accessURL = "../vendor/contact-mailer.php";
        } else {
            accessURL = "vendor/contact-mailer.php";
        }

        // Data to be sent to the server
        var xhr = new XMLHttpRequest();
        xhr.open('POST', accessURL, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.type == 'error') {
                        output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
                    } else {
                        output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
                        // Reset values in all input fields
                        document.querySelectorAll('.contact-form input').forEach(function (input) {
                            input.value = '';
                        });
                        document.querySelectorAll('.contact-form textarea').forEach(function (textarea) {
                            textarea.value = '';
                        });
                    }

                    var resultElement = document.getElementById("result");
                    if (resultElement) {
                        resultElement.style.display = 'none';
                        resultElement.innerHTML = output;
                        resultElement.style.display = 'block';
                        document.querySelector(".contact_btn i").classList.add('d-none');
                    } else {
                        if (response.type == 'error') {
                            Swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Oops...',
                                html: '<div class="text-danger">' + response.text + '</div>',
                            });
                            document.querySelector(".contact_btn i").classList.add('d-none');
                        } else {
                            Swal.fire({
                                type: 'success',
                                icon: 'success',
                                title: 'Success!',
                                html: '<div class="text-success">' + response.text + '</div>',
                            });
                            document.querySelector(".contact_btn i").classList.add('d-none');
                        }
                    }
                } else {
                    alert("Failure");
                }
            }
        };
        xhr.send(formData);
    } else {
        var resultElement = document.getElementById("result");
        if (resultElement) {
            output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
            resultElement.style.display = 'none';
            resultElement.innerHTML = output;
            resultElement.style.display = 'block';
            document.querySelector(".contact_btn i").classList.add('d-none');
        } else {
            Swal.fire({
                icon: 'error',
                type: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">Please provide the missing fields.</div>'
            });
            document.querySelector(".contact_btn i").classList.add('d-none');
        }
    }
});

// Modal window form
document.querySelector(".modal_contact_btn").addEventListener('click', function () {
    // Disable submit button on click
    // document.querySelector(".modal_contact_btn").setAttribute("disabled", "disabled");
    // document.querySelector(".modal_contact_btn b").textContent = 'Sending';
    document.querySelector(".modal_contact_btn i").classList.remove('d-none');

    // Simple validation at client's end
    var post_data, output;
    var proceed = true;

    var formData = new FormData(document.getElementById('modal-contact-form-data'));
    for (const value of formData.values()) {
        if (!value.trim()) {
            proceed = false;
            break;
        }
    }

    // Everything looks good! Proceed...
    if (proceed) {
        var pathArray = window.location.pathname.split('/');
        console.log("pathArray",pathArray)
        var secondLevelLocation = pathArray[3];

        var accessURL;
        if (secondLevelLocation) {
            accessURL = "../vendor/contact-mailer.php";
        } else {
            accessURL = "vendor/contact-mailer.php";
        }

        // Data to be sent to server
        var xhr = new XMLHttpRequest();
        xhr.open('POST', accessURL, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.type == 'error') {
                        output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
                    } else {
                        output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
                        // Reset values in all input fields
                        document.querySelectorAll('.contact-form input').forEach(function (input) {
                            input.value = '';
                        });
                        document.querySelectorAll('.contact-form textarea').forEach(function (textarea) {
                            textarea.value = '';
                        });
                    }

                    var resultElement = document.getElementById("quote_result");
                    if (resultElement) {
                        resultElement.style.display = 'none';
                        resultElement.innerHTML = output;
                        resultElement.style.display = 'block';
                        document.querySelector(".modal_contact_btn i").classList.add('d-none');
                    } else {
                        if (response.type == 'error') {
                            Swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Oops...',
                                html: '<div class="text-danger">' + response.text + '</div>',
                            });
                            document.querySelector(".modal_contact_btn i").classList.add('d-none');
                        } else {
                            Swal.fire({
                                type: 'success',
                                icon: 'success',
                                title: 'Success!',
                                html: '<div class="text-success">' + response.text + '</div>',
                            });
                            document.querySelector(".modal_contact_btn i").classList.add('d-none');
                        }
                    }
                } else {
                    alert("Failure");
                }
            }
        };
        xhr.send(formData);
    } else {
        var resultElement = document.getElementById("quote_result");
        if (resultElement) {
            output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
            resultElement.style.display = 'none';
            resultElement.innerHTML = output;
            resultElement.style.display = 'block';
            document.querySelector(".modal_contact_btn i").classList.add('d-none');
        } else {
            Swal.fire({
                icon: 'error',
                type: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">Please provide the missing fields.</div>'
            });
            document.querySelector(".modal_contact_btn i").classList.add('d-none');
        }
    }
});



