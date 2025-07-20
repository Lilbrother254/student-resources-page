const resources = [
    { 
        title: 'Virtual Orientation Tour', 
        description: 'A guided tour of the campus for our new students.', 
        category: 'new-students', 
        icon: 'fa-solid fa-vr-cardboard',
        buttonText: 'Start Tour',
        modalContent: '<p>Welcome to our virtual orientation! Explore the campus, facilities, and get to know your new home. The tour is available 24/7.</p><iframe width="100%" height="315" src="https://www.youtube.com/embed/dz8U8d4ZfkI" frameborder="0" allowfullscreen></iframe>' 
    },
    { 
        title: 'Bursary Application', 
        description: 'Apply for financial assistance through the university bursary.', 
        category: 'financial', 
        icon: 'fa-solid fa-hand-holding-dollar',
        buttonText: 'Apply Now',
        modalContent: `
            <h2>Bursary Application Form</h2>
            <form>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="reg-no">Registration Number</label>
                    <input type="text" id="reg-no" placeholder="C026-01-0001/2025">
                </div>
                <div class="form-group">
                    <label for="reason">Reason for Application</label>
                    <textarea id="reason" rows="4" placeholder="Briefly explain your need for financial assistance."></textarea>
                </div>
                <div class="form-group">
                    <button type="submit">Submit Application</button>
                </div>
            </form>
        `
    },
    { 
        title: 'Student Letters', 
        description: 'Request for official student letters for various purposes.', 
        category: 'administrative', 
        icon: 'fa-solid fa-file-signature',
        buttonText: 'Request Letter',
        modalContent: `
            <h2>Request a Student Letter</h2>
            <form>
                <div class="form-group">
                    <label for="letter-type">Type of Letter</label>
                    <select id="letter-type">
                        <option>Recommendation Letter</option>
                        <option>Confirmation of Studentship</option>
                        <option>English as Medium of Instruction</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="recipient">Recipient (e.g., Bank, Embassy)</label>
                    <input type="text" id="recipient" placeholder="The Manager, Equity Bank">
                </div>
                <div class="form-group">
                    <button type="submit">Request Letter</button>
                </div>
            </form>
        `
    },
    { 
        title: 'Counselling Services', 
        description: 'Access to professional counselling services for all students.', 
        category: 'new-students', 
        icon: 'fa-solid fa-head-side-virus',
        buttonText: 'Book Session',
        modalContent: '<p>Our counselling services are confidential and free of charge. Book a session with one of our professional counsellors today.</p><button class="btn" style="width:100%; background: var(--primary-color); color: white;">Book a Session</button>' 
    },
    { 
        title: 'Student ID Cards', 
        description: 'Check the list of available student ID cards for collection.', 
        category: 'administrative', 
        icon: 'fa-solid fa-id-card',
        buttonText: 'Check List',
        modalContent: '<h2>Available Student ID Cards</h2><p>Please check the list on the student portal noticeboard for your name. IDs can be collected from the admissions office, Wing B, between 9am and 4pm on weekdays.</p>' 
    },
    { 
        title: 'Contact Update', 
        description: 'Update your contact information to stay connected.', 
        category: 'administrative', 
        icon: 'fa-solid fa-address-book',
        buttonText: 'Update Info',
        modalContent: `
            <h2>Update Your Contact Information</h2>
            <form>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+254 712 345 678">
                </div>
                <div class="form-group">
                    <label for="email">Personal Email Address</label>
                    <input type="email" id="email" placeholder="personal.email@example.com">
                </div>
                <div class="form-group">
                    <button type="submit">Update Contacts</button>
                </div>
            </form>
        `
    },
    { 
        title: 'Eduroam WiFi/Student Email', 
        description: 'Get access to the university\'s WiFi and your student email.', 
        category: 'academic', 
        icon: 'fa-solid fa-wifi',
        buttonText: 'Get Access',
        modalContent: '<h2>Eduroam & Student Email</h2><p>Your student email is your registration number @students.dkut.ac.ke. Use these credentials to access the Eduroam WiFi network across campus. Visit the ICT helpdesk for assistance.</p>' 
    },
    { 
        title: 'Teaching Timetable', 
        description: 'View the teaching timetable for the current semester.', 
        category: 'academic', 
        icon: 'fa-solid fa-calendar-days',
        buttonText: 'View Timetable',
        modalContent: '<h2>Teaching Timetable</h2><p>The teaching timetable is available on the student portal dashboard. Please log in to view your personalized timetable.</p><a href="#" class="btn" style="width:100%; background: var(--primary-color); color: white; text-align: center;">Go to Portal</a>' 
    },
    { 
        title: 'Student ID Application', 
        description: 'Apply for a new student identity card.', 
        category: 'administrative', 
        icon: 'fa-solid fa-id-card-clip',
        buttonText: 'Apply for ID',
        modalContent: `
            <h2>New Student ID Application</h2>
            <p>Use this form if you have lost your ID or it is damaged. A replacement fee of KES 500 is applicable.</p>
            <form>
                <div class="form-group">
                    <label for="reason-id">Reason for Application</label>
                    <select id="reason-id">
                        <option>Lost ID</option>
                        <option>Damaged ID</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="police-abstract">Police Abstract (for lost IDs)</label>
                    <input type="file" id="police-abstract">
                </div>
                <div class="form-group">
                    <button type="submit">Submit Application</button>
                </div>
            </form>
        `
    },
    { 
        title: 'Graduation Booklet', 
        description: 'Download the latest graduation booklet.', 
        category: 'academic', 
        icon: 'fa-solid fa-graduation-cap',
        buttonText: 'Download',
        modalContent: '<h2>Graduation Booklet</h2><p>Download the booklet for the most recent graduation ceremony to see the list of graduates and the ceremony proceedings.</p><a href="#" class="btn" style="width:100%; background: var(--primary-color); color: white; text-align: center;">Download PDF</a>' 
    },
    { 
        title: 'Student Information Handbook', 
        description: 'Access the comprehensive student information handbook.', 
        category: 'academic', 
        icon: 'fa-solid fa-book-open-reader',
        buttonText: 'Read Handbook',
        modalContent: '<h2>Student Handbook</h2><p>The student handbook contains all the rules, regulations, and information you need for your academic journey at DKUT.</p><a href="#" class="btn" style="width:100%; background: var(--primary-color); color: white; text-align: center;">Download Handbook</a>' 
    },
    { 
        title: 'Academic Leave Application', 
        description: 'Apply for a leave of absence from your studies.', 
        category: 'academic', 
        icon: 'fa-solid fa-plane-departure',
        buttonText: 'Apply for Leave',
        modalContent: `
            <h2>Academic Leave Application</h2>
            <form>
                <div class="form-group">
                    <label for="leave-start">Start Date</label>
                    <input type="date" id="leave-start">
                </div>
                <div class="form-group">
                    <label for="leave-end">End Date</label>
                    <input type="date" id="leave-end">
                </div>
                <div class="form-group">
                    <label for="leave-reason">Reason for Leave</label>
                    <textarea id="leave-reason" rows="4" placeholder="Please provide a detailed reason for your leave request."></textarea>
                </div>
                <div class="form-group">
                    <button type="submit">Submit Application</button>
                </div>
            </form>
        `
    },
    { 
        title: 'Student Leave Out', 
        description: 'Apply for a leave out from the university.', 
        category: 'administrative', 
        icon: 'fa-solid fa-person-walking-arrow-right',
        buttonText: 'Apply for Leave Out',
        modalContent: `
            <h2>Student Leave Out Form</h2>
            <form>
                <div class="form-group">
                    <label for="leave-out-date">Date of Departure</label>
                    <input type="date" id="leave-out-date">
                </div>
                <div class="form-group">
                    <label for="return-date">Expected Date of Return</label>
                    <input type="date" id="return-date">
                </div>
                <div class="form-group">
                    <label for="leave-out-reason">Reason for Leaving</label>
                    <input type="text" id="leave-out-reason" placeholder="e.g., Mid-semester break">
                </div>
                <div class="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        `
    }
];

