const materials = [
  {
    title: "University Entrance Requirements",
    link: "../universityEntrance/universityEntrance.html",
    description: "Learn about NCEA Level 3, approved subjects, and steps to gain University Entrance in New Zealand."
  },
  {
    title: "Scholarships and How to Apply",
    link: "../scholarships/scholarships.html",
    description: "Find scholarships, check eligibility, and get application tips to help fund your studies."
  },
  {
    title: "New Zealand Universities",
    link: "../nzUniversities/nzUniversities.html",
    description: "Explore the main universities in New Zealand and what they have to offer."
  },
  {
    title: "Finance and Accommodation",
    link: "../finance&Accommodation/finance&Accommodation.html",
    description: "Understand living costs, housing options, budgeting tips, and student allowances."
  },
  {
    title: "University Life",
    link: "../universityLife/universityLife.html",
    description: "Discover what student life is like: clubs, events, support services, and campus facilities."
  },
  {
    title: "International Students Guide",
    link: "../internationalStudents/internationalStudents.html",
    description: "Visa requirements, English language tests, and tips for adjusting to life in New Zealand."
  },
  {
    title: "Frequently Asked Questions",
    link: "../FAQ's/FAQ's.html",
    description: "Get answers to common questions about university admission, student loans, and course changes."
  }
];


function searchMaterial(event) {
  event.preventDefault();

  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  if (query === "") {
    resultsContainer.style.display = "none";
    return;
  }

  // Filter results
  const matched = materials.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  if (matched.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    resultsContainer.style.display = "block";
  } else {
    matched.forEach(item => {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result-item");
      resultDiv.innerHTML = `
        <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
        <p>${item.description}</p>
      `;
      // Clicking a result hides the results container
      resultDiv.addEventListener("click", () => {
        resultsContainer.style.display = "none";
        document.getElementById("searchInput").value = "";
      });
      resultsContainer.appendChild(resultDiv);
    });
    resultsContainer.style.display = "block";
  }
}

// Hide results if user clicks outside the search area
document.addEventListener("click", (event) => {
  const results = document.getElementById("results");
  const form = document.getElementById("searchForm");
  if (!form.contains(event.target)) {
    results.style.display = "none";
  }
});
