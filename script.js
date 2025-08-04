const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const searchForm = document.getElementById('searchForm');

let searchableContent = [];

function populateSearchableContent() {
    searchableContent = [
        {
            title: "Home Page",
            url: "/home/index.html",
            keywords: "home, main page, uniready, welcome, new zealand universities, student life, university admission, help resources"
        },
        {
            title: "University Entrance Requirements (Main)",
            url: "../universityEntrance/universityEntrance.html",
            keywords: "university entrance, NCEA, level 3, credits, literacy, numeracy, requirements, what you need to get in, admission criteria"
        },
        {
            title: "University Entrance - NCEA Level 3",
            url: "../universityEntrance/universityEntrance.html#ncea-level3",
            keywords: "NCEA Level 3, entrance requirements, NCEA credits"
        },
        {
            title: "University Entrance - Approved Subjects",
            url: "../universityEntrance/universityEntrance.html#approved-subjects",
            keywords: "approved subjects, 14 credits, subject requirements"
        },
        {
            title: "University Entrance - Literacy",
            url: "../universityEntrance/universityEntrance.html#literacy-credits",
            keywords: "literacy credits, reading, writing, 10 literacy credits"
        },
        {
            title: "University Entrance - Numeracy",
            url: "../universityEntrance/universityEntrance.html#numeracy-credits",
            keywords: "numeracy credits, 10 numeracy credits"
        },
        {
            title: "University Entrance - Specific Programs",
            url: "../universityEntrance/universityEntrance.html#specific-programs",
            keywords: "medicine, law, engineering, higher entry requirements, extra assessments, program specific"
        },
        {
            title: "Scholarships (Overview)",
            url: "../scholarships/scholarships.html",
            keywords: "scholarships, how they work, how to get one, financial aid, funding, tuition, support"
        },
        {
            title: "Scholarships - Types",
            url: "../scholarships/scholarships.html#types-of-scholarships",
            keywords: "types of scholarships, academic, sports, cultural, equity, māori, pasifika, merit, talent"
        },
        {
            title: "Scholarships - Where to Find",
            url: "../scholarships/scholarships.html#where-to-find",
            keywords: "find scholarships, universities official websites, StudyLink, NZ Government, private organisations, companies"
        },
        {
            title: "Scholarships - Application Tips",
            url: "../scholarships/scholarships.html#application-tips",
            keywords: "scholarship application tips, start early, deadlines, personal statement, recommendation letters, meet criteria"
        },
        {
            title: "NZ Universities (Overview)",
            url: "../nzUniversities/nzUniversities.html",
            keywords: "new zealand universities, where to study, list of universities, top universities NZ"
        },
        {
            title: "University of Auckland",
            url: "../nzUniversities/nzUniversities.html#uoa",
            keywords: "university of auckland, largest university, research, Auckland city"
        },
        {
            title: "Victoria University of Wellington",
            url: "../nzUniversities/nzUniversities.html#vuw",
            keywords: "victoria university of wellington, law, humanities, Wellington city"
        },
        {
            title: "University of Canterbury",
            url: "../nzUniversities/nzUniversities.html#uoc",
            keywords: "university of canterbury, engineering, science, Christchurch"
        },
        {
            title: "University of Otago",
            url: "../nzUniversities/nzUniversities.html#uoo",
            keywords: "university of otago, health sciences, student life, Dunedin"
        },
        {
            title: "Massey University",
            url: "../nzUniversities/nzUniversities.html#massey",
            keywords: "massey university, distance learning, agriculture, veterinary science, Palmerston North, Albany"
        },
        {
            title: "Auckland University of Technology (AUT)",
            url: "../nzUniversities/nzUniversities.html#aut",
            keywords: "auckland university of technology, AUT, innovative, modern, practical, Auckland city"
        },
        {
            title: "Lincoln University",
            url: "../nzUniversities/nzUniversities.html#lincoln",
            keywords: "lincoln university, environment, agribusiness, land-based, Christchurch"
        },
        {
            title: "University of Waikato",
            url: "../nzUniversities/nzUniversities.html#uow",
            keywords: "university of waikato, IT, business, Hamilton"
        },
        {
            title: "Finance and Accommodation (Overview)",
            url: "../finance&Accommodation/finance&Accommodation.html",
            keywords: "finance, accommodation, living costs, housing, budgeting, student loans, expenses"
        },
        {
            title: "Finance and Accommodation - Student Loans & Allowances",
            url: "../finance&Accommodation/finance&Accommodation.html#student-loans",
            keywords: "student loans, student allowances, StudyLink, government support, financial assistance"
        },
        {
            title: "Finance and Accommodation - Accommodation Options",
            url: "../finance&Accommodation/finance&Accommodation.html#accommodation-options",
            keywords: "accommodation options, halls of residence, flatting, private rentals, homestay, student housing"
        },
        {
            title: "Finance and Accommodation - Budgeting & Living Costs",
            url: "../finance&Accommodation/finance&Accommodation.html#budgeting",
            keywords: "budgeting, living costs, managing money, expenses, rent, utilities, food, transport"
        },
        {
            title: "University Life (Overview)",
            url: "../universityLife/universityLife.html",
            keywords: "university life, what to expect, student experience, campus activities, academic life"
        },
        {
            title: "University Life - Student Clubs & Societies",
            url: "../universityLife/universityLife.html#student-clubs",
            keywords: "student clubs, societies, cultural clubs, academic clubs, sports clubs, extracurricular activities, making friends"
        },
        {
            title: "University Life - Support Services",
            url: "../universityLife/universityLife.html#support-services",
            keywords: "support services, health, mental well-being, academic help, counselling, disability support"
        },
        {
            title: "University Life - Campus Facilities",
            url: "../universityLife/universityLife.html#campus-facilities",
            keywords: "campus facilities, cafes, libraries, study spaces, recreation centers, student union"
        },
        {
            title: "University Life - Events & Activities",
            url: "../universityLife/universityLife.html#events-activities",
            keywords: "events, activities, uni games, music festivals, networking events, social life"
        },
        {
            title: "International Students (Overview)",
            url: "../internationalStudents/internationalStudents.html",
            keywords: "international students, guide, overseas students, moving to NZ, studying in New Zealand"
        },
        {
            title: "International Students - Visa Requirements",
            url: "../internationalStudents/internationalStudents.html#visa-requirements",
            keywords: "visa requirements, student visa, Immigration NZ, proof of funds, health insurance, travel insurance"
        },
        {
            title: "International Students - English Language Requirements",
            url: "../internationalStudents/internationalStudents.html#english-requirements",
            keywords: "english language requirements, IELTS, TOEFL, recognized tests, english proficiency"
        },
        {
            title: "International Students - Adjusting to Life in NZ",
            url: "../internationalStudents/internationalStudents.html#adjusting-to-nz",
            keywords: "adjusting to NZ, life in new zealand, student groups, kiwi culture, local food, public transport"
        },
        {
            title: "FAQ's (Overview)",
            url: "../FAQ's/FAQ's.html",
            keywords: "FAQ's, frequently asked questions, common questions, answers, help, resources"
        },
        {
            title: "FAQ's - University Admission",
            url: "../FAQ's/FAQ's.html#faq-admission",
            keywords: "faq admission, how to apply, application process, entry requirements, what do I need"
        },
        {
            title: "FAQ's - Student Loans and Allowances",
            url: "../FAQ's/FAQ's.html#faq-loans",
            keywords: "faq student loans, faq student allowances, how to get money for university, funding, financial support"
        },
        {
            title: "FAQ's - Changing Courses or Universities",
            url: "../FAQ's/FAQ's.html#faq-changes",
            keywords: "faq changing courses, faq changing universities, course transfer, university transfer, changing mind"
        },
        {
            title: "FAQ's - Student Support",
            url: "../FAQ's/FAQ's.html#faq-support",
            keywords: "faq student support, help services, academic help, personal support"
        },
        {
            title: "FAQ's - Accommodation",
            url: "../FAQ's/FAQ's.html#faq-accommodation",
            keywords: "faq accommodation, where to live, student housing, flatting, halls"
        },
        {
            title: "Contact Us",
            url: "#",
            keywords: "contact, email, phone, address, get in touch"
        }
    ];
}

