<form id="registrationForm" onsubmit="return validateForm()">
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>
<span id="nameError" class="error"></span><br>

function validateForm() {
            var name = document.getElementById('name').value;

            var nameError = document.getElementById('nameError');

             // Reset error messages
             nameError.textContent = '';
             emailError.textContent = '';
             phoneNumberError.textContent = '';
             dobError.textContent = '';
 
             // Name validation (non-empty)
             if (name.trim() === '') {
                 nameError.textContent = 'Name is required';
                 return false;
             }
 
             // Email validation
             var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             if (!emailPattern.test(email)) {
                 emailError.textContent = 'Invalid email address';
                 return false;
             }
 
             // Phone Number validation (10 digits)
             var phoneNumberPattern = /^\d{10}$/;
             if (!phoneNumberPattern.test(phoneNumber)) {
                 phoneNumberError.textContent = 'Invalid phone number (10 digits)';
                 return false;
             }
 
             // Date of Birth validation (non-empty)
             if (dob.trim() === '') {
                 dobError.textContent = 'Date of Birth is required';
                 return false;
             }
 
             // Additional validation logic can be added as needed
 
             // If all validations pass, the form will be submitted
             return true;
         }
     </script>