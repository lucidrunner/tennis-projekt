

$(document).ready(function(){
    const mqMobile = window.matchMedia('(max-width: 425px)');
    const navIndexText = "Om STF"; 


    mqMobile.addEventListener('change', mqHandler);

    mqHandler(mqMobile)

    function mqHandler(e){
        console.log(
        e.matches ? 'small' : 'not small');

        if(e.matches){
            $("#nav-index").text("Om");
        }
        else{
            $("#nav-index").text(navIndexText);
        }
    }

}); 
