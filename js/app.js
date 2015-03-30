$(document).ready(
	function() {
	 $( "input" ).keyup(function(e) {
    var max = $(this).val();
     if(max == "" || max == null)
     {
      alert("Please enter a valid number");
      //e.preventDefault();
     }
     else if( isNaN(max) == true)
     {
       alert("You hav enot entered a number, Pleas eneter a number");
       //e.preventDefault();
     }
     else if(max.match(/\./)){
      alert("You have entered a  decimal number");
      //e.preventDefault();
    }
    else{
      fizzbuzzer(max);
    }

                }).keyup();
});

function fizzbuzzer(max){

    for(var i = 1; i <= max; i++)
     {
       
          if((i%3) === 0  && (i%5 !==0)) 
      {
        $('body').append('<body>' + "Fizz"+ ' </body>');
      } 
      else if ((i%5) === 0 && (i%3 !==0)){

              $('body').append('<body>' + "Buzz"+ ' </body>');}
 
            else if ((i%3 === 0) && (i%5 === 0)){
         
              $('body').append('<body>' + "FizzBuzz" + ' </body>');}
 
            else{
              $('body').append('<body>' + i + ' </body>');}


        }
    }


//initailly for i = 1 , msg ="" ,  1%3 = 1, so msg = "" , 1%5 = 1 so msg = " "  return msg || 1 = "" || 1 = 1
//          for i = 2 , msg = "",  2%3 = 1, so msg = ""  ,2%5 = 1 so msg = " "  return msg || 2 = "" || 2 = 2
//          for i = 3 , msg = "" , 3%3 = 0, so  msg = "Fizz" ,3%5 = 3 so msg = "Fizz" return Fizz || 3 = Fizz
//          for i = 4 , msg = "Fizz" 4%3 = 1 so msg = "Fizz" , 4%5 = 4 so msg = "Fizz" return Fizz ||4 = Fizz
//          for i = 5 , msg = "Fizz" 5%3 = 2 so msg = "Fizz" ,5%5 = 0 so msg = "FizzBuzz" return FizzBuzz
//          for i = 6 , msg = "FizzBuzz" 6%3 = 0 so msg = "FizzBuzzFizz" ,6%5 = 1 so msg = "FizzBuzzFizz" return FizzBuzzFizz          
 

