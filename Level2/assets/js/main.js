const loginBtn = document.querySelector(`#login`);
const signup = document.querySelector(`#signup`);
const loginForm = document.querySelector(`.login`);
const signupForm = document.querySelector(`.signup`);
const loginText = document.querySelector(`.login-text`);
const signupText = document.querySelector(`.signup-text`);
const links__up = document.querySelector(`.links__up`);
const nationalID = document.querySelector(`#signupNationalID`);
const fullNameInput = document.querySelector("#fullName");
const phoneInput = document.querySelector("#phone");
const signupPass = document.querySelector("#signupPass");
const signupBtn = document.querySelector("#signupBtn");
const closeAlertBtn = document.querySelector(".close__alert");
const slidePage = document.querySelector(".slidePage");
const nextBtn__1 = document.querySelector("#nextBtn__1");
const nextBtn__2 = document.querySelector("#nextBtn__2");
const prevBtn__1 = document.querySelector("#prevBtn__1");
const prevBtn__2 = document.querySelector("#prevBtn__2");
const education = document.querySelector("#education");
const re_pass = document.querySelector("#re_pass");
const Agreement = document.querySelector("#Agreement");
const genders = document.getElementsByName("gender");

// functions

// validetion passwords
const isValidPassword = function (password) {
	// بررسی وجود حرف بزرگ انگلیسی
	if (!/[A-Z]/.test(password)) {
		return [1,"پسورد باید حداقل یک حرف بزرگ انگلیسی داشته باشد."];
	}
	// بررسی وجود حرف کوچک انگلیسی
	if (!/[a-z]/.test(password)) {
		return [2,"پسورد باید حداقل یک حرف کوچک انگلیسی داشته باشد."];
	}

	// اگر هر دو شرط بالا برقرار نشود، پسورد معتبر است
	return true;
};
const isEmptyInput = (val) => (val.length === 0 ? true : false);

loginBtn.addEventListener("change", () => {
	if ((signupForm.style.marginRight = "50%")) {
		signupForm.style.marginRight = "0%";
		loginForm.style.marginRight = "0%";
		loginText.style.marginRight = "0%";
		slidePage.style.marginRight = "0%";
		return;
	}
	signupForm.style.marginRight = "50%";
	loginForm.style.marginRight = "0%";
});
signup.addEventListener("change", () => {
	loginForm.style.marginRight = "-50%";
	loginText.style.marginRight = "-50%";
	signupForm.style.marginRight = "0%";
	document.querySelector(".process__1").classList.add("active");
});
links__up.addEventListener("click", (e) => {
	e.preventDefault();
	signup.click();
});

// check nationalID
let errMsg = "";
nationalID.addEventListener("input", function (e) {
	const nationalID = this.value;
	let errorEl = this.parentElement.querySelector(".error");
	const regxID = /^(?!(\d)\1{9})\d{10}$/;
	if (nationalID.length !== 10 || !regxID.test(nationalID)) {
		errMsg = "لطفا کد ملی خود را بصورت صحیح وارد کنید";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		this.style.borderColor = "#ff0000";
	} else {
		this.style.borderColor = "var(--secondray-clr)";
		if (!errorEl.classList.contains("hidden")) {
			errorEl.classList.add("hidden");
		}
	}
});

fullNameInput.addEventListener("input", function (e) {
	const fullName = this.value;
	let errorEl = this.parentElement.querySelector(".error");
	if (fullName.length <= 3) {
		errMsg = "نام و نام خانوادگی باید پیشتر از سه حرف باشد";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		this.style.borderColor = "#ff0000";
	} else {
		const rexStr = /\d/;
		if (rexStr.test(fullName)) {
			errMsg = "نام و نام خانوادگی نمی تواند شامل ** عدد ** باشد";
			errorEl.textContent = errMsg;
			errorEl.classList.remove("hidden");
			this.style.borderColor = "#ff0000";
			return false;
		}
		errorEl.textContent = "";
		errorEl.classList.add("hidden");
		this.style.borderColor = "var(--secondray-clr)";
	}
});

phoneInput.addEventListener("input", function (e) {
	const phoneNumber = this.value;
	let errorEl = this.parentElement.querySelector(".error");
	const regex = /^09/;
	if (!regex.test(phoneNumber)) {
		errMsg = "شماره تلفن حتما باید با ** 09 ** شروع شود";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		this.style.borderColor = "#ff0000";
		return;
	} else if (phoneNumber.length < 11) {
		errMsg = "شماره تلفن همراه ۱۱ رقمی می باشد";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		this.style.borderColor = "#ff0000";
		return;
	}
	errorEl.textContent = "";
	errorEl.classList.add("hidden");
	this.style.borderColor = "var(--secondray-clr)";
});

