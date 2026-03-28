const jobs = {
  vantage: {
    icon: 'fas fa-headset',
    iconBg: '#e8f0fe', iconColor: '#0071e3',
    company: 'Vantage',
    title: 'IT Support Specialist',
    location: 'Dublin, Ireland',
    period: 'April 2023 — Present',
    type: 'Full-time',
    responsibilities: [
      { icon: 'fas fa-life-ring', bg: '#e8f0fe', color: '#0071e3', text: 'Provide technical support to end-users, troubleshooting hardware, software, and network issues across the organisation.' },
      { icon: 'fas fa-server', bg: '#e8f0fe', color: '#0071e3', text: 'Manage and maintain IT infrastructure, ensuring optimal system performance and security at all times.' },
      { icon: 'fas fa-desktop', bg: '#e8f0fe', color: '#0071e3', text: 'Assist in the deployment and configuration of workstations for new and existing employees.' },
      { icon: 'fas fa-people-group', bg: '#e8f0fe', color: '#0071e3', text: 'Collaborate with cross-functional teams to improve IT processes and operational efficiency.' },
      { icon: 'fas fa-file-lines', bg: '#e8f0fe', color: '#0071e3', text: 'Document technical issues, resolutions, and best practices to enhance overall team knowledge.' },
      { icon: 'fas fa-user-plus', bg: '#e8f0fe', color: '#0071e3', text: 'Support onboarding processes by setting up accounts and ensuring new employees have the tools they need.' },
    ],
    tech: [
      { icon: 'fab fa-windows', label: 'Windows' },
      { icon: 'fas fa-network-wired', label: 'Networking' },
      { icon: 'fas fa-shield-halved', label: 'Security' },
      { icon: 'fas fa-headset', label: 'Helpdesk' },
    ]
  },
  icot: {
    icon: 'fas fa-university',
    iconBg: '#e9fae9', iconColor: '#16a34a',
    company: 'ICOT College Ireland',
    title: 'IT Specialist',
    location: 'Dublin, Ireland',
    period: 'December 2020 — August 2025',
    type: 'Full-time · 4 yrs 9 mos',
    responsibilities: [
      { icon: 'fas fa-lock', bg: '#e9fae9', color: '#16a34a', text: 'Managed Group Policy Objects (GPO) to enforce security policies and optimise user access across the college network.' },
      { icon: 'fas fa-server', bg: '#e9fae9', color: '#16a34a', text: 'Set up and maintained Windows Servers including Active Directory, DNS, and DHCP configurations.' },
      { icon: 'fas fa-vpn-key', bg: '#e9fae9', color: '#16a34a', text: 'Configured and managed VPNs for workstations and infrastructure networks, ensuring secure remote access.' },
      { icon: 'fas fa-life-ring', bg: '#e9fae9', color: '#16a34a', text: 'Provided IT support and troubleshooting for staff and students, ensuring smooth operation of all systems.' },
      { icon: 'fas fa-wifi', bg: '#e9fae9', color: '#16a34a', text: 'Oversaw network infrastructure including Wi-Fi, firewalls, and security protocols.' },
      { icon: 'fas fa-camera', bg: '#e9fae9', color: '#16a34a', text: 'Maintained and supported CCTV, access control systems, and other security-related IT infrastructure.' },
      { icon: 'fas fa-rocket', bg: '#e9fae9', color: '#16a34a', text: 'Assisted in deployment of new technologies to improve efficiency and user experience across the campus.' },
    ],
    tech: [
      { icon: 'fas fa-users-gear', label: 'Active Directory' },
      { icon: 'fas fa-globe', label: 'DNS / DHCP' },
      { icon: 'fas fa-vpn-key', label: 'VPN' },
      { icon: 'fas fa-camera', label: 'CCTV' },
      { icon: 'fas fa-fire', label: 'Firewall' },
      { icon: 'fab fa-windows', label: 'Windows Server' },
    ]
  },
  website365: {
    icon: 'fas fa-code',
    iconBg: '#fef3c7', iconColor: '#d97706',
    company: 'Website 365',
    title: 'Frontend Developer',
    location: 'Dublin, Ireland',
    period: 'June 2021 — May 2023',
    type: 'Full-time · 2 yrs',
    responsibilities: [
      { icon: 'fas fa-laptop-code', bg: '#fef3c7', color: '#d97706', text: 'Developed and maintained client-facing web solutions using modern frontend technologies.' },
      { icon: 'fas fa-mobile-screen', bg: '#fef3c7', color: '#d97706', text: 'Built fully responsive, cross-browser compatible interfaces ensuring great user experience on all devices.' },
      { icon: 'fas fa-palette', bg: '#fef3c7', color: '#d97706', text: 'Collaborated with design teams to translate visual concepts into pixel-perfect code.' },
      { icon: 'fas fa-bolt', bg: '#fef3c7', color: '#d97706', text: 'Optimised web performance and load times across multiple client projects.' },
    ],
    tech: [
      { icon: 'fab fa-html5', label: 'HTML5' },
      { icon: 'fab fa-css3-alt', label: 'CSS3' },
      { icon: 'fab fa-js', label: 'JavaScript' },
      { icon: 'fas fa-mobile', label: 'Responsive' },
    ]
  },
  brainnest: {
    icon: 'fas fa-brain',
    iconBg: '#fce7f3', iconColor: '#db2777',
    company: 'Brainnest',
    title: 'Frontend Developer Industry Trainee',
    location: 'Berlin, Germany',
    period: 'August 2022 — September 2022',
    type: 'Internship · 2 mos',
    responsibilities: [
      { icon: 'fas fa-graduation-cap', bg: '#fce7f3', color: '#db2777', text: 'Participated in an intensive industry training programme focused on real-world frontend development practices.' },
      { icon: 'fas fa-people-group', bg: '#fce7f3', color: '#db2777', text: 'Worked in a team environment on client projects, gaining experience in agile workflows.' },
      { icon: 'fas fa-code-branch', bg: '#fce7f3', color: '#db2777', text: 'Applied modern JavaScript frameworks and best practices under the guidance of senior developers.' },
    ],
    tech: [
      { icon: 'fab fa-js', label: 'JavaScript' },
      { icon: 'fab fa-react', label: 'React' },
      { icon: 'fas fa-code-branch', label: 'Git' },
    ]
  },
  istanbel: {
    icon: 'fas fa-utensils',
    iconBg: '#fdf2f8', iconColor: '#9d174d',
    company: 'Istanbel Buffet House',
    title: 'Restaurant Manager',
    location: 'Dublin, Ireland',
    period: 'May 2017 — August 2020',
    type: 'Full-time · 3 yrs 4 mos',
    responsibilities: [
      { icon: 'fas fa-chart-line', bg: '#fdf2f8', color: '#9d174d', text: 'Led daily operations of a busy restaurant, managing staff scheduling and performance.' },
      { icon: 'fas fa-people-group', bg: '#fdf2f8', color: '#9d174d', text: 'Managed and motivated a team, fostering a positive, customer-first working environment.' },
      { icon: 'fas fa-star', bg: '#fdf2f8', color: '#9d174d', text: 'Ensured consistently high-quality dining experience and customer satisfaction standards.' },
      { icon: 'fas fa-boxes-stacked', bg: '#fdf2f8', color: '#9d174d', text: 'Oversaw inventory management, supplier relationships and cost control.' },
    ],
    tech: [
      { icon: 'fas fa-users', label: 'Team Leadership' },
      { icon: 'fas fa-chart-bar', label: 'Operations' },
      { icon: 'fas fa-hand-holding-heart', label: 'Customer Service' },
    ]
  },
  goldentech: {
    icon: 'fas fa-screwdriver-wrench',
    iconBg: '#fffbeb', iconColor: '#b45309',
    company: 'Goldentech',
    title: 'IT Technician',
    location: 'São Paulo, Brazil',
    period: 'August 2014 — February 2017',
    type: 'Full-time · 2 yrs 7 mos',
    responsibilities: [
      { icon: 'fas fa-microchip', bg: '#fffbeb', color: '#b45309', text: 'Performed hardware diagnostics, repair, and maintenance on desktops, laptops, and peripherals.' },
      { icon: 'fas fa-download', bg: '#fffbeb', color: '#b45309', text: 'Installed, configured, and maintained operating systems and software applications for clients.' },
      { icon: 'fas fa-network-wired', bg: '#fffbeb', color: '#b45309', text: 'Assisted with basic network setup and troubleshooting for small business clients.' },
      { icon: 'fas fa-headset', bg: '#fffbeb', color: '#b45309', text: 'Delivered on-site and remote technical support with a focus on quick resolution times.' },
    ],
    tech: [
      { icon: 'fas fa-microchip', label: 'Hardware' },
      { icon: 'fab fa-windows', label: 'Windows' },
      { icon: 'fas fa-tools', label: 'Repair' },
      { icon: 'fas fa-network-wired', label: 'Networking' },
    ]
  }
};

