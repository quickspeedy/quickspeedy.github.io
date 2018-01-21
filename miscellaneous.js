$(document).ready(function(){
  $(".title").removeClass("invisibility").addClass("animated bounceInUp");
  $(".subtitle").removeClass("invisibility").addClass("animated bounceInUp");
});

// (function() {
//   validate.extend(validate.validators.datetime, {
//     parse: function(value, options) {
//       return +moment.utc(value);
//     },
//     //Input is a UNIX timestamp
//     format: function(value, options) {
//       var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
//       return moment.utc(value).format(format);
//     }
//   });
//
//   //These are the contraints used to validate the form
//   var constraints = {
//     name:{
//       //Name is required
//       presence:true,
//       //Name must be more than 2
//       length: {
//         minimum: 3
//       }
//     },
//     email:{
//       //Email is required
//       presence: true,
//       // and must be an email
//       email: true
//     },
//     message:{
//       //Message is required
//       presence: true,
//       //Message must be more than 5 characters
//       length:{
//         minimum:5
//       }
//     }
//   };
//
//   var form = document.querySelector("form#main");
//   form.addEventListener("submit",function(ev) {
//     ev.preventDefault();
//     handleFormSubmit(form);
//   });
//
//   var inputs = document.querySelectorAll("input, textarea");
//   for(var i = 0; i <inputs.length; i++) {
//     inputs.item(i).addEventListener("change",function(ev) {
//       var errors = validate(form, constraints) || {};
//       showErrorsForInput(this, errors[this.name])
//     });
//   }
//
//   function handleFormSubmit(form, input) {
//     //validate the form against the constraints
//     var errors = validate(form, constraints);
//     //then we update the form to reflect the results
//     showErrors(form, errors || {});
//     if(!errors) {
//       showSuccess();
//     }
//   }
//
//   //Updates the inputs with the validation errors
//   function showErrors(form, errors) {
//     // We loop through all the inputs and show the errors for that input
//     _.each(form.querySelectorAll("input[name]"), function(input) {
//       showErrorsForInput(input, errors && errors[input.name]);
//     });
//   }
//
// })
