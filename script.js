/* --------- toggle icon navbar ------------*/ 
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick=()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* --------- scroll sections active link ------------*/ 
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -  150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height) {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    /* --------- sticky navbar ------------*/ 
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /* --------- remove toggle icon navbar when navbar link (scroll) ------------*/ 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* --------- scroll reveal ------------*/ 
ScrollReveal({ 
    // reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',
{ origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'})


/* --------- typed js ------------*/ 

const typed = new Typed('.multiple-text', {
    // strings: ['a Student','Studying at','Keshav Memorial','Institute of Technology'],
    strings: ['HPC SoftWare Engineering Intern AT DRDL', 'Student','Programmer','Tech enthusiast'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 500,
    loop:true
})

function showEducation() {
    var newHTML=
    `<h2 class="heading">My <span>Education</span></h2>
    <p>Pursuing a B.Tech in Computer Science with a specialization 
    in <span>Artificial Intelligence and Machine Learning </span>at KMIT, 
    I bring a solid academic foundation from JMJ School (10 CGPA in SSC) 
    and Narayana College (98.5% in Intermediate).
    Positioned at the intersection of technology and innovation, 
    I am poised to contribute substantively to the fields of Artificial
     Intelligence and Machine Learning, leveraging a blend of academic 
     rigor and a passion for cutting-edge advancements.</p>
    <button onclick="AboutMe()" class="btn">About Me</button>`
document.getElementsByClassName('about-content')[0].innerHTML = newHTML;
}
function AboutMe() {
    var aboutmeHTML = 
    `
    <h2 class="heading">About <span>Me</span></h2>
    <h3>Passionate KMIT student</h3>
    <p>Coding enthusiast, and problem 
                    solver dedicated to mastering technology. I thrive on 
                    xploring new tech horizons, consistently seeking opportunities to 
                    innovate, learn, and contribute meaningfully to the world of software
                     development. Eager to collaborate with like-minded individuals and engage 
                     in projects that challenge and inspire. Let's build solutions, push boundaries, and make a positive impact together!</p>
                <button onclick="showEducation()" class="btn">My Education</button>
    `
    document.getElementsByClassName('about-content')[0].innerHTML = aboutmeHTML;
    
}


//Certificate popup
function showCertificate1() {
    document.getElementById("certificatePopup1").style.display = "flex";
    // ocument.getElementsByClassName("certifiactePopup-container")[0].style.left = "500px"/;
}

function closeCertificate1() {
    document.getElementById("certificatePopup1").style.display = "none";
}
function showCertificate2() {
    document.getElementById("certificatePopup2").style.display = "flex";
}

function closeCertificate2() {
    document.getElementById("certificatePopup2").style.display = "none";
}
function showCertificate3() {
    document.getElementById("certificatePopup3").style.display = "flex";
}

function closeCertificate3() {
    document.getElementById("certificatePopup3").style.display = "none";
}


// Tech stack popup
function showProjectPopup1() {
    document.getElementById("projectPopup1").style.display = "flex";
}

function closeProjectPopup1() {
    document.getElementById("projectPopup1").style.display = "none";
}


function showProjectPopup2() {
    document.getElementById("projectPopup2").style.display = "flex";
}

function closeProjectPopup2() {
    document.getElementById("projectPopup2").style.display = "none";
}


function showProjectPopup3() {
    document.getElementById("projectPopup3").style.display = "flex";
}

function closeProjectPopup3() {
    document.getElementById("projectPopup3").style.display = "none";
}