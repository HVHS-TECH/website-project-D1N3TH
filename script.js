/*-----------------------------------------------------------*/
// script.js
/*-----------------------------------------------------------*/
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const searchForm = document.getElementById('searchForm');

let searchableContent = [];

/**
 * Contains all searchable content
 */
function populateSearchableContent() {
    searchableContent = [
        {
            title: "Home Page",
            url: "index.html",
            keywords: "home, main page, uniready, welcome, new zealand universities, student life, university admission, help resources"
        },
        {
            title: "University Entrance Requirements (Main)",
            url: "pages/universityEntrance.html",
            keywords: "university entrance, NCEA, level 3, credits, literacy, numeracy, requirements, what you need to get in, admission criteria"
        },
        {
            title: "University Entrance - NCEA Level 3",
            url: "pages/universityEntrance.html#ncea-level3",
            keywords: "NCEA Level 3, entrance requirements, NCEA credits"
        },
        {
            title: "University Entrance - Approved Subjects",
            url: "pages/universityEntrance.html#approved-subjects",
            keywords: "approved subjects, 14 credits, subject requirements"
        },
        {
            title: "University Entrance - Literacy",
            url: "pages/universityEntrance.html#literacy-credits",
            keywords: "literacy credits, reading, writing, 10 literacy credits"
        },
        {
            title: "University Entrance - Numeracy",
            url: "pages/universityEntrance.html#numeracy-credits",
            keywords: "numeracy credits, 10 numeracy credits"
        },
        {
            title: "University Entrance - Specific Programs",
            url: "pages/universityEntrance.html#specific-programs",
            keywords: "medicine, law, engineering, higher entry requirements, extra assessments, program specific"
        },
        {
            title: "Scholarships (Overview)",
            url: "pages/scholarships.html",
            keywords: "scholarships, how they work, how to get one, financial aid, funding, tuition, support"
        },
        {
            title: "Scholarships - Types",
            url: "pages/scholarships.html#types-of-scholarships",
            keywords: "types of scholarships, academic, sports, cultural, equity, māori, pasifika, merit, talent"
        },
        {
            title: "Scholarships - Where to Find",
            url: "pages/scholarships.html#where-to-find",
            keywords: "find scholarships, universities official websites, StudyLink, NZ Government, private organisations, companies"
        },
        {
            title: "Scholarships - Application Tips",
            url: "pages/scholarships.html#application-tips",
            keywords: "scholarship application tips, start early, deadlines, personal statement, recommendation letters, meet criteria"
        },
        {
            title: "NZ Universities (Overview)",
            url: "pages/nzUniversities.html",
            keywords: "new zealand universities, where to study, list of universities, top universities NZ"
        },
        {
            title: "University of Auckland",
            url: "pages/nzUniversities.html#uoa",
            keywords: "university of auckland, largest university, research, Auckland city"
        },
        {
            title: "Victoria University of Wellington",
            url: "pages/nzUniversities.html#vuw",
            keywords: "victoria university of wellington, law, humanities, Wellington city"
        },
        {
            title: "University of Canterbury",
            url: "pages/nzUniversities.html#uoc",
            keywords: "university of canterbury, engineering, science, Christchurch"
        },
        {
            title: "University of Otago",
            url: "pages/nzUniversities.html#uoo",
            keywords: "university of otago, health sciences, student life, Dunedin"
        },
        {
            title: "Massey University",
            url: "pages/nzUniversities.html#massey",
            keywords: "massey university, distance learning, agriculture, veterinary science, Palmerston North, Albany"
        },
        {
            title: "Auckland University of Technology (AUT)",
            url: "pages/nzUniversities.html#aut",
            keywords: "auckland university of technology, AUT, innovative, modern, practical, Auckland city"
        },
        {
            title: "Lincoln University",
            url: "pages/nzUniversities.html#lincoln",
            keywords: "lincoln university, environment, agribusiness, land-based, Christchurch"
        },
        {
            title: "University of Waikato",
            url: "pages/nzUniversities.html#uow",
            keywords: "university of waikato, IT, business, Hamilton"
        },
        {
            title: "Finance and Accommodation (Overview)",
            url: "pages/finance&Accommodation.html",
            keywords: "finance, accommodation, living costs, housing, budgeting, student loans, expenses"
        },
        {
            title: "Finance and Accommodation - Student Loans & Allowances",
            url: "pages/finance&Accommodation.html#student-loans",
            keywords: "student loans, student allowances, StudyLink, government support, financial assistance"
        },
        {
            title: "Finance and Accommodation - Accommodation Options",
            url: "pages/finance&Accommodation.html#accommodation-options",
            keywords: "accommodation options, halls of residence, flatting, private rentals, homestay, student housing"
        },
        {
            title: "Finance and Accommodation - Budgeting & Living Costs",
            url: "pages/finance&Accommodation.html#budgeting",
            keywords: "budgeting, living costs, managing money, expenses, rent, utilities, food, transport"
        },
        {
            title: "University Life (Overview)",
            url: "pages/universityLife.html",
            keywords: "university life, what to expect, student experience, campus activities, academic life"
        },
        {
            title: "University Life - Student Clubs & Societies",
            url: "pages/universityLife.html#student-clubs",
            keywords: "student clubs, societies, cultural clubs, academic clubs, sports clubs, extracurricular activities, making friends"
        },
        {
            title: "University Life - Support Services",
            url: "pages/universityLife.html#support-services",
            keywords: "support services, health, mental well-being, academic help, counselling, disability support"
        },
        {
            title: "University Life - Campus Facilities",
            url: "pages/universityLife.html#campus-facilities",
            keywords: "campus facilities, cafes, libraries, study spaces, recreation centers, student union"
        },
        {
            title: "University Life - Events & Activities",
            url: "pages/universityLife.html#events-activities",
            keywords: "events, activities, uni games, music festivals, networking events, social life"
        },
        {
            title: "International Students (Overview)",
            url: "pages/internationalStudents.html",
            keywords: "international students, guide, overseas students, moving to NZ, studying in New Zealand"
        },
        {
            title: "International Students - Visa Requirements",
            url: "pages/internationalStudents.html#visa-requirements",
            keywords: "visa requirements, student visa, Immigration NZ, proof of funds, health insurance, travel insurance"
        },
        {
            title: "International Students - English Language Requirements",
            url: "pages/internationalStudents.html#english-requirements",
            keywords: "english language requirements, IELTS, TOEFL, recognized tests, english proficiency"
        },
        {
            title: "International Students - Adjusting to Life in NZ",
            url: "pages/internationalStudents.html#adjusting-to-nz",
            keywords: "adjusting to NZ, life in new zealand, student groups, kiwi culture, local food, public transport"
        },
        {
            title: "FAQ's (Overview)",
            url: "pages/FAQ's.html",
            keywords: "FAQ's, frequently asked questions, common questions, answers, help, resources"
        },
        {
            title: "FAQ's - University Admission",
            url: "pages/FAQ's.html#faq-admission",
            keywords: "faq admission, how to apply, application process, entry requirements, what do I need"
        },
        {
            title: "FAQ's - Student Loans and Allowances",
            url: "pages/FAQ's.html#faq-loans",
            keywords: "faq student loans, faq student allowances, how to get money for university, funding, financial support"
        },
        {
            title: "FAQ's - Changing Courses or Universities",
            url: "pages/FAQ's.html#faq-changes",
            keywords: "faq changing courses, faq changing universities, course transfer, university transfer, changing mind"
        },
        {
            title: "FAQ's - Student Support",
            url: "pages/FAQ's.html#faq-support",
            keywords: "faq student support, help services, academic help, personal support"
        },
        {
            title: "FAQ's - Accommodation",
            url: "pages/FAQ's.html#faq-accommodation",
            keywords: "faq accommodation, where to live, student housing, flatting, halls"
        },
        {
            title: "Contact Us",
            url: "index.html#footer-contact",
            keywords: "contact, email, phone, address, get in touch"
        }
    ];
}

