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
        active.className="page";
        prevSib.className = "page active";
        setIndex();
        prevSib.style.transform = "rotateY(180deg)";
        prevSib.style.zIndex = "9997";
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
    active.style.zIndex = "9997";
    if (nextSib){
        nextSib.className = "page active";
    }
}

// adds bookmarks to notebook page at each header (new day) instead of having to do it manually !!
function add_bookmarks() {
    let page_headers = document.querySelectorAll('div.page-header');
    page_headers.forEach(function(header) {
        header.insertAdjacentHTML('beforebegin', 
            '<div class="bookmark"> <img src="../../static/bookmark.png"></div>'
        )
    })
}

add_bookmarks();

// notebook page flip
const nbWrapper = document.querySelector('.nb-wrapper');

// if (nbWrapper) {
//     const tocLinks = nbWrapper.querySelectorAll('.toc-list-item a');
    
//     tocLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             console.log(link);
//             const targetId = link.getAttribute('href').substring(1);
//             const targetEl = nbWrapper.querySelector(`#${targetId}`);

//             if (!targetEl) return;

//             const targetPage = targetEl.closest('.page');
//             if (!targetPage) return;

//             let active = nbWrapper.querySelector(".active");

//             console.log(targetPage);

//             console.log(targetPage.compareDocumentPosition(active));

//             while (active !== targetPage) {
//                 next(); 
//                 active = nbWrapper.querySelector(".active");
//             }

//             // if (targetPage.compareDocumentPosition(active) & Node.DOCUMENT_POSITION_FOLLOWING) {
//             //     while (active !== targetPage) {
//             //         next(); 
//             //         active = nbWrapper.querySelector(".active");
//             //     }
//             // } else if (targetPage.compareDocumentPosition(active) & Node.DOCUMENT_POSITION_PRECEDING) {
//             //     while (active !== targetPage) {
//             //         previous();
//             //         active = nbWrapper.querySelector(".active");
//             //     }
//             // }
//         });
//     });
// }