signupPass.addEventListener("input", function (e) {
	const password = this.value;
	let errorEl = this.parentElement.querySelector(".error");
	if (password.length < 8) {
		errMsg = "گذرواژه باید شامل ۸ کارکتر باشد";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		this.style.borderColor = "#ff0000";
		return;
	}
	if (isValidPassword(password)) {
		if (isValidPassword(password)[0]==1) {
			errMsg = isValidPassword(password)[1];
			errorEl.textContent = errMsg;
			errorEl.classList.remove("hidden");
			this.style.borderColor = "#ff0000";
			return;
		}
		if (isValidPassword(password)[0]==2) {
			errMsg = isValidPassword(password)[1];
			errorEl.textContent = errMsg;
			errorEl.classList.remove("hidden");
			this.style.borderColor = "#ff0000";
			return;
		}
	}
	errorEl.textContent = "";
	errorEl.classList.add("hidden");
	this.style.borderColor = "var(--secondray-clr)";

});
re_pass.addEventListener("input",function(){
	const password = this.value;
	let errorEl = this.parentElement.querySelector(".error");
	if (password !== signupPass.value) {
		errMsg = "تکرار گذر واژه با گذرواژه همخوانی ندارد";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		this.style.borderColor = "#ff0000";
		return;
	}
	errorEl.textContent = "";
	errorEl.classList.add("hidden");
	this.style.borderColor = "var(--secondray-clr)";

})

education.addEventListener("change", function (e) {
	const parentElm = education.parentElement;
	let errorEl = parentElm.querySelector(".error");
	if (education.value === "") {
		errMsg = "لطفا مدرک تحصیلی خود را انتخاب کنید ";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		education.style.borderColor = "#ff0000";
		return false;
	}
	errorEl.classList.add("hidden");
	education.style.borderColor = "var(--secondray-clr)";
});
/* start signup event
*/
signupBtn.addEventListener("click", function (e) {
	const errorEl = document.querySelector(".error__alert");
	if(!Agreement.checked){
		const parentElm = Agreement.parentElement;
		let errorEl = parentElm.querySelector(".error");
		errMsg = "لطفا قوانین سایت را بپذیرید";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		nationalID.style.borderColor = "#ff0000";
		return false;
	}
	if (
		isEmptyInput(nationalID.value) ||
		isEmptyInput(fullNameInput.value) ||
		isEmptyInput(phoneInput.value) ||
		isEmptyInput(signupPass.value)
	) {
		errorEl.classList.add("active");
	}
	errorEl.classList.add("active");

});
/*  ***** end signup event *********  */

closeAlertBtn.addEventListener("click", function () {
	document.querySelectorAll('form').forEach(form => {
		form.reset();
		loginBtn.click();
	  });
	  document.querySelectorAll("input").forEach(inp=>{
		inp.style.borderColor = "var(--gray-clr)";
	  })
	document.querySelector(".error__alert").classList.remove("active");
	document.querySelector(".process__2").classList.remove("active");
	document.querySelector(".process__3").classList.remove("active");
});


// multiple Form

nextBtn__1.addEventListener("click", function () {
	if (nationalID.value == "") {
		const parentElm = nationalID.parentElement;
		let errorEl = parentElm.querySelector(".error");
		errMsg = "لطفا  کد ملی خود را انتخاب کنید ";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		nationalID.style.borderColor = "#ff0000";
		return false;
	}
	if (fullNameInput.value == "") {
		const parentElm = fullNameInput.parentElement;
		let errorEl = parentElm.querySelector(".error");
		errMsg = "لطفا نام و نام خانوداکی خود را انتخاب کنید ";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		fullNameInput.style.borderColor = "#ff0000";
		return false;
	}
	let genderArr = [];
	for (let index = 0; index < genders.length; index++) {
		const gender = genders[index];
		if (gender.checked) {
			genderArr.push(gender);
		}
	}
	if (genderArr.length === 0) {
		const parentElm = document.querySelector(".genders").parentElement;
		let errorEl = parentElm.querySelector(".error");
		errMsg = "لطفا جنسیت خود را انتخاب کنید";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		return false;
	}
	document.querySelector(".process__2").classList.add("active");
	slidePage.style.marginRight = "-115%";
});
nextBtn__2.addEventListener("click", function (e) {
	if (phoneInput.value == "") {
		const parentElm = phoneInput.parentElement;
		console.log("parentElm", parentElm);
		let errorEl = parentElm.querySelector(".error");
		errMsg = "لطفا  تلفن همراه خود را انتخاب کنید ";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		phoneInput.style.borderColor = "#ff0000";
		return false;
	}
	if (education.value === "") {
		const parentElm = education.parentElement;
		let errorEl = parentElm.querySelector(".error");
		errMsg = "لطفا مدرک تحصیلی خود را انتخاب کنید ";
		errorEl.textContent = errMsg;
		errorEl.classList.remove("hidden");
		education.style.borderColor = "#ff0000";
		return false;
	}
	document.querySelector(".process__3").classList.add("active");
	slidePage.style.marginRight = "-230%";
});

prevBtn__1.addEventListener("click", function () {
	document.querySelector(".process__2").classList.remove("active");
	slidePage.style.marginRight = "0%";
});
prevBtn__2.addEventListener("click", function () {
	document.querySelector(".process__3").classList.remove("active");
	slidePage.style.marginRight = "-115%";
});
