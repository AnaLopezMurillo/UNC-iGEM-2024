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
        const offset = window.innerHeight / 4;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPos,
            behavior: "smooth"
        });
    })

});

const refLinks = document.querySelectorAll('.links');
refLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        const offset = window.innerHeight / 4;
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
const personBio = {
    "Gavin Wiltshire" : "Biomedical Engineering \n Gavin is a second year Undergraduate student at the University of North Carolina-Chapel Hill. Gavin Was born and raised in in San Antonio, TX, but has always had the desire to collaborate with people from diverse backgrounds and different perspectives to create impactful technology and discoveries. iGEM has been the perfect opportunity for him to experience this: with students from a diverse set of majors and focuses cross-collaborating for the development of a project emphasizing improving human health and lives. ",
    "Corinne Drabenstott" : "",
    "Annika Bridge" : "Biochemistry B.S.",
    "Pristine Onuoha" : "Biology B.S.",
    "Anusha Gupta" : "Neuroscience B.S. Chemistry minor",
    "Daniellejen Nares" : "Business Administration",
    "Dominic Kubissa" : "Biology B.S",
    "Elizabeth Krist" : "Quantitative Biology B.S.",
    "Grant Holland" : "Biomedical Engineering B.S",
    "Heng Annika Shi" : "Biology & Media and Journalism B.A.",
    "Isabel Lopez Murillo" : "Computer Science B.S.",
    "Ishita Siddamreddy" : "Computer Science B.S., Statistics and Analytics B.S",
    "Jack Titus" : "Biology B.S.",
    "Joshua Lopez" : "Biochemistry B.S.",
    "Julia Zhu" : "",
    "Keshav Saxena" : "",
    "Lahari  Pokala" : "Biochemistry BS",
    "Layla Gusa" : "Biology on the quantitative track B.S.",
    "Logan Amos": "Biology B.S., Management and Society B.A.",
    "Moiz Chomelawala": "",
    "Nishant Dengi" : "Biomedical Engineering B.S., Mathematics B.A.",
    "Osvaldo Linares": "Biomedical Engineering B.S.  Neuro Science minor ",
    "Samantha Carew" : "",
    "Sriya Darsi" : "Neuroscience B.S.",
    "Uditi Patil" : "Biomedical Engineering B.S.",
    "Zaid Syed" : "Biology B.S.",

}

let i = 0;
for (let member of Object.keys(teamPrimary)) {
    let div = document.createElement("div");
    let team_img = document.createElement("div");
    let name = document.createElement("div");
    let job = document.createElement("div");

    div.classList.add("person");
    div.id = member;
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

    // grab members div from team.html + append
    let members = document.getElementsByClassName("members")[0];
    members.appendChild(div);
}

const members = document.querySelectorAll("div.person");

// going to need to change the way we get this
const popup = document.getElementById("test");
members.forEach(function(member) {
    member.addEventListener('click', function(event) {
        event.stopPropagation();
        popup.style.display = "block";
        popup.style.visibility = "visible";
    })
});

window.addEventListener('click', function(event) {
    if (!document.getElementById('test').contains(event.target)) {
        popup.style.display = 'none';
        popup.style.visibility = 'hidden';
    }
});
