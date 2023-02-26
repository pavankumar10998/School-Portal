function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "pavan" && password === "test123") {
      window.location.href = "homepage.html";
      alert("Login successful");
    } else if (username === "" || password === "") {
      alert("Please enter both username and password");
    } else {
      alert("Invalid username or password");
    }
  }

  // In the validateLogin function, after successful login
localStorage.setItem('studentName', 'Pavan'); // Replace 'Pavan' with the actual student name

// In each page's JavaScript code
var studentName = localStorage.getItem('studentName');
if (studentName) {
  document.getElementById('student-name').textContent = 'Welcome, ' + studentName;
}