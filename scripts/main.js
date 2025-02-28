function newImage(){
    var image = document.getElementById("myImage");
    if (image.src.match("begin")){
    image.src = "images/image1.jpg";
    }else{
    image.src = "images/image2.jpg";
    }
}

function newImage2(){
    var image = document.getElementById("myImage2");
    if (image.src.match("begin")){
    image.src = "images/image3.jpg";
    }else{
    image.src = "images/image4.jpg";
    }
}

function newImage3(){
    var image = document.getElementById("myImage3");
    if (image.src.match("begin")){
    image.src = "images/image5.jpg";
    }else{
    image.src = "images/image6.jpg";
    }
}