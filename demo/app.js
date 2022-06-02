//Dato-Footer
const yearOutput = document.getElementById("year");

//Intersection Observer stuff
const background = document.querySelectorAll(".background")
const lastBackground = document.querySelectorAll(".last_background")
const paragraphWrapper = document.querySelectorAll(".txt_wrapper")

// const paragraph = document.querySelectorAll(".txt_with_fade")

window.addEventListener(
    "load",
    (e) => {

        ObjectObserveToChangeBackground(0,rMargin="-33%",tHold=0.05);
        ObjectObserveToChangeBackground(1, rMargin="-28%",tHold=0.02);
        ObjectObserveToChangeLastBackground(2, rMargin="0px 0px 0px 0px",tHold=1)

        ObjectObserveToFadeText(0, rMargin= "-10% 0px 200px 0px", tHold=0.8);
        ObjectObserveToFadeText(1, rMargin= "-50% 0px 200px 0px", tHold=0.05)
        

        GetYear(yearOutput);

    },
    false
  );
  

const ObjectObserveToChangeBackground = (index, rMargin, tHold) => {


    const options = {
        root: null,
        rootMargin: rMargin,
        threshold: tHold,
    }

    const observer = new IntersectionObserver(Elentries =>{
        background[index].classList.toggle("show-background", Elentries[0].isIntersecting)
    }, 
        options
    )

    return  observer.observe(paragraphWrapper[index]);
}



const ObjectObserveToChangeLastBackground = (index, rMargin, tHold) => {


    const options = {
        root: null,
        rootMargin: rMargin,
        threshold: tHold,
    }

    const observer = new IntersectionObserver(Elentries =>{

        if(Elentries[0].isIntersecting){
            lastBackground[0].style.top = (lastBackground[0].getBoundingClientRect().top) * -1
            console.log(lastBackground[0].getBoundingClientRect().top)
        }
        
    }, 
        options
    )



    return  observer.observe(paragraphWrapper[index]);
}



const ObjectObserveToFadeText = (index, rMargin, tHold) => {


    const options = {
        root: null,
        rootMargin: rMargin,
        threshold: tHold,
    }

    const observer = new IntersectionObserver(Elentries =>{
        paragraphWrapper[index].classList.toggle("hideTxt", !Elentries[0].isIntersecting)
    }, 
        options
    )

    return  observer.observe(paragraphWrapper[index]);
}


const GetYear = (outputElement) => {
    const date = new Date();

    return outputElement.innerHTML = " " + date.getFullYear() + " ";
}