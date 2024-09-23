function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function updateContent(content) {
  document.getElementById("content-section").innerHTML = content;
}

function academic() {
  const academicContent = `
<h2>Academic Programs</h2>
<div class="js-js">
<p class="js">Pace University offers a wide range of undergraduate, graduate, and professional programs
that combine rigorous academics with hands-on experience. Our programs cover disciplines such as business,
law, arts, sciences, technology, and education.</p>
</div>
<div class="amaze">
<ul>
<li class="text">Business Administration (BBA, MBA)</li>
<li class="text">Law (JD, LLM)</li>
<li class="text">Fine Arts</li>
<li class="text">Computer Science</li>
<li class="text">Education</li>
</ul>
</div>
`;
  updateContent(academicContent);
}

// Student Life
function student() {
  const studentContent = `
<h2>Student Life</h2>
<div class="js-js">
<p class="js">At Pace University, we believe that education extends beyond the classroom.
Our vibrant student community offers numerous clubs, sports, and cultural activities
that enhance the student experience.</p>
</div>
<div class="amaze">
<ul>
<li class="text">Over 100 student-run clubs and organizations</li>
<li class="text">Intramural and varsity sports teams</li>
<li class="text">On-campus housing and dining options</li>
<li class="text">Events and student leadership opportunities</li>
</ul>
</div>`;
  updateContent(studentContent);
}

// Cost and Financial Aid
function cost() {
  const costContent = `
<h2>Cost and Financial Aid</h2>
<div class="js-js">
<p class="js">Pace University is committed to making education affordable and accessible.
We offer various forms of financial assistance, including scholarships, grants, work-study programs,
and student loans.</p>
</div>
<div class="amaze">


<ul>
<li class="text">Tuition and fees vary by program and level of study.</li>
<li class="text">Merit-based scholarships for outstanding students.</li>
<li class="text">Need-based financial aid for eligible students.</li>
<li class="text">Work-study opportunities on campus.</li>
</ul>
</div>`;
  updateContent(costContent);
}

// Alumni Success
function alumni() {
  const alumniContent = `
<h2>Alumni Success</h2>
<div class="js-js">
<p class="js">Pace University is proud of its alumni, who have achieved great success across various industries.
Our graduates work in top companies and organizations around the world, making an impact in business,
law, arts, technology, and beyond.</p>
</div>
<div class="amaze">


<ul>
<li class="text">Noam Bardin - CEO of a leading tech firm</li>
<li class="text">Paul Humphreys - Partner at a top law firm</li>
<li class="text">Paul Dano - Renowned artist and entrepreneur</li>
<li class="text">Thomas Ammazzalorso - Education advocate and leader</li>
</ul>
</div>`;
  updateContent(alumniContent);
}
