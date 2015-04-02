            $(document).ready(
              function() {
                $( "input" ).keyup(function(e) {
                    console.log(e.keyCode); // this value
                    if(e.keyCode != 13)
                      {
                        var inputs = $(this).val();
                        $('#result').text(inputs);
                      }
                    else
                      {
                        var max;
                        max = $('#result').text();
                        fizzbuzzer(max);
                        return false;
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
                else if ((i%5) === 0 && (i%3 !==0))
                {

                  $('body').append('<body>' + "Buzz"+ ' </body>');
                }

                else if ((i%3 === 0) && (i%5 === 0))
                {
                    $('body').append('<body>' + "FizzBuzz" + ' </body>');
                }
                else
                {
                    $('body').append('<body>' + i + ' </body>');
                }
              }
            }
