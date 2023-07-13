function generateResume() {
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var graduationYear = document.getElementById('graduation-year').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var jobDescription = document.getElementById('job-description').value;
  
    var previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = `
      <h3>${fullName}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
  
      <h3>Education</h3>
      <p>${degree}, ${university} (${graduationYear})</p>
  
      <h3>Experience</h3>
      <p>${jobTitle}, ${company}</p>
      <p>${jobDescription}</p>
    `;
  
    var resumePreview = document.getElementById('resume-preview');
    resumePreview.style.display = 'block';
  }