populateSearchableContent();

/**
 * @returns {boolean}
 */
function isCurrentPageInFolder() {
    const path = window.location.pathname;
    return path.includes('/pages/');
}

/**
 * 
 * @param {string}
 * @returns {string}
 */
function getCorrectedUrl(rootUrl) {
    if (isCurrentPageInFolder()) {
        if (rootUrl === "index.html" || rootUrl.startsWith("index.html#")) {
            return "../" + rootUrl;
        }

        if (rootUrl.startsWith("pages/")) {
            return rootUrl.substring(6);
        }
    }
    return rootUrl;
}

/**
 * 
 */
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
            a.href = getCorrectedUrl(item.url);
            a.textContent = item.title;

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

searchForm.addEventListener('submit', searchMaterial);

document.addEventListener('click', function(event) {
    if (!resultsDiv.contains(event.target) && event.target !== searchInput && !searchForm.contains(event.target)) {
        resultsDiv.style.display = 'none';
    }
});

resultsDiv.addEventListener('click', function(event) {
    const targetLink = event.target.closest('a');
    if (targetLink) {
        event.preventDefault();

        const fullUrl = targetLink.href;
        const urlObject = new URl(fullUrl);
        const urlPath = urlObject.pathname;
        const targetId = urlObject.hash ? urlObject.hash.substring(1) : null;
        const linkedPageFile = urlPath.split('/').pop();
        const currentPageFile = window.location.pathname.split('/').pop();
        const isCurrentPage = (linkedPageFile === currentPageFile);

        if (isCurrentPage) {
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
            window.location.href = fullUrl;
        }
        resultsDiv.style.display = 'none';
    }
});

function isMobileView() {
    return window.matchMedia("(max-width: 1024px)").matches;
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a:not(.dropdown-menu a)');
        if (dropdownLink) {
            dropdownLink.classList.add('dropdown-toggle');
        }
    });

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop: Hover functionality
        dropdown.addEventListener('mouseenter', function() {
            if (!isMobileView()) {
                dropdownMenu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            if (!isMobileView()) {
                dropdownMenu.style.display = 'none';
            }
        });
        
        // Mobile/Tablet: Click functionality
        if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(event) {
            if (isMobileView() && dropdownToggle.getAttribute('href') === '#') {
                event.preventDefault();

                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.style.display = 'none';
                    }
                });
                
                if (dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                } else {
                    dropdownMenu.style.display = 'block';
                }
            }
        });
    }
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
        link.addEventListener('mouseleave', () => {
            link.style.removeProperty('--x');
            link.style.removeProperty('--y');
        });
    });

    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-list li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    setTimeout(() => {
                        navList.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    }, 150);
                }
            });
        });
    }

    // Hide/Show content functionality
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');

    if (toggleButton && toggleContent) {
        const isHidden = toggleContent.classList.contains('content-hidden');
        toggleButton.textContent = isHidden ? 'Explore' : 'Hide Content';

        toggleButton.addEventListener('click', () => {
            if (toggleContent.classList.contains('content-hidden')) {
                toggleContent.classList.remove('content-hidden');
                toggleContent.classList.add('content-visible');
                toggleButton.textContent = 'Hide Content';
            } else {
                toggleContent.classList.remove('content-visible');
                toggleContent.classList.add('content-hidden');
                toggleButton.textContent = 'Explore';
            }
        });
    }
});