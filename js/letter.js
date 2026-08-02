function openLetter(friend){

    document.getElementById("letterModal").style.display="flex";

    document.getElementById("letterContent").innerHTML=friend.letter;

}

const closeBtn=document.getElementById("closeLetter");

if(closeBtn){

    closeBtn.onclick=function(){

        document.getElementById("letterModal").style.display="none";

    };

}