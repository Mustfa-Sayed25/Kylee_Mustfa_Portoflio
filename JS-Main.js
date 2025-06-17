
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})





const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".sect"),
totalSection = allSection.length;
for(let i = 0 ; i < totalNavList ; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j = 0; j < totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-sect");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
    }
    function showSection(element)
    {
        for(let i = 0;i < totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }


    function updateNav(element)
    {
        for(let i = 1 ; i < totalNavList; i++)
        {
            navList[1].querySelector("a").classList.remove("active")
            const target = element.getAttribute("href").split("#")[1];
        }
    }
    document.querySelector(".hire").addEventListener("click", function()
    {
        showSection(this)
        updateNav(this)
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open")
    }



    
    //  toggle  \\
    const styleSwitcherToggle = document.querySelector(".style-switch-toggler")
    styleSwitcherToggle.addEventListener("click", () =>{
        document.querySelector(".style-switch").classList.toggle("open")
    })
    
    window.addEventListener("scroll", ()=>{
      if(document.querySelector(".style-switch").classList.contains("open")){
        document.querySelector(".style-switch").classList.remove("open")
      }
    })
//  colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }


  
  
const text = ["Web Designer", "Web Developer", "Student"];
let index = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function typeText() {
  const speed = 100; // سرعة الكتابة

  if (index >= text.length) {
    index = 0;
  }

  currentText = text[index];

  if (isDeleting) {
    currentText = currentText.slice(0, --letterIndex);
  } else {
    currentText = currentText.slice(0, ++letterIndex);
  }

  document.getElementById("type-text").textContent = currentText;

  if (!isDeleting && currentText === text[index]) {
    isDeleting = true;
    speedWait = 1000; // انتظار قبل الحذف
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    index++;
    speedWait = 500; // انتظار قبل الكتابة
  }

  setTimeout(() => typeText(), speed);
}

typeText();
