// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

// ---------- Data ----------
const services = [
    { icon: '<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.34l-.77-.76a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 9.61 3.35 11.76L12 21l8.65-9.24c2.02-2.15 1.89-5.06-.23-7.18z"/>', title: 'Cardiology', desc: 'Comprehensive heart care from diagnosis through long-term treatment.' },
    { icon: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>', title: 'Neurology', desc: 'Expert care for conditions affecting the brain, spine and nerves.' },
    { icon: '<path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>', title: 'Orthopedics', desc: 'Treatment for bones, joints, ligaments, tendons and muscles.' },
    { icon: '<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5 0 .8-.5 1.5-1.5 1.5"/>', title: 'Pediatrics', desc: 'Gentle, attentive care for infants, children and teens.' },
    { icon: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>', title: 'Ophthalmology', desc: 'Complete eye exams, vision correction and surgical care.' },
    { icon: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-2 2"/><path d="m17.5 13.5 2 2"/>', title: 'Vaccination', desc: 'Routine and travel immunizations for every age group.' },
];

const doctors = [
    { name: 'Dr. Sarah Bennett', role: 'Cardiologist', initials: 'SB' },
    { name: 'Dr. James Whitfield', role: 'Neurologist', initials: 'JW' },
    { name: 'Dr. Amara Okafor', role: 'Pediatrician', initials: 'AO' },
    { name: 'Dr. Marcus Lee', role: 'Orthopedic Surgeon', initials: 'ML' },
];

const testimonials = [
    { name: 'Hannah Price', text: "The doctors took the time to actually listen. I finally got a diagnosis after months of guessing elsewhere.", rating: 5 },
    { name: 'Daniel Osei', text: "Booking was simple and the clinic ran right on schedule. Best appointment experience I've had.", rating: 5 },
    { name: 'Priya Nair', text: "Friendly staff, clean facility, and my pediatrician was wonderful with my daughter.", rating: 5 },
];

// ---------- Render services ----------
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

// ---------- Render footer departments ----------
const footerServices = document.getElementById('footerServices');
services.slice(0, 4).forEach(s => {
    footerServices.innerHTML += `<li><a href="#services">${s.title}</a></li>`;
});

// ---------- Render doctors ----------
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

// ---------- Render testimonials ----------
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