populateSearchableContent();

function searchMaterial(event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    resultsDiv.innerHTML = '';

    if (query.length === 0) {
        resultsDiv.style.display = 'none';
        return;
    }

    const filteredResults = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query)
    );

    if (filteredResults.length > 0) {
        const ul = document.createElement('ul');
        ul.classList.add('search-results-list');

        filteredResults.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;

            if (item.targetId) {
                a.dataset.targetId = item.targetId;
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        resultsDiv.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    if (!resultsDiv.contains(event.target) && event.target !== searchInput && !searchForm.contains(event.target)) {
        resultsDiv.style.display = 'none';
    }
});

resultsDiv.addEventListener('click', function(event) {
    const targetLink = event.target.closest('a');
    if (targetLink) {
        event.preventDefault();

        const url = new URL(targetLink.href);
        const targetId = targetLink.dataset.targetId;

        if (url.pathname === window.location.pathname || url.pathname === '/home/index.html' && window.location.pathname === '/') {
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    console.warn(`Element with ID '${targetId}' not found on current page.`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            window.location.href = targetId ? `${url.pathname}${url.search}#${targetId}` : url.href;
        }
        resultsDiv.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });

    const holographicLinks = document.querySelectorAll('.holographic-animation');
    holographicLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.setProperty('--x', '50%');
            link.style.setProperty('--y', '50%');
        });
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            link.style.setProperty('--x', `${x}px`);
            link.style.setProperty('--y', `${y}px`);
        });
    });
});