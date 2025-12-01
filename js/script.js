// Shourya
function su_validateForm() {
			//const used when variable will not change and can assign a value on declration
			
			//validate name
            const name_su = document.getElementById("su_name").value.trim(); //trim() removes the spaces from starting and ending of string
			
			//validate email
			const email_su = document.getElementById("su_email").value; 
			
			//validate name error 
			const nameErr_su = document.getElementById("su_name-error");
            
			//validate email error
			const emailErr_su = document.getElementById("su_email-error");
			
			//sets the name and email error content to empty
			nameErr_su.textContent = "";
            emailErr_su.textContent = "";
			
			let isValid = true;
			//=== is strict equality, type must be the same. 
            if (name_su === "" || name_su.length < 3) {
				//returns false if input name is empty or its length is less than 3 showing an error message
                nameErr_su.textContent = "Please enter your name properly.";
                isValid = false;
            }
            if (email_su === "" || !email_su.includes("@") || !email_su.includes(".")) {
				//returns false if the user didnt add "@" or "." at correct position in their email showing an error message
                emailErr_su.textContent = "Please enter a valid email address.";
                isValid = false;
            }
			if (isValid) {
				//alerts user when all the input are correct showing the message
                alert("Subscribed for Newsletter successfully!");
                return true;
            } else {
                return false; 
            }
}

function su_resetErrors() {
			//this resets the error messagee when input is corrected by the user
            document.getElementById("su_name-error").textContent = "";
            document.getElementById("su_email-error").textContent = "";
}

