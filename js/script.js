"use strict";

let home = document.getElementById("home");
let about = document.getElementById("about");
let services = document.getElementById("services");
let portfolio =document.getElementById("portfolio");
let pricing = document.getElementById("pricing");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");
let scrollUpIcon = document.querySelector(".fa-angles-up");

home.addEventListener("mouseover", homeLinkClick);
about.addEventListener("mouseover", aboutLinkClick);
services.addEventListener("mouseover", servicesLinkClick);
portfolio.addEventListener("mouseover", portfolioLinkClick);
pricing.addEventListener("mouseover", pricingLinkClick);
contact.addEventListener("mouseover", contactLinkClick);
footer.addEventListener("mouseover", contactLinkClick);

let homeLink = document.getElementById("homeLink");
let homeIconLink = document.getElementById("homeIconLink");
let aboutLink = document.getElementById("aboutLink");
let serviceLink = document.getElementById("serviceLink");
let portfolioLink = document.getElementById("portfolioLink");
let pricingLink = document.getElementById("pricingLink");
let contactLink = document.getElementById("contactLink");
let contactSubmit = document.querySelector(".contactInp3");

homeIconLink.addEventListener("click", homeLinkClick);
scrollUpIcon.addEventListener("click", homeLinkClick);
homeLink.addEventListener("click", homeLinkClick);
aboutLink.addEventListener("click", aboutLinkClick);
serviceLink.addEventListener("click", servicesLinkClick);
portfolioLink.addEventListener("click", portfolioLinkClick);
pricingLink.addEventListener("click", pricingLinkClick);
contactLink.addEventListener("click", contactLinkClick);
contactSubmit.addEventListener("click", homeLinkClick);

function homeLinkClick() {
    aboutLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    serviceLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    portfolioLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    pricingLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    contactLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    homeLink.style.backgroundColor = "rgb(185 39 99)";
}

function aboutLinkClick() {
    homeLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    serviceLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    portfolioLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    pricingLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    contactLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    aboutLink.style.backgroundColor = "rgb(185 39 99)";
}

function servicesLinkClick() {
    homeLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    aboutLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    portfolioLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    pricingLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    contactLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    serviceLink.style.backgroundColor = "rgb(185 39 99)";
}

function portfolioLinkClick() {
    homeLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    aboutLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    serviceLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    pricingLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    contactLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    portfolioLink.style.backgroundColor = "rgb(185 39 99)";
}

function pricingLinkClick() {
    homeLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    aboutLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    serviceLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    portfolioLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    contactLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    pricingLink.style.backgroundColor = "rgb(185 39 99)";
}

function contactLinkClick() {
    homeLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    aboutLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    serviceLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    portfolioLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    pricingLink.style.backgroundColor = "rgba(185, 39, 100, 0)";
    contactLink.style.backgroundColor = "rgb(185 39 99)";
}

let all = document.getElementById("all");
let studio = document.getElementById("studio");
let photography = document.getElementById("photography");
let storybook = document.getElementById("storybook");
let branding = document.getElementById("branding");
let portImg1 = document.getElementById("portImg1");
let portImg2 = document.getElementById("portImg2");
let portImg3 = document.getElementById("portImg3");
let portImg4 = document.getElementById("portImg4");
let portImg5 = document.getElementById("portImg5");
let portImg6 = document.getElementById("portImg6");
let portImg7 = document.getElementById("portImg7");
let portImg8 = document.getElementById("portImg8");

all.addEventListener("click", allFunc);
studio.addEventListener("click", studioFunc);
photography.addEventListener("click", photographyFunc);
storybook.addEventListener("click", storybookFunc);
branding.addEventListener("click", brandingFunc);

function allFunc() {
    portImg1.style.display = "inline-block";
    portImg2.style.display = "inline-block";
    portImg3.style.display = "inline-block";
    portImg4.style.display = "inline-block";
    portImg5.style.display = "inline-block";
    portImg6.style.display = "inline-block";
    portImg7.style.display = "inline-block";
    portImg8.style.display = "inline-block";
    studio.style.backgroundColor = "transparent";
    studio.style.color = "rgb(185, 39, 99)";
    studio.style.border = "1px solid rgb(185, 39, 99)";
    photography.style.backgroundColor = "transparent";
    photography.style.color = "rgb(185, 39, 99)";
    photography.style.border = "1px solid rgb(185, 39, 99)";
    storybook.style.backgroundColor = "transparent";
    storybook.style.color = "rgb(185, 39, 99)";
    storybook.style.border = "1px solid rgb(185, 39, 99)";
    branding.style.backgroundColor = "transparent";
    branding.style.color = "rgb(185, 39, 99)";
    branding.style.border = "1px solid rgb(185, 39, 99)";
    all.style.backgroundColor = "rgb(185 39 99)";
    all.style.color = "white";
    all.style.border = "1px solid rgba(185, 39, 100, 0)";
}

