$(document).ready(function(){
    $("div").hide();
    $(".logo").show();
        
    $("#home, #aboutMe, #experience, #education, #projects, #contact").click(function(){
        $("div").fadeOut(300).delay(500);
                   
        if(this.id == "home") {
            $(".logo").fadeIn(300);
        } else if(this.id == "aboutMe") {
            $(".about").fadeIn(300);
        } else if(this.id == "experience") {
            $(".exp").fadeIn(300);
        } else if(this.id == "education") {
            $(".edu").fadeIn(300);
        } else if(this.id == "projects") {
            $(".proj").fadeIn(300);
        } else if(this.id == "contact") {
            $(".cont").fadeIn(300);
        }
    });
});