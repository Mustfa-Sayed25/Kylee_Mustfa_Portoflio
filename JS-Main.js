// // 🌙🌞 Dark / Light Mode Toggle
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-sun");
//   dayNight.querySelector("i").classList.toggle("fa-moon");
//   document.body.classList.toggle("dark");
// });

// window.addEventListener("load", () => {
//   if (document.body.classList.contains("dark")) {
//     dayNight.querySelector("i").classList.add("fa-sun");
//   } else {
//     dayNight.querySelector("i").classList.add("fa-moon");
//   }
// });


// // 📌 Navigation between sections
// const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length,
//   allSection = document.querySelectorAll(".sect"),
//   totalSection = allSection.length;

// for (let i = 0; i < totalNavList; i++) {
//   const a = navList[i].querySelector("a");
//   a.addEventListener("click", function (e) {
//     e.preventDefault();

//     // remove active from all nav links
//     for (let j = 0; j < totalNavList; j++) {
//       navList[j].querySelector("a").classList.remove("active");
//       allSection[j].classList.remove("active", "back-sect");
//     }

//     // activate the clicked link
//     this.classList.add("active");
//     showSection(this);
//   });
// }

// function showSection(element) {
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.remove("active");
//   }
//   const target = element.getAttribute("href").split("#")[1];
//   document.querySelector("#" + target).classList.add("active");
// }

// function updateNav(element) {
//   for (let i = 0; i < totalNavList; i++) {
//     navList[i].querySelector("a").classList.remove("active");
//     const target = element.getAttribute("href").split("#")[1];
//     if (
//       target ===
//       navList[i].querySelector("a").getAttribute("href").split("#")[1]
//     ) {
//       navList[i].querySelector("a").classList.add("active");
//     }
//   }
// }

// // Example: "Hire Me" button
// document.querySelector(".hire").addEventListener("click", function () {
//   showSection(this);
//   updateNav(this);
// });


// 📌 Aside toggle (mobile menu)
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}


// // 🎨 Style Switcher
// const styleSwitcherToggle = document.querySelector(".style-switch-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//   document.querySelector(".style-switch").classList.toggle("open");
// });

// window.addEventListener("scroll", () => {
//   if (document.querySelector(".style-switch").classList.contains("open")) {
//     document.querySelector(".style-switch").classList.remove("open");
//   }
// });

// // Change theme color
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//   alternateStyles.forEach((style) => {
//     if (color === style.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     } else {
//       style.setAttribute("disabled", "true");
//     }
//   });
// }


// ⌨️ Typing Animation
const text = ["Flutter Developer", "Mobile Apps Developer", "Student"];
let index = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function typeText() {
  let speed = 100;

  if (index >= text.length) {
    index = 0;
  }

  const fullText = text[index];

  if (isDeleting) {
    currentText = fullText.substring(0, letterIndex--);
  } else {
    currentText = fullText.substring(0, letterIndex++);
  }

  document.getElementById("type-text").textContent = currentText;

  if (!isDeleting && currentText === fullText) {
    isDeleting = true;
    speed = 1000;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    index++;
    speed = 500;
  }

  setTimeout(typeText, speed);
}

typeText();





// ========== selectors ==========
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      allSection = document.querySelectorAll(".sect"),
      dayNight = document.querySelector(".day-night"),
      styleSwitcherToggler = document.querySelector(".style-switch-toggler"),
      alternateStyles = document.querySelectorAll(".alternate-style");

// ========== function to show sections ==========
function showSection(element) {
    // امسح كل active
    allSection.forEach(section => {
        section.classList.remove("active");
    });

    // الصفحة المطلوبة من اللينك
    const target = element.getAttribute("href").split("#")[1];
    document.getElementById(target).classList.add("active");
}

// ========== function to set last section ==========
function setLastSection() {
    // امسح last من كل الصفحات
    allSection.forEach(section => section.classList.remove("last"));

    // حدد الصفحة اللي كانت active
    const currentActive = document.querySelector(".sect.active");
    if (currentActive) {
        currentActive.classList.add("last");
    }
}

// ========== nav link click ==========
navList.forEach(item => {
    const a = item.querySelector("a");
    a.addEventListener("click", function (e) {
        e.preventDefault();

        // شيل active من اللينك القديم
        document.querySelector(".nav li a.active")?.classList.remove("active");

        // حط الصفحة الحالية كـ last
        setLastSection();

        // اعرض الصفحة الجديدة
        this.classList.add("active");
        showSection(this);
    });
});

// ========== "Hire Me" button ==========
const hireBtn = document.querySelector(".hire");
if (hireBtn) {
    hireBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // شيل active من اللينك القديم
        document.querySelector(".nav li a.active")?.classList.remove("active");

        // حط الصفحة الحالية كـ last
        setLastSection();

        // اعرض صفحة contact
        showSection(this);

        // فعل لينك contact في الـ nav
        document.querySelector(".nav li a[href='#contact']").classList.add("active");
    });
}

// ========== style switcher (open/close) ==========
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switch").classList.toggle("open");
});

// ========== hide switcher when scrolling ==========
window.addEventListener("scroll", () => {
    document.querySelector(".style-switch").classList.remove("open");
});

// ========== theme colors ==========
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// ========== dark / light mode ==========
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// set default icon on load
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
