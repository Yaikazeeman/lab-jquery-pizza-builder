// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    $(".btn-pepperonni").click(function(){
        $(".btn-pepperonni").toggleClass("active")
        $(".pep").toggle()
        $("li:contains($1 pepperonni)").toggleClass("no-display");
        getTotalPrice()
    })

    $(".btn-mushrooms").click(function(){
        $(".btn-mushrooms").toggleClass("active")
        $(".mushroom").toggle();
        $("li:contains($1 mushrooms)").toggleClass("no-display");
        getTotalPrice()
    })
    
    $(".btn-green-peppers").click(function(){
        $(".btn-green-peppers").toggleClass("active")
        $(".green-pepper").toggle();
        $("li:contains($1 green peppers)").toggleClass("no-display");
        getTotalPrice()
    });

    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active")
    $("li:contains($3 white sauce)").addClass("no-display")

    $(".btn-sauce").click(function(){
        $(".btn-sauce").toggleClass("active")
        $(".sauce").toggleClass("sauce-white");
        $("li:contains($3 white sauce)").toggleClass("no-display");
        getTotalPrice()
    });
 
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active")
    $("li:contains($5 gluten-free crust)").addClass("no-display")

    $(".btn-crust").click(function(){
        $(".btn-crust").toggleClass("active")
        $(".crust").toggleClass("crust-gluten-free");
        $("li:contains($5 gluten-free crust)").toggleClass("no-display");
        getTotalPrice()
    });

    getTotalPrice()

    function getTotalPrice(){
        let totalPrice = 10;
        if($(".btn-pepperonni").hasClass("active")){
            totalPrice += 1;
        }
        if($(".btn-mushrooms").hasClass("active")){
            totalPrice += 1;
        }
        if($(".btn-green-peppers").hasClass("active")){
            totalPrice += 1;
        }
        if($(".btn-sauce").hasClass("active")){
            totalPrice += 3;
        }
        if($(".btn-crust").hasClass("active")){
            totalPrice += 5;
        }
        $(".panel strong").text("$" + totalPrice);

    }


});
