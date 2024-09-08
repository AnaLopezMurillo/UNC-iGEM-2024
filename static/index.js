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

function setIndex(){
    let pages = document.querySelectorAll(".page")
    for(var i=0;i<pages.length;i++){
      pages[i].style.zIndex = pages.length - i;
    }
  }

setIndex();

function previous(){
    let active = document.querySelector(".active");
    active.style.transform = "rotateY(0deg)";
    if (active.previousElementSibling.classList.contains("page")) {
        let prevSib = active.previousElementSibling;
        console.log(prevSib)
        active.className="page";
        prevSib.className = "page active";
        setIndex();
        prevSib.style.transform = "rotateY(180deg)";
        prevSib.style.zIndex = "9998";
    }
}

function next(){
    let active = document.querySelector(".active")
    let nextSib = active.nextElementSibling;
    if (nextSib == null) {
        nextSib = active;
    }
    active.style.transform = "rotateY(180deg)";
    active.className="page";
    setIndex();
    active.style.zIndex = "9998";
    if (nextSib){
        nextSib.className = "page active";
    }
}