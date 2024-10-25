
function select() {
    const buttonElement = document.querySelector(".quest");

    if (buttonElement.innerHTML === "AM I SELECTED?") {
      buttonElement.innerHTML = `THANK YOU`;
    } else { buttonElement.innerHTML = `AM I SELECTED?`;
    }
}
function changeSlide(click) {

document.querySelector('.hom').style.display ='block';
document.querySelector('.exp').style.display ='none';
document.querySelector('.edU').style.display ='none';
document.querySelector('.skilL').style.display ='none';
document.querySelector('.abME').style.display ='none';
document.querySelector('.port').style.display ='none';


if (click === "home") {
document.querySelector('.hom').style.display ='block';
document.querySelector('.exp').style.display ='none';
document.querySelector('.edU').style.display ='none';
document.querySelector('.skilL').style.display ='none';
document.querySelector('.abME').style.display ='none';
document.querySelector('.port').style.display ='none';

} else if (click === "experience") {
document.querySelector('.hom').style.display ='none';
document.querySelector('.exp').style.display ='block';
document.querySelector('.edU').style.display ='none';
document.querySelector('.skilL').style.display ='none';
document.querySelector('.abME').style.display ='none';
document.querySelector('.port').style.display ='none';

} else if (click === "EDUCATION") {
document.querySelector('.hom').style.display ='none';
document.querySelector('.exp').style.display ='none';
document.querySelector('.edU').style.display ='block';
document.querySelector('.skilL').style.display ='none';
document.querySelector('.abME').style.display ='none';
document.querySelector('.port').style.display ='none';

} else if (click === "SKILLS") {
document.querySelector('.hom').style.display ='none';
document.querySelector('.exp').style.display ='none';
document.querySelector('.edU').style.display ='none';
document.querySelector('.skilL').style.display ='block';
document.querySelector('.abME').style.display ='none';
document.querySelector('.port').style.display ='none';

} else if (click === "ABOUT ME") {
document.querySelector('.hom').style.display ='none';
document.querySelector('.exp').style.display ='none';
document.querySelector('.edU').style.display ='none';
document.querySelector('.skilL').style.display ='none';
document.querySelector('.abME').style.display ='block';
document.querySelector('.port').style.display ='none';
} else if (click === "PORTFOLIO"){
document.querySelector('.hom').style.display ='none';
document.querySelector('.exp').style.display ='none';
document.querySelector('.edU').style.display ='none';
document.querySelector('.skilL').style.display ='none';
document.querySelector('.abME').style.display ='none';
document.querySelector('.port').style.display ='block';
}
};