function openModal(id) {
  const j = jobs[id];
  const heroEl = document.getElementById('modalHero');
  const bodyEl = document.getElementById('modalBody');

  heroEl.innerHTML = `
    <button class="modal-close" onclick="closeModal()"><i class="fas fa-xmark"></i></button>
    <div class="modal-icon-title">
      <div class="modal-icon" style="background:${j.iconBg};color:${j.iconColor}"><i class="${j.icon}"></i></div>
      <div>
        <div class="modal-company">${j.company}</div>
        <div class="modal-title">${j.title}</div>
      </div>
    </div>
    <div class="modal-meta">
      <div class="modal-meta-item"><i class="fas fa-calendar-alt"></i>${j.period}</div>
      <div class="modal-meta-item"><i class="fas fa-briefcase"></i>${j.type}</div>
      <div class="modal-meta-item"><i class="fas fa-location-dot"></i>${j.location}</div>
    </div>
  `;

  const respItems = j.responsibilities.map(r => `
    <li>
      <div class="resp-icon" style="background:${r.bg};color:${r.color}"><i class="${r.icon}"></i></div>
      <span>${r.text}</span>
    </li>
  `).join('');

  const techItems = j.tech.map(t => `
    <div class="tech-badge"><i class="${t.icon}" style="color:${j.iconColor}"></i>${t.label}</div>
  `).join('');

  bodyEl.innerHTML = `
    <div class="modal-section">
      <div class="modal-section-title">Responsibilities</div>
      <ul class="responsibility-list">${respItems}</ul>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Technologies & Skills</div>
      <div class="tech-grid">${techItems}</div>
    </div>
  `;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Scroll nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));
