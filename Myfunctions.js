document.addEventListener("DOMContentLoaded", function() {
	// Add click event listeners to all elements with class "carImage"
	const carImages = document.querySelectorAll(".carImage");
	carImages.forEach(function(carImage) {
	carImage.addEventListener("click", onCarImageClick);
	});
	generateCaptcha();
	// Get the car details from the query string in the URL
	const searchParams = new URLSearchParams(window.location.search);
	const carName = searchParams.get("name");
	const carPrice = searchParams.get("price");
	const carSrc = searchParams.get("src");
	const carTypeRant = searchParams.get("cartyperant");
	
	// Update the HTML with the car details
	const typerantEl = document.getElementById("typerant");
	if (typerantEl) {
	typerantEl.textContent = carTypeRant;
	}
	const carnameEl = document.getElementById("carname");
	if (carnameEl) {
	carnameEl.textContent = carName;
	}
	const carpriceEl = document.getElementById("carprice");
	if (carpriceEl) {
	carpriceEl.textContent = carPrice * 0.94 +"S.P";
	}
	const carprice1El = document.getElementById("carprice1");
	if (carprice1El) {
	carprice1El.textContent =carPrice * 0.01+"S.P"  ;
	}
	const carprice5El = document.getElementById("carprice5");
	if (carprice5El) {
	carprice5El.textContent = carPrice * 0.05+"S.P" ;
	}
	const caridEl = document.getElementById("carid");
	if (caridEl) {
	caridEl.src = carSrc;
	}
	});
	
	function onCarImageClick(event) {
	const carImage = event.target;
	const carNameEl = carImage.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
	const carName = carNameEl ? carNameEl.textContent : '';
	const carPriceEl = carImage.parentElement.nextElementSibling;
	const carPrice = carPriceEl ? carPriceEl.textContent : '';
	const carTypeRantEl = carImage.parentElement.nextElementSibling.nextElementSibling;
	const carTypeRant = carTypeRantEl ? carTypeRantEl.textContent : '';
	const carSrc = carImage.src;
	
	// Create a URLSearchParams object and add the relevant query parameters
	const params = new URLSearchParams();
	params.set("name", carName);
	params.set("price", carPrice);
	params.set("src", carSrc);
	params.set("cartyperant", carTypeRant);
	
	// Construct the URL with the query string and navigate to it
	const url = "details.html?"+params.toString();
	window.location.href = url;
	}
	const goBack = () => {
	  window.history.back();
	}
	
	function toggleForm() {
	  const form = document.querySelector('#myForm');
	  const checkbox = document.querySelector('#showForm');
	  form.style.display = checkbox.checked ? 'block' : 'none';
	}
	 function generateCaptcha() {
	  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	  const captchaCode = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
	  const txtCaptchaEl = document.getElementById('txtCaptcha');
	  if (txtCaptchaEl) {
		txtCaptchaEl.value = captchaCode;
	  }
	}
// Function to validate the form inputs
function validateForm() {
	// Get the form inputs
	var name = document.forms["rentalForm"]["name"].value;
	var nationalId = document.forms["rentalForm"]["nationalId"].value;
	var dob = document.forms["rentalForm"]["dob"].value;
	var mobile = document.forms["rentalForm"]["mobile"].value;
	var email = document.forms["rentalForm"]["email"].value;
	var rentalDuration = document.forms["rentalForm"]["rentalDuration"].value;
	var captcha = document.forms["rentalForm"]["captcha"].value;
  
	// Validate the inputs
	if (name == "") {
	  alert("Please enter your name.");
	  return false;
	}
	if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(name)) {
	  alert("Please enter a valid name using alphabetic letters only in Arabic.");
	  return false;
	}
	if (nationalId == "") {
	  alert("Please enter your national ID.");
	  return false;
	}
	if (!/^\d{11}$/.test(nationalId)) {
	  alert("Please enter a valid national ID with 11 digits.");
	  return false;
	}
	if (dob == "") {
	  alert("Please enter your date of birth.");
	  return false;
	}
	if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
	  alert("Please enter a valid date of birth in the format yyyy-mm-dd.");
	  return false;
	}
	if (mobile == "") {
	  alert("Please enter your mobile number.");
	  return false;
	}
	if (!/^09\d{8}$/.test(mobile)) {
	  alert("Please enter a valid mobile number that matches the Syriatel or MTN networks.");
	  return false;
	}
	if (email == "") {
	  alert("Please enter your email.");
	  return false;
	}
	if (!/\S+@\S+\.\S+/.test(email)) {
	  alert("Please enter a valid email address.");
	  return false;
	}
	if (rentalDuration == "") {
	  alert("Please enter the rental duration.");
	  return false;
	}
	if (!/^\d+$/.test(rentalDuration)) {
	  alert("Please enter a valid rental duration using an integer.");
	  return false;
	}
	var captcha = document.getElementById("txtCaptcha").value;
	if (captcha == "") {
	  alert("Please enter the captcha code.");
	  return false;
	}
	// Check the captcha code
	// Insert code here to check the captcha code against the generated code
	if (captcha != txtCompare) {
	  alert("Please enter the correct captcha code.");
	  return false;
	}
	return true;
  }
  
  // Function to generate the captcha code
  function generateCaptcha() {
	// Insert code here to generate a random 4-digit code and display it on the page
  }
  
  // Function to transfer information from one page to another
  function transferInfo() {
	// Insert code here to get the selected car information and transfer it to the form page
  }
  
  // Function to calculate the final rental value
  function calculateRentalValue() {
	// Insert code here to calculate the final rental value based on the rental duration and any additional fees or taxes
  }