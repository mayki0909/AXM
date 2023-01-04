
function resize(){   
    console.log(location.pathname,screen.width)
    if (screen.width <= 900) {
        if(window.location.pathname.includes('/index.html') || window.location.pathname.endsWith('/')) {
            document.location = 'indexMobile.html';
        }
    } else {
        if (window.location.pathname.includes('/indexMobile.html')) { 
            document.location = 'index.html';
        }                                                      
    }
}
window.onresize = resize;
resize();
