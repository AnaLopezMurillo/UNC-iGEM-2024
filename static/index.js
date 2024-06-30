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
    "Gavin Wiltshire" : "Team Lead",
    "Corinne Drabenstott" : "",
    "Annika Bridge" : "Human Practices Co-lead",
    "Pristine Onuoha" : "Human Practices Co-Lead",
    "Dominic Kubissa" : "Human Practices",
    "Logan Amos": "Human Practices",
    "Sriya Darsi" : "Human Practices",
    "Anusha Gupta" : "Secretary",
    "Daniellejen Nares" : "Fundraising",
    "Isabel Lopez Murillo" : "Wiki Lead",
    "Ishita Siddamreddy" : "Wiki",
    "Layla Gusa" : "Wiki",
    "Joshua Lopez" : "Wet Lab Lead",
    "Lahari  Pokala" : "Wet Lab",
    "Grant Holland" : "Wet Lab",
    "Nishant Dengi" : "Wet Lab",
    "Uditi Patil" : "Wet Lab",
    "Zaid Syed" : "Wet Lab",
    "Heng Annika Shi" : "Social Media Lead",
    "Jack Titus" : "Social Media",
    "Elizabeth Krist" : "Dry Lab",
    "Osvaldo Linares": "Dry Lab",
    "Julia Zhu" : "",
    "Keshav Saxena" : "",
    "Moiz Chomelawala": "",
    "Samantha Carew" : "",
}

const teamSecondary = {
    "Gavin Wiltshire" : "",
    "Corinne Drabenstott" : "",
    "Annika Bridge" : "",
    "Pristine Onuoha" : "",
    "Anusha Gupta" : "Literature Review, Project Ideation",
    "Daniellejen Nares" : "",
    "Dominic Kubissa" : "",
    "Elizabeth Krist" : "Human Practices, Fundraising",
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
    "Samantha Carew" : "",
    "Sriya Darsi" : "",
    "Uditi Patil" : "Literature Review, Project Ideation",
    "Zaid Syed" : "Literature Review, Project Ideation",
}

let i = 0;
for (let member of Object.keys(teamPrimary)) {
    let div = document.createElement("div");
    let team_img = document.createElement("div");
    let name = document.createElement("div");
    let job = document.createElement("div");

    div.classList.add("person");
    team_img.classList.add("team_image");

    // append member name
    name.classList.add("name");
    name.innerHTML = member;

    // append member primary job
    job.classList.add("job");
    job.innerHTML = teamPrimary[member];

    // append divs to each other
    div.appendChild(team_img);
    div.appendChild(name);
    div.appendChild(job);

    console.log(div);

    // grab members div from team.html + append
    let members = document.getElementsByClassName("members")[0];
    members.appendChild(div);
}