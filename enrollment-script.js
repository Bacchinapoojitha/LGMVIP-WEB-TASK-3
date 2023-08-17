const enrollmentDetails = document.querySelector('.enrollment-details');

window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    displayEnrollmentDetails(userData);
});

function displayEnrollmentDetails(userData) {
    const enrollmentDiv = document.createElement('div');
    enrollmentDiv.classList.add('enrollment-item');

    enrollmentDiv.innerHTML = `
        <h3>Student Enrollment Form</h3>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Gender:</strong> ${userData.gender}</p>
        <p><strong>Skills:</strong> ${userData.skills}</p>
        <img src="${URL.createObjectURL(userData.image)}" alt="Student Image">
    `;

    enrollmentDetails.appendChild(enrollmentDiv);
}
