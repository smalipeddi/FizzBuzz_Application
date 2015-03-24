
$(document).ready(

	function(){
		//debugger;


		for(var i = 1; i <= 100; i++)
		{

	        if((i%3) == 0  && (i%5 !=0)) 
			{
				$('body').append('<body>' + "Fizz"+ ' </body>');
			} 
			else if ((i%5) == 0 && (i%3 !=0)){

	            $('body').append('<body>' + "Buzz"+ ' </body>');}
 
            else if ((i%3 == 0) && (i%5 == 0)){
	       
	            $('body').append('<body>' + "FizzBuzz" + ' </body>');}
 
            else{
	            $('body').append('<body>' + i + ' </body>');}


        }
    }
);