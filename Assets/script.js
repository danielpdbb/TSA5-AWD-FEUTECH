/*lady*/
let popup = document.getElementById('popup');
let pinkRosePopup = document.getElementById('pinkRosePopup');
let redRosePopup = document.getElementById('redRosePopup');

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}


/*chania*/
function openPinkRosePopup() {
  pinkRosePopup.classList.add("open-popup");
}

function closePopup1() {
  pinkRosePopup.classList.remove("open-popup");
}

function openRedRosePopup() {
  redRosePopup.classList.add("open-popup");
}

function closePopup2() {
  redRosePopup.classList.remove("open-popup");
}

/*pat*/
document.addEventListener('DOMContentLoaded', function() {
    var scrollTopButton = document.getElementById('scrollToTopButton');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "flex";
        } else {
            scrollTopButton.style.display = "none";
        }
    };

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
