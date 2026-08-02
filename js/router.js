function showSection(section){

    const sections=document.querySelectorAll("section");

    sections.forEach(s=>{

        s.style.display="none";

    });

    section.style.display="block";
}