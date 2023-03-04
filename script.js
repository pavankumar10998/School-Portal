
function check(form) {
    if (form.username.value == "pavan" && form.password.value == "test123") {
      return true;
    } else {
      alert("Incorrect Password or Username")
      return false;
    }
  }

  // In the validateLogin function, after successful login
localStorage.setItem('studentName', 'Pavan'); // Replace 'Pavan' with the actual student name

// In each page's JavaScript code
var studentName = localStorage.getItem('studentName');
if (studentName) {
  document.getElementById('student-name').textContent = 'Welcome, ' + studentName;
}