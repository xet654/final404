gsap.fromTo(".liSocial", {opacity:0,x:-750},{opacity:1,x:0,stagger:0.25});

gsap.from(".list",{opacity:0,duration:2.5});
gsap.from(".hLogo",{opacity:0,duration:2.5,x:-10});

overFunction1=()=>{
    gsap.fromTo(".liSocial-1", {x:0},{x:100,duration:0.1});

}
outFunction1=()=>{
    gsap.fromTo(".liSocial-1",{x:100},{x:0,duration:0.1})
}
overFunction2=()=>{
    gsap.fromTo(".liSocial-2", {x:0},{x:100,duration:0.1});

}
outFunction2=()=>{
    gsap.fromTo(".liSocial-2",{x:100},{x:0,duration:0.1})
}
overFunction3=()=>{
    gsap.fromTo(".liSocial-3", {x:0},{x:100,duration:0.1});

}
outFunction3=()=>{
    gsap.fromTo(".liSocial-3",{x:100},{x:0,duration:0.1})
}
overFunction4=()=>{
    gsap.fromTo(".liSocial-4", {x:0},{x:100,duration:0.1});

}
outFunction4=()=>{
    gsap.fromTo(".liSocial-4",{x:100},{x:0,duration:0.1})
}


var tekst=document.createElement("span")
tekst.innerHTML="sauhdisuahdisdiuahsdi";
tekst.style.color="red";
tekst.classList="pMaintain";
    
MTover=()=>{
    var state=false; 
    var tekst=document.createElement("span")
    let zadnji=document.querySelector(".show-slika");
    let kontejner=document.querySelector(".maintain1");
    tekst.innerHTML="sauhdisuahdisdiuahsdiidasisddiahdaidahsjhdiksajhadshjkdhaskhsd";
    tekst.style.color="white";
    tekst.classList="pMaintain";
    gsap.to(".coding1",{opacity:0,duration:0.2,x:30})
    gsap.to(".frontend1",{opacity:0,duration:0.2,x:30})
    gsap.fromTo(".maintain1",{x:0},{x:70,duration:2})
    if (state==false){
        // let kontejner=document.querySelector(".maintain1");
        // let zadnji=document.querySelector(".show-slika");
        kontejner.appendChild(tekst);
        kontejner.appendChild(zadnji);
        zadnji.style.transform = 'rotate(180deg)';

        state=true;
    }else{
        document.getElementById("p-maintainID").style.transform="scaleX(0)";
        state=false;
        
    }

}
MTout=()=>{
    let kontejner=document.querySelector(".maintain1");
    let zadnji=document.querySelector(".show-slika");
    kontejner.removeChild(tekst);
    gsap.to(".coding1",{opacity:1,duration:0.2,x:-30})
    gsap.to(".frontend1",{opacity:1,duration:0.2,x:-30})
    gsap.To(".maintain1",{x:-70})
    zadnji.style.transform="rotate(180deg)";
}



    

