function $(id){

    return document.getElementById(id);

}

function random(min,max){

    return Math.floor(

        Math.random()*(max-min+1)

    )+min;

}