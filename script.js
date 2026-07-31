// =============================================
// MOBILE MENU TOGGLE
// =============================================
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');
menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

// =============================================
// DATA
// =============================================
const services = [
    { icon: '<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.34l-.77-.76a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 9.61 3.35 11.76L12 21l8.65-9.24c2.02-2.15 1.89-5.06-.23-7.18z"/>', title: 'Cardiology',    desc: 'Comprehensive heart care from diagnosis through long-term treatment.' },
    { icon: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>', title: 'Neurology',     desc: 'Expert care for conditions affecting the brain, spine and nerves.' },
    { icon: '<path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            title: 'Orthopedics',   desc: 'Treatment for bones, joints, ligaments, tendons and muscles.' },
    { icon: '<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5 0 .8-.5 1.5-1.5 1.5"/>',                                                                                                                                                                                                                                                                                                                    title: 'Pediatrics',    desc: 'Gentle, attentive care for infants, children and teens.' },
    { icon: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',                                                                                                                                                                                                                                                                                                                                                                                                                                                                            title: 'Ophthalmology', desc: 'Complete eye exams, vision correction and surgical care.' },
    { icon: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-2 2"/><path d="m17.5 13.5 2 2"/>',                                                                                                                                                                                                                                                                                                                                                                              title: 'Vaccination',   desc: 'Routine and travel immunizations for every age group.' },
];

const doctors = [
    { name: 'Dr. Sarah Bennett',  role: 'Cardiologist',       initials: 'SB' },
    { name: 'Dr. James Whitfield',role: 'Neurologist',        initials: 'JW' },
    { name: 'Dr. Amara Okafor',   role: 'Pediatrician',       initials: 'AO' },
    { name: 'Dr. Marcus Lee',     role: 'Orthopedic Surgeon', initials: 'ML' },
];

const testimonials = [
    { name: 'Hannah Price',  text: "The doctors took the time to actually listen. I finally got a diagnosis after months of guessing elsewhere.", rating: 5 },
    { name: 'Daniel Osei',   text: "Booking was simple and the clinic ran right on schedule. Best appointment experience I've had.",              rating: 5 },
    { name: 'Priya Nair',    text: "Friendly staff, clean facility, and my pediatrician was wonderful with my daughter.",                         rating: 5 },
];

// =============================================
// RENDER: SERVICES
// =============================================
const servicesGrid = document.getElementById('servicesGrid');
services.forEach(s => {
    servicesGrid.innerHTML += `
      <div class="service-card">
        <div class="icon-wrap"><svg class="icon" viewBox="0 0 24 24">${s.icon}</svg></div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="#" class="learn-more">Learn more
          <svg class="icon" style="width:15px;height:15px;" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>`;
});

// =============================================
// RENDER: FOOTER DEPARTMENTS
// =============================================
const footerServices = document.getElementById('footerServices');
services.slice(0, 4).forEach(s => {
    footerServices.innerHTML += `<li><a href="#services">${s.title}</a></li>`;
});

// =============================================
// RENDER: DOCTORS
// =============================================
const doctorsGrid = document.getElementById('doctorsGrid');
doctors.forEach(d => {
    doctorsGrid.innerHTML += `
      <div class="doctor-card">
        <div class="avatar">${d.initials}</div>
        <div class="doctor-body">
          <h3>${d.name}</h3>
          <p class="role">${d.role}</p>
          <div class="doctor-social">
            <svg class="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg class="icon" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            <svg class="icon" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
        </div>
      </div>`;
});

// =============================================
// RENDER: TESTIMONIALS
// =============================================
const testimonialsGrid = document.getElementById('testimonialsGrid');
testimonials.forEach(t => {
    let stars = '';
    for (let i = 0; i < t.rating; i++) {
        stars += `<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }
    testimonialsGrid.innerHTML += `
      <div class="t-card">
        <div class="t-stars">${stars}</div>
        <p class="quote">&ldquo;${t.text}&rdquo;</p>
        <p class="name">${t.name}</p>
      </div>`;
});

// =============================================
// BOOKING MODAL
// =============================================
let currentPage  = 1;
const totalPages = 3;
let selectedTime = '';

const overlay   = document.getElementById('bookingModal');
const btnNext   = document.getElementById('btnNext');
const btnBack   = document.getElementById('btnBack');
const modalFooter = document.getElementById('modalFooter');
const formBody  = document.getElementById('formBody');
const stepsBar  = document.getElementById('stepsBar');
const successV  = document.getElementById('successView');
const timeGrid  = document.getElementById('timeGrid');
const timeError = document.getElementById('timeError');

// Set minimum date for appointment picker to today
document.getElementById('apptDate').min = new Date().toISOString().split('T')[0];

// Open modal — all .btn-book buttons trigger this
document.querySelectorAll('.btn-book').forEach(btn => {
    btn.addEventListener('click', openModal);
});

// Close modal
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function openModal() {
    resetModal();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Time slot selection
timeGrid.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        timeGrid.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTime = btn.dataset.time;
        timeError.style.display = 'none';
    });
});

// Next / Back navigation
btnNext.addEventListener('click', () => {
    if (currentPage < totalPages) {
        if (!validatePage(currentPage)) return;
        goToPage(currentPage + 1);
    } else {
        submitForm();
    }
});

btnBack.addEventListener('click', () => {
    if (currentPage > 1) goToPage(currentPage - 1);
});

function goToPage(n) {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = n;
    document.getElementById(`page${currentPage}`).classList.add('active');
    updateSteps();
    updateFooterNav();
    if (n === totalPages) buildSummary();
}

function updateSteps() {
    document.querySelectorAll('.modal-step').forEach(s => {
        const sn = +s.dataset.step;
        s.classList.toggle('active', sn === currentPage);
        s.classList.toggle('done',   sn <  currentPage);
    });
    document.getElementById('line1').classList.toggle('done', currentPage > 1);
    document.getElementById('line2').classList.toggle('done', currentPage > 2);
}

function updateFooterNav() {
    btnBack.style.visibility = currentPage > 1 ? 'visible' : 'hidden';

    const arrowNext = `<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
    const arrowCheck = `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;

    if (currentPage === totalPages) {
        btnNext.innerHTML = 'Confirm Booking ' + arrowCheck;
    } else {
        btnNext.innerHTML = 'Continue ' + arrowNext;
    }
}

// ---- Validation ----
function validatePage(page) {
    let ok = true;
    if (page === 1) {
        ok = requireField('f-fname', 'fname')   & ok;
        ok = requireField('f-lname', 'lname')   & ok;
        ok = requireEmail('f-email', 'email')   & ok;
        ok = requireField('f-phone', 'phone')   & ok;
        ok = requireField('f-dob',   'dob')     & ok;
        ok = requireSelect('f-gender','gender') & ok;
    }
    if (page === 2) {
        ok = requireSelect('f-dept', 'dept')     & ok;
        ok = requireField('f-date',  'apptDate') & ok;
        ok = requireSelect('f-type', 'visitType')& ok;
        if (!selectedTime) {
            timeError.style.display = 'block';
            ok = false;
        }
    }
    return !!ok;
}

function requireField(wrapperId, inputId) {
    const wrap = document.getElementById(wrapperId);
    const val  = document.getElementById(inputId).value.trim();
    wrap.classList.toggle('error', !val);
    return !!val;
}

function requireEmail(wrapperId, inputId) {
    const wrap  = document.getElementById(wrapperId);
    const val   = document.getElementById(inputId).value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    wrap.classList.toggle('error', !valid);
    return valid;
}

function requireSelect(wrapperId, inputId) {
    const wrap = document.getElementById(wrapperId);
    const val  = document.getElementById(inputId).value;
    wrap.classList.toggle('error', !val);
    return !!val;
}

// ---- Build summary ----
function buildSummary() {
    const fname  = document.getElementById('fname').value.trim();
    const lname  = document.getElementById('lname').value.trim();
    const email  = document.getElementById('email').value.trim();
    const phone  = document.getElementById('phone').value.trim();
    const dept   = document.getElementById('dept').value;
    const doctor = document.getElementById('doctor').value || 'No preference';
    const rawDate= document.getElementById('apptDate').value;
    const vtype  = document.getElementById('visitType').value;

    const fmtDate = rawDate
        ? new Date(rawDate + 'T00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
        : '—';

    document.getElementById('summaryCard').innerHTML = `
        <div class="summary-row"><span>Patient</span>    <span>${fname} ${lname}</span></div>
        <div class="summary-row"><span>Email</span>      <span>${email}</span></div>
        <div class="summary-row"><span>Phone</span>      <span>${phone}</span></div>
        <div class="summary-row"><span>Department</span> <span>${dept}</span></div>
        <div class="summary-row"><span>Doctor</span>     <span>${doctor}</span></div>
        <div class="summary-row"><span>Date</span>       <span>${fmtDate}</span></div>
        <div class="summary-row"><span>Time</span>       <span>${selectedTime}</span></div>
        <div class="summary-row"><span>Visit Type</span> <span>${vtype}</span></div>
    `;
}

// ---- Submit ----
function submitForm() {
    btnNext.disabled    = true;
    btnNext.textContent = 'Submitting…';

    // Simulate an API call — replace with your real fetch() here
    setTimeout(() => {
        formBody.style.display      = 'none';
        modalFooter.style.display   = 'none';
        stepsBar.style.display      = 'none';
        successV.classList.add('show');
        document.getElementById('refCode').textContent =
            'REF: WVC-' + Math.floor(100000 + Math.random() * 900000);
    }, 1200);
}

// ---- Reset ----
function resetModal() {
    currentPage  = 1;
    selectedTime = '';

    document.querySelectorAll('.form-page').forEach(p => p.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    document.querySelectorAll('.field').forEach(f => f.classList.remove('error'));
    timeGrid.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));

    timeError.style.display = 'none';

    ['fname','lname','email','phone','dob','notes','apptDate'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    ['gender','dept','doctor','visitType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.selectedIndex = 0;
    });

    formBody.style.display    = '';
    modalFooter.style.display = '';
    stepsBar.style.display    = '';
    successV.classList.remove('show');

    btnNext.disabled = false;
    updateSteps();
    updateFooterNav();
}
