/*function navbarDropdown() {
    //gets a string containing the name(s) of the class(s) attatched to the element with the id "dropdown_content_container_id"
   let element = document.getElementById("dropdown_content_container_id");
   //sees if there is a class attached
   if(element.className === "dropdown_menu_container mobile_only"){
    //if that is true, adds the class "mobile_layout". The space is needed as that is how you seperate classes in HTML, and i am simply tacking another class on.
    element.className = "display mobile_only";
    console.log(element.className);
   } else {
    //if this is not true (such as when the "mobile_layout" class is attatched, reset the class's)
    element.className = "dropdown_menu_container mobile_only";
    console.log(element.className);
   }
} */

function randomImage(){
    let thunderbird_random = ["anomoclaris.png", "aws_tos.png", "dinkythetrex.jpg", "Forklift_Certified.png", "free_speech_cancelled.gif", "free_thinkers_when.gif", "Garfield_the_hedgehog.png", "gordon.jpg", "guy_fieri.png", "image.gif", "minor_inconvinience.gif", "OneOfTheManyDangers.png", "peter.gif", "sv_cheats_1.png", "sweet_baby_jesus.png", "the_concept_of_death.gif", "very_scholarly_article.jpg", "villager-real-life.png", "you_are_what_you_eat.jpg"];
    let randomNum = Math.floor(Math.random() * (thunderbird_random.length));
    img = "/media/thunderbird_random/" + thunderbird_random[randomNum];
    console.log(img);
    document.getElementById("thunderbird_random").src = img;
}