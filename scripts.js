//make days of the week active on hours section
function changeActiveDay () {
  //assign days to elements with the day class name
  let days = document.getElementsByClassName('day');
  //create new date attribute to create active day class
  let currentDay = new Date().getDay();
  //loop through array created by selecting the class name of elements
  for (let i = 0; i < days.length; i++);
  //if/else statement to assign active class to the current day
  if (currentDay === 0) {
    days[0].classList.add('active-day');
  } else if (currentDay === 1) {
    days[1].classList.add('active-day');
  } else if (currentDay === 2) {
    days[2].classList.add('active-day');
  } else if (currentDay === 3) {
    days[3].classList.add('active-day');
  } else if (currentDay === 4) {
    days[4].classList.add('active-day');
  } else if (currentDay === 5) {
    days[5].classList.add('active-day');
  } else if (currentDay === 6) {
    days[6].classList.add('active-day');
  }
} changeActiveDay();



window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    let form = document.getElementById("contact-form");
    let button = document.getElementById("submit");
    let status = document.getElementById("form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