const resourcesGrid = document.querySelector('.resources-grid');
const modal = document.getElementById('resource-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const themeToggle = document.getElementById('theme-toggle');

function setGlow(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    const glowColor = isDark ? 'rgba(77, 182, 172, 0.3)' : 'rgba(0, 121, 107, 0.2)';
    document.querySelectorAll('.filter-btn.active').forEach(btn => {
        btn.style.boxShadow = `0 4px 15px ${glowColor}`;
    });
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
    setGlow(theme);
}

function displayResources(filter = 'all') {
    resourcesGrid.innerHTML = '';
    const filteredResources = filter === 'all' ? resources : resources.filter(r => r.category === filter);

    filteredResources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.dataset.category = resource.category;
        card.innerHTML = `
            <i class="icon ${resource.icon}"></i>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="#" class="btn" data-modal-content='${JSON.stringify(resource.modalContent)}'>${resource.buttonText}</a>
        `;
        resourcesGrid.appendChild(card);
    });
}

// Event Listeners
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        displayResources(button.dataset.filter);
        setGlow(localStorage.getItem('theme') || 'light');
    });
});

resourcesGrid.addEventListener('click', e => {
    if (e.target.classList.contains('btn')) {
        e.preventDefault();
        const content = JSON.parse(e.target.dataset.modalContent);
        modalBody.innerHTML = content;
        modal.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

// Initial Setup
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
displayResources();