function studioFunc() {
    portImg1.style.display = "inline-block";
    portImg2.style.display = "inline-block";
    portImg3.style.display = "inline-block";
    portImg4.style.display = "inline-block";
    portImg5.style.display = "inline-block";
    portImg6.style.display = "none";
    portImg7.style.display = "none";
    portImg8.style.display = "none";
    all.style.backgroundColor = "transparent";
    all.style.color = "rgb(185, 39, 99)";
    all.style.border = "1px solid rgb(185, 39, 99)";
    photography.style.backgroundColor = "transparent";
    photography.style.color = "rgb(185, 39, 99)";
    photography.style.border = "1px solid rgb(185, 39, 99)";
    storybook.style.backgroundColor = "transparent";
    storybook.style.color = "rgb(185, 39, 99)";
    storybook.style.border = "1px solid rgb(185, 39, 99)";
    branding.style.backgroundColor = "transparent";
    branding.style.color = "rgb(185, 39, 99)";
    branding.style.border = "1px solid rgb(185, 39, 99)";
    studio.style.backgroundColor = "rgb(185 39 99)";
    studio.style.color = "white";
    studio.style.border = "1px solid rgba(185, 39, 100, 0)";
}

function photographyFunc() {
    portImg1.style.display = "inline-block";
    portImg2.style.display = "inline-block";
    portImg3.style.display = "inline-block";
    portImg4.style.display = "inline-block";
    portImg5.style.display = "inline-block";
    portImg6.style.display = "inline-block";
    portImg7.style.display = "none";
    portImg8.style.display = "none";
    all.style.backgroundColor = "transparent";
    all.style.color = "rgb(185, 39, 99)";
    all.style.border = "1px solid rgb(185, 39, 99)";
    studio.style.backgroundColor = "transparent";
    studio.style.color = "rgb(185, 39, 99)";
    studio.style.border = "1px solid rgb(185, 39, 99)";
    storybook.style.backgroundColor = "transparent";
    storybook.style.color = "rgb(185, 39, 99)";
    storybook.style.border = "1px solid rgb(185, 39, 99)";
    branding.style.backgroundColor = "transparent";
    branding.style.color = "rgb(185, 39, 99)";
    branding.style.border = "1px solid rgb(185, 39, 99)";
    photography.style.backgroundColor = "rgb(185 39 99)";
    photography.style.color = "white";
    photography.style.border = "1px solid rgba(185, 39, 100, 0)";
}

function storybookFunc() {
    portImg1.style.display = "inline-block";
    portImg2.style.display = "inline-block";
    portImg3.style.display = "inline-block";
    portImg4.style.display = "none";
    portImg5.style.display = "none";
    portImg6.style.display = "none";
    portImg7.style.display = "none";
    portImg8.style.display = "none";
    all.style.backgroundColor = "transparent";
    all.style.color = "rgb(185, 39, 99)";
    all.style.border = "1px solid rgb(185, 39, 99)";
    studio.style.backgroundColor = "transparent";
    studio.style.color = "rgb(185, 39, 99)";
    studio.style.border = "1px solid rgb(185, 39, 99)";
    photography.style.backgroundColor = "transparent";
    photography.style.color = "rgb(185, 39, 99)";
    photography.style.border = "1px solid rgb(185, 39, 99)";
    branding.style.backgroundColor = "transparent";
    branding.style.color = "rgb(185, 39, 99)";
    branding.style.border = "1px solid rgb(185, 39, 99)";
    storybook.style.backgroundColor = "rgb(185 39 99)";
    storybook.style.color = "white";
    storybook.style.border = "1px solid rgba(185, 39, 100, 0)";
}

function brandingFunc() {
    portImg1.style.display = "inline-block";
    portImg2.style.display = "inline-block";
    portImg3.style.display = "inline-block";
    portImg4.style.display = "inline-block";
    portImg5.style.display = "none";
    portImg6.style.display = "none";
    portImg7.style.display = "none";
    portImg8.style.display = "none";
    all.style.backgroundColor = "transparent";
    all.style.color = "rgb(185, 39, 99)";
    all.style.border = "1px solid rgb(185, 39, 99)";
    studio.style.backgroundColor = "transparent";
    studio.style.color = "rgb(185, 39, 99)";
    studio.style.border = "1px solid rgb(185, 39, 99)";
    photography.style.backgroundColor = "transparent";
    photography.style.color = "rgb(185, 39, 99)";
    photography.style.border = "1px solid rgb(185, 39, 99)";
    storybook.style.backgroundColor = "transparent";
    storybook.style.color = "rgb(185, 39, 99)";
    storybook.style.border = "1px solid rgb(185, 39, 99)";
    branding.style.backgroundColor = "rgb(185 39 99)";
    branding.style.color = "white";
    branding.style.border = "1px solid rgba(185, 39, 100, 0)";
}

let scrollUp = document.querySelector("#scrollUp");

window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        scrollUp.style.opacity = "1";
        document.querySelector(".navParent").style.backgroundColor = "rgb(32, 24, 31)";
    }
    else{
        scrollUp.style.opacity = "0";
        document.querySelector(".navParent").style.backgroundColor = "rgba(32, 24, 31, 0)";
    }
});

scrollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});