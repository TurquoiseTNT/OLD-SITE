// MTD - MOBILE TO DESKTOP
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log();("[SITE CHANGER - MTD]: Site is Correct, MOBILE.");
  }else{
    // false for not mobile device
    window.location.replace("https://tnt.is-a.dev/index.html");
  }
