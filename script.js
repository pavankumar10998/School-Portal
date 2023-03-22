const users = {
  pavan: 'test123',
  bob: 'qwerty',
  charlie: 'asdf123'
};

function check(form) {
  const username = form.username.value;
  const password = form.password.value;
  
  if (users[username] === password) {
    // Set student name in local storage
    localStorage.setItem('studentName', username);
  
    // Set student name in header
    const studentNameElement = document.getElementById('student-name');
    studentNameElement.innerHTML = `Welcome, ${username}!`;
  } else {
    alert('Incorrect username or password');
  }
  
}

// Retrieve student name from local storage
const studentName = localStorage.getItem('studentName');
// Set welcome message if student name is found in local storage
if (studentName) {
  const studentNameElement = document.getElementById('student-name');
  studentNameElement.innerHTML = `Welcome, ${studentName}!`;
}


function saveActivity() {
  // Retrieve form data
  const activityDate = document.getElementById("activity-date").value;
  const activity = document.getElementById("activity").value;
  const activityTime = document.getElementById("activity-time").value;

  // Load existing activities from session storage or initialize empty array
  let activities = JSON.parse(sessionStorage.getItem("activities")) || [];

  // Add new activity to array
  activities.push({
    date: activityDate,
    activity: activity,
    time: activityTime,
  });

  // Save updated activities to session storage
  sessionStorage.setItem("activities", JSON.stringify(activities));

  // Echo success message
  const message = document.createElement("p");
  message.textContent = "Activity submitted successfully!";
  document.querySelector(".content").appendChild(message);
}

const examResults = {
  pavan: {
    math: 90,
    english: 80,
    science: 95,
    history: 85
  },
  bob: {
    math: 70,
    english: 75,
    science: 80,
    history: 90
  },
  charlie: {
    math: 85,
    english: 90,
    science: 75,
    history: 80
  }
};

function showResults() {
  const loggedInUser = localStorage.getItem('studentName');
  const selectedSubject = document.getElementById('subject-select').value;
  const resultsDiv = document.getElementById('results');
  
  if (!studentName || !selectedSubject) {
    resultsDiv.innerHTML = 'Please select a user and a subject';
    return;
  }
  
  const score = examResults[studentName][selectedSubject];
  resultsDiv.innerHTML = `Score for ${selectedSubject}: ${score}`;
 
}

const personalInfo = {
  pavan: {
    name: 'Pavan Kumar',
    grade: 10,
    email: 'pavan.kumar@example.com',
    phone: '555-555-5555'
  },
  bob: {
    name: 'Bob Smith',
    grade: 9,
    email: 'bob.smith@example.com',
    phone: '555-555-5555'
  },
  charlie: {
    name: 'Charlie Brown',
    grade: 11,
    email: 'charlie.brown@example.com',
    phone: '555-555-5555'
  }
};

// Get the current student's personal information
const currentStudent = personalInfo[studentName];

// Update the student name displayed in the header
document.getElementById('student-name').textContent = currentStudent.name;

// Display the personal information in the list
const personalInfoList = document.getElementById('personal-info-list');
for (const key in currentStudent) {
  const listItem = document.createElement('li');
  listItem.textContent = `${key}: ${currentStudent[key]}`;
  personalInfoList.appendChild(listItem);
}
