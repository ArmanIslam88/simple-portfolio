const loder = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  loder.style.display = "none";
});

const homeSection = document.querySelector(".home_section");
const home = document.querySelector(".spc-containers .home");
const allSection = document.querySelector(".all_sec_ext_home");
const sections = document.querySelectorAll(".sections");
const options = document.querySelectorAll(".options1");
const containers = document.querySelector(".containers");
const main_menu = document.querySelector(".main_menu");
const insideHome = document.querySelector(".main_menu .home");

options.forEach((item) => {
  item.addEventListener("click", () => {
    homeSection.style.display = "none";
    main_menu.classList.remove("abc");
    // document.querySelector(".footer").style.display = "none";
    allSection.classList.add("display");
    containers.classList.add("animi");
    ele = document.getElementById(item.getAttribute("data-link"));
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

home.addEventListener("click", () => {
  containers.classList.remove("animi");
  homeSection.style.display = "block";
  allSection.classList.remove("display");
});

insideHome.addEventListener("click", () => {
  // containers.classList.remove("animi");
  homeSection.style.display = "block";
  allSection.classList.remove("display");
});

const emailIcon = document.querySelector(".email-icon");
emailIcon.addEventListener("click", () => {
  const aler = document.querySelector(".alert");
  aler.style.display = "block";
});

const clsBtn = document.querySelector(".cls-btn");
clsBtn.addEventListener("click", () => {
  const aler = document.querySelector(".alert");
  aler.style.display = "none";
});

document.querySelector(".btn").addEventListener("click", () => {
  homeSection.style.display = "none";
  main_menu.classList.remove("abc");
  //document.querySelector(".footer").style.display = "none";
  allSection.classList.add("display");
  containers.classList.add("animi");
});

// forColor = document.querySelectorAll(".spc-containers .options");
// forScroll = document.querySelectorAll(".sections");

// const callback = () => {
//   forColor.forEach((item) => {
//     item.style.color = "red";
//   });
// };

// const object = {
//   threshold: 0.2,
// };
// const observer = new IntersectionObserver(callback, object);
// forScroll.forEach((section) => {
//   observer.observe(section);
// });

const whatsApp = document.querySelector(".whatsapp-icon");
var whatsAlert = document.querySelector(".whats-app-alert");
whatsApp.addEventListener("click", () => {
  whatsAlert.style.display = "block";
});

const whatsClsBtn = document.querySelector(".whats-cls-btn");
whatsClsBtn.addEventListener("click", () => {
  whatsAlert.style.display = "none";
});

const open_btn = document.querySelector(".open");
const close_btn = document.querySelector(".cls_btn");

open_btn.addEventListener("click", () => {
  main_menu.classList.add("abc");
});

close_btn.addEventListener("click", () => {
  main_menu.classList.remove("abc");
});

// const singleProject = document.querySelectorAll('.project_link');
// const click = document.querySelectorAll('.click');
// const projectOne = document.querySelector('.single-project');

// // singleProject.forEach((item) => {
// // 	item.addEventListener('mouseover', () => {
// // 		let ele = item.firstChild;
// // 		ele.style.display = 'block';
// // 		ele.style.color = "white";
// // 		ele.style.backgroundColor = "black";
// // 		item.style.opacity = '0.4';
// // 	})
// // })

// // singleProject.forEach((item) => {
// // 	item.addEventListener('mouseout', () => {
// // 		let ele = item.firstChild;
// // 		ele.style.display = 'none';
// // 		item.style.opacity = '1';
// // 	})
// // })
