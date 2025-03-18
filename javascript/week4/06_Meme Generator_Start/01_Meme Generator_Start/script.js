/* Declare our variable
Toptext, bottomText,Image, TopCaption, bottomCaption*/

    let topText = document.getElementById('top-text');
    let topCaption = document.getElementById('top-caption');
    function loadTopCaption(){
        topCaption.textContent=topText.value;
    }

    topText.addEventListener('keyup',loadTopCaption);


    let bottomText = document.getElementById('bottom-text');
    let bottomCaption = document.getElementById('bottom-caption');

    function loadbottomCaption(){
        bottomCaption.textContent=bottomText.value;
    }
    bottomText.addEventListener('keyup',loadbottomCaption);
  
    let urlValue =document.getElementById('image-url');
    let imageSRC=document.getElementById('image-src');
    function loadURL(){
        imageSRC.src=urlValue.value;
       // imageSRC.setAttribute('src',urlValue.value);
    }
    urlValue.addEventListener('keyup',loadURL);