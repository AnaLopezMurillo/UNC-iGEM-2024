// ToC functions
const toggles = document.querySelectorAll('.dropdown-toggle-toc');
const items = document.querySelectorAll('.toc-list-items');

toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.stopPropagation();
        const dropdown = toggle.nextElementSibling;
        const isOpen = dropdown.classList.contains('show');

        items.forEach(function(item) {
            item.classList.remove('show');
            item.style.maxHeight = null;
        });

        if (!isOpen) {
            dropdown.classList.add('show');
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        } else {
            dropdown.classList.remove('show');
            dropdown.style.maxHeight = null;
        }
    });
});

window.addEventListener('click', function() {
    items.forEach(function(item) {
        item.classList.remove('show');
        item.style.maxHeight = null;
    });
});

const tocLinks = document.querySelectorAll('.toc-list-item a');
tocLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        const offset = window.innerHeight / 3;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPos,
            behavior: "smooth"
        });
    })

});

// populate team.html w/ members data
const teamPrimary = {
    "Annika Bridge" : "Human Practices Co-lead",
    "Anusha Gupta" : "Secretary",
    "Corinne Drabenstott" : "",
    "Daniellejen Nares" : "Fundraising",
    "Dominic Kubissa" : "Human Practices",
    "Elizabeth Krist" : "Dry Lab",
    "Gavin Wiltshire" : "Team Lead",
    "Grant Holland" : "Wet Lab",
    "Heng Annika Shi" : "Social Media Lead",
    "Isabel Lopez Murillo" : "Wiki Lead",
    "Ishita Siddamreddy" : "Wiki",
    "Jack Titus" : "Social Media",
    "Joshua Lopez" : "Wet Lab Lead",
    "Julia Zhu" : "",
    "Keshav Saxena" : "",
    "Lahari  Pokala" : "Wet Lab",
    "Layla Gusa" : "Wiki",
    "Logan Amos": "Human Practices",
    "Moiz Chomelawala": "",
    "Nishant Dengi" : "Wet Lab",
    "Osvaldo Linares": "Dry Lab",
    "Pristine Onuoha" : "Human Practices Co-Lead",
    "Samantha Carew" : "",
    "Sriya Darsi" : "Human Practices",
    "Uditi Patil" : "Wet Lab",
    "Zaid Syed" : "Wet Lab",
}

const teamSecondary = {
    "Annika Bridge" : "",
    "Anusha Gupta" : "Literature Review, Project Ideation",
    "Corinne Drabenstott" : "",
    "Daniellejen Nares" : "",
    "Dominic Kubissa" : "",
    "Elizabeth Krist" : "Human Practices, Fundraising",
    "Gavin Wiltshire" : "",
    "Grant Holland" : "Literature Review, Project Ideation",
    "Heng Annika Shi" : "Human Practices, Collaboration Lead, Fundraising",
    "Isabel Lopez Murillo" : "",
    "Ishita Siddamreddy" : "",
    "Jack Titus" : "",
    "Joshua Lopez" : "Literature Review, Project Ideation, Dry Lab",
    "Julia Zhu" : "",
    "Keshav Saxena" : "",
    "Lahari  Pokala" : "Literature Review, Project Ideation, Dry Lab",
    "Layla Gusa" : "",
    "Logan Amos": "Human Practices",
    "Moiz Chomelawala": "",
    "Nishant Dengi" : "Literature Review, Project Ideation",
    "Osvaldo Linares": "Wet Lab, Fundraising",
    "Pristine Onuoha" : "",
    "Samantha Carew" : "",
    "Sriya Darsi" : "",
    "Uditi Patil" : "Literature Review, Project Ideation",
    "Zaid Syed" : "Literature Review, Project Ideation",
}

for (let member of Object.keys(teamPrimary)) {
    
}