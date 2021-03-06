$(document).ready(function(){
    $(".about").hide();
    $(".exp").hide();
    $(".proj").hide();
    $(".edu").hide();
    $(".cont").hide();
    $(".logo").show();
    $("#home").addClass("currentTab");
        
    $("#home, #aboutMe, #experience, #education, #projects, #contact").click(function(){
        $(".logo").fadeOut(500).delay(500);
        $("#home").removeClass("currentTab");
        $(".about").fadeOut(500).delay(500);
        $("#aboutMe").removeClass("currentTab");
        $(".exp").fadeOut(500).delay(500);
        $("#experience").removeClass("currentTab");
        $(".proj").fadeOut(500).delay(500);
        $("#projects").removeClass("currentTab");
        $(".edu").fadeOut(500).delay(500);
        $("#education").removeClass("currentTab");
        $(".cont").fadeOut(500).delay(500);
        $("#contact").removeClass("currentTab");
                   
        if(this.id == "home") {
            $(".logo").fadeIn(500);
            $("#home").addClass("currentTab");
        } else if(this.id == "aboutMe") {
            $(".about").fadeIn(500);
            $("#aboutMe").addClass("currentTab");
        } else if(this.id == "experience") {
            $(".exp").fadeIn(500);
            $("#experience").addClass("currentTab");
        } else if(this.id == "education") {
            $(".edu").fadeIn(500);
            $("#education").addClass("currentTab");
        } else if(this.id == "projects") {
            $(".proj").fadeIn(500);
            $("#projects").addClass("currentTab");
        } else if(this.id == "contact") {
            $(".cont").fadeIn(500);
            $("#contact").addClass("currentTab");
        }
    });
});