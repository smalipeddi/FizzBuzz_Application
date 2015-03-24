
$(document).ready(

	function(){
		//debugger;


		for(var i = 1; i <= 100; i++)
		{

	        if((i%3) == 0  && (i%5 !=0)) 
			{
				$('body').append('<p>' + "Fizz"+ ' </p>');
			} 
			else if ((i%5) == 0 && (i%3 !=0)){

	            $('body').append('<p>' + "Buzz"+ ' </p>');}
 
            else if ((i%3 == 0) && (i%5 == 0)){
	       
	            $('body').append('<p>' + "FizzBuzz" + ' </p>');}
 
            else{
	            $('body').append('<p>' + i + ' </p>');}


        }
    }
);