// DTM - DESKTOP TO MOBILE
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    window.location.replace("https://turquoisetnt.tk/mobile.html");
  }else{
    // false for not mobile device
    console.log("[SITE CHANGER - DTM]: Site is Correct, DESKTOP.");
  }