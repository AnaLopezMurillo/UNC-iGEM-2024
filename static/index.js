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
    "Aryan Kokkanti": "Dry Lab Lead",
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
    "Aryan Kokkanti":"",
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
    "Gavin Wiltshire" : "Biomedical Engineering <br> Gavin is a second year Undergraduate student at the University of North Carolina-Chapel Hill. Gavin Was born and raised in in San Antonio, TX, but has always had the desire to collaborate with people from diverse backgrounds and different perspectives to create impactful technology and discoveries. iGEM has been the perfect opportunity for him to experience this: with students from a diverse set of majors and focuses cross-collaborating for the development of a project emphasizing improving human health and lives. ",
    "Corinne Drabenstott" : "",
    "Annika Bridge" : "Biochemistry B.S.",
    "Pristine Onuoha" : "Biology B.S. <br> Pristine is a first-year biology major at UNC-Chapel Hill. She is ardently passionate about molecular biology, cellular biology, and bioengineering, which drew her to iGEM. As a part of iGEM, she is keen to build connections with those similarly passionate about these fields and explore ideas that spark innovation.",
    "Anusha Gupta" : "Neuroscience B.S. Chemistry minor <br> Anusha is a second year undergraduate student at the University of North Carolina-Chapel Hill pursuing a major in Neuroscience and a minor in Chemistry. Anusha was born and raised in New Jersey but strives to learn and explore in a diverse and interdisciplinary environment. As someone who values continuous learning and knowledge sharing, she was drawn to iGEM's commitment to education and the development of future leaders in research. She is excited to contribute to innovative research projects developing biomedical and biosynthetic solutions to address global health challenges. She looks forward to building lasting connections within the iGEM community and gaining insights that will shape her future professional healthcare endeavors and personal growth.",
    "Aryan Kokkanti": "Biology & Applied Mathematics B.S <br>Aryan is a second year Biology and Applied Math student and UNC Chapel Hill from Cary, NC. He is passionate about bridging biology and math together to find interesting results in the biophysical world. iGEM provides the provides the occassion for him to do such by being able to mode biological interactions with mathematical systems.",
    "Daniellejen Nares" : "Business Administration <br> Danielle is a junior business major at UNC-Chapel Hill from Norwalk, Connecticut. She has always been interested in pursuing a career at the intersection of business and STEM. Danielle is grateful for the opportunity to participate in iGEM and collaborate with individuals who are enthusiastic about science education and engineering technologies that can better the community.",
    "Dominic Kubissa" : "Biology B.S",
    "Elizabeth Krist" : "Quantitative Biology B.S.",
    "Grant Holland" : "Biomedical Engineering B.S<br> Grant is a second year undergraduate student at the University of North Carolina at Chapel Hill. Grant was born and raised in Wilmington, NC and has always had a passion for human health. With the desire to bridge technology and medicine to further human health, Grant found that iGEM was the perfect fit. ",
    "Heng Annika Shi" : "Biology & Media and Journalism B.A. <br> Annika is a second-year undergraduate student at Carolina. Born and raised in Beijing, China, Annika started participating in iGEM 5 years ago when she was a freshman in high school. Annika loves how iGEM has connected her with like-minded and talented individuals around the globe. 'I've made so many friends of a lifetime in iGEM, now literally wherever I go I have someone to meet up with and ask for travel tips xD.'",
    "Isabel Lopez Murillo" : "Computer Science B.S. <br> Isabel is a senior at UNC-Chapel Hill from Charlotte, NC. She doesn't know anything about biology but is passionate about contributing programming experience to interdisciplinary areas in biomedical engineering. When she's not struggling with JavaScript function events, you can probably find her rewatching Saiki K.",
    "Ishita Siddamreddy" : "Computer Science B.S., Statistics and Analytics B.S <br> Ishita is a sophomore at UNC Chapel Hill from Charlotte, NC. While she doesnt have as much knowledge in Biology, she is excited to the see the contributions she can make using computer science to the journey of biomedical innovation. She is delighted to work with the various roles in the UNC iGEM team and learn from others experiences and knowledge. ",
    "Jack Titus" : "Biology B.S.",
    "Joshua Lopez" : "Biochemistry B.S.",
    "Julia Zhu" : "",
    "Keshav Saxena" : "",
    "Lahari  Pokala" : "Biochemistry BS",
    "Layla Gusa" : "Biology on the quantitative track B.S.  <br> Layla is a sophomore undergraduate student studying quantitative biology at UNC Chapel Hill. Joining the iGEM team at UNC and having the opportunity to learn about synthetic biology while collaborating with students that have a variety of academic interests and backgrounds has been an incredible experience for her! She is grateful to have contributed to the project wiki and to be part of such an amazing team!",
    "Logan Amos": "Biology B.S., Management and Society B.A.",
    "Moiz Chomelawala": "",
    "Nishant Dengi" : "Biomedical Engineering B.S., Mathematics B.A.",
    "Osvaldo Linares": "Biomedical Engineering B.S.  Neuro Science minor <br> Osvaldo is a second-year undergraduate student studying Biomedical Engineering with a minor in Neuro Science at the University of North Carolina at Chapel Hill. Osvaldo was born in Mexico but dually raised in Mexico and the US. Osvaldo joined the UNC iGEM team his second semester with the purpose to expand his knowledge and passion about genetics and molecular biology throuhg synthetic biology.",  
    "Samantha Carew" : "",
    "Sriya Darsi" : "Neuroscience B.S.",
    "Uditi Patil" : "Biomedical Engineering B.S.",
    "Zaid Syed" : "Biology B.S. <br> Zayd is a third year undergraduate transfer student studying biology at the University of North Carolina at Chapel Hill. Zayd is originally from Illinois. Zayd has interests in biological research and medicine. These interests overlapped with the research component of iGEM which led Zayd to joining this year's incredibly talented UNC iGEM team.",
}

const popup = document.getElementById("popup");

let i = 0;
for (let member of Object.keys(teamPrimary)) {
    let div = document.createElement("div");
    let team_img = document.createElement("div");
    let name = document.createElement("div");
    let job = document.createElement("div");

    // example for how create an element and add class
    let h1 = document.createElement("h1");
    h1.classList.add("h1_class");
    let div1 = document.createElement("div");
    div1.classList.add("right")
    let div2 = document.createElement("div");
    div2.classList.add("memberPicture")
    div1.appendChild(div2);

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

    // add an event listener to each image div when we make it and call the population function
    team_img.addEventListener('click', function(event) {
        popupPopulate(member, event);
    });

    // grab members div from team.html + append
    let members = document.getElementsByClassName("members")[0];
    members.appendChild(div);
}

function popupPopulate(member, event) {
    // populate the fields
    let name = document.getElementById('popup_name');
    name.innerHTML = member;

    let job = document.getElementById('popup_job');
    job.innerHTML = teamPrimary[member];

    let desc = document.getElementById('popup_desc');
    desc.innerHTML = personBio[member]

    // change picture here, code TBD depending on links. hopefully this will alleviate some of the problems of this page loading rlly slowly due to images
    let img = document.getElementById('popup_pic');

    // show the popup
    event.stopPropagation();
    popup.style.display = "block";
    popup.style.visibility = "visible";

    document.addEventListener('click', function() {
        handleClickOutside(event);
    });
}

function handleClickOutside(event) {
    if (!popup.contains(event.target)) {
        popup.style.display = 'none';
        popup.style.visibility = 'hidden';
    }

    // remove the event listener when user clicks out
    document.removeEventListener('click', handleClickOutside);
}