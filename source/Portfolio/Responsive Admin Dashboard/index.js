// sideMenu open/close
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.animation = null;
    sideMenu.style.display = 'block';
    sideMenu.style.animation = 'showMenu 400ms ease forwards';
    sideMenu.style.left = 0;
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.animation = null;
    sideMenu.style.animation = 'closeMenu 600ms ease forwards';
})

sideMenu.addEventListener('animationend', () => {
    if (sideMenu.style.left == '-100%') {
        sideMenu.style.display = 'none';
    }
})

// change theme
const themeToggler = document.querySelector(".theme-toggler")
const lightThemeSpan = themeToggler.querySelector('span:nth-child(1)')
const darkThemeSpan = themeToggler.querySelector('span:nth-child(2)')

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    lightThemeSpan.style.animation = null;
    darkThemeSpan.style.animation = null;
    lightThemeSpan.style.animation = 'RightToRight 400ms ease forwards';
    darkThemeSpan.style.animation = ' LeftToLeft 400ms ease forwards';
    lightThemeSpan.classList.toggle('active');
    darkThemeSpan.classList.toggle('active');


})

darkThemeSpan.addEventListener("animationend", () => {
    darkThemeSpan.style.animation = null;

})

lightThemeSpan.addEventListener("animationend", () => {
    lightThemeSpan.style.animation = null;

})

// open locale-selector
const localeSelector = document.querySelector(".locale-selector");
const earthIcon = localeSelector.querySelector("span");
const selectList = localeSelector.querySelector(".locale-list");
const selectListOption = selectList.querySelector(".option");

earthIcon.addEventListener("click", () => {
    // earthIcon.addEventListener("animationend", () => {
    //     console.log('ok');
    //     earthIcon.classList.remove('spin');
    // })

    // if selectList is OPEN
    if (selectList.offsetParent) {
        earthIcon.classList.add('spin');

        setTimeout(() => {
            earthIcon.classList.remove('spin');
        }, 1000)
    } else {
        earthIcon.classList.add('despin');

        setTimeout(() => {
            earthIcon.classList.remove('despin');
        }, 1000)
    }
    earthIcon.classList.toggle("openLocaleEarthIcon");
    localeSelector.classList.toggle("openLocaleSelector");
    selectList.classList.toggle("openLocaleSelectList");
})

// localeSelector.addEventListener('click', (e)=>{
//     // event.stopPropagation();
//     // event.stopImmediatePropagation();
//     // const stop = false;
//     // if (stop?stop:false) return false;
//     // selectListOption.classList.toggle("openselect")
//     if (!selectListOption.offsetParent) {

//         selectListOption.classList.to("openselect");
//         selectListOption.classList.add("playOption");

//         selectListOption.addEventListener("animationend", (e) => {
//             // event.stopPropagation();
//             // event.stopImmediatePropagation();
//             selectListOption.classList.remove("playOption");
//             // selectListOption.classList.toggle("openselect")
//             console.log('1')
//             // event.stopImmediatePropagation();
//             // return false
//         })
//         selectListOption.removeEventListener("animationend", );
//     } else {
//         selectListOption.classList.add("deplayOption");
//         selectListOption.addEventListener("animationend", (e) => {
//             // event.stopPropagation();
//             // event.stopImmediatePropagation();
//             selectListOption.classList.remove("deplayOption");
//             selectListOption.classList.remove("openselect");
//             console.log('2')
//             // event.stopImmediatePropagation();
//             // return false
//         })
//         selectListOption.removeEventListener("animationend", aaa);

//     }
//     // stop = true;
//     // event.stopImmediatePropagation();
// })

// localeSelector.addEventListener('click',async ()=>{
//     event.stopPropagation();
//     if (!selectListOption.offsetParent) {
//         selectListOption.classList.add("openselect");
//         selectListOption.classList.add("playOption");
//         // selectListOption.style.top = "8%";
//         console.log('1')
//     } else {
//         selectListOption.classList.add("deplayOption");
//         console.log('3')
//     }
//     console.log('4')
//     // selectListOption.style.top = '8%';
// })

// selectListOption.addEventListener("animationend", () => {
//     if (selectListOption.style.top == "2.3%" || !selectListOption.style.top){
//         selectListOption.style.top = "8%";
//     }else {
//         selectListOption.style.top = "2.3%";
//         selectListOption.classList.remove("openselect");
//     }
//     selectListOption.classList.remove("playOption");
//     selectListOption.classList.remove("deplayOption");
//     // selectListOption.style.top = "8% !important";
//     console.log('2')
// })
