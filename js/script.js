/* ==============JQ============ */

$(document).ready(function(){


    


    // =========
 

    $('input').focus(function(){
        $(this).val('focused');
    });
    $('input').blur(function(){
        $(this).val('blur');
    });

    // =======

    $('#btn5').on({
       
        'dblclick' : function(){
           alert('hello Bangladesh');
        },
        'mouseenter' : function(){
            console.log('hello query');
        }
    });


    $('.box4').hover(function(){
       console.log("Enter");
    }); 


    $('.box4').on('mousedown', function(){
        alert('hello world');
    });


    $('.btns').dblclick(function(){
        alert('hello world');
    });

 
    $('button').on('click', function(){
        $('[class="text2"]').remove();
    });

    // ex-8
    $('.a10').on('click', function(){
        $('#a10').remove();
    } );
     

   
    // ex-8

    $('h1').click(function(){
        $(this).hide()
    })

    // ex -7


    $('#bt1').on( 'click', function(){
        $('#p1').hide();
    });
    $('#bt2').on( 'click', function(){
        $('#p1').show();
    });

    // ex-6

    $('h2').on( 'click', function(){
        alert("h2 clicked");
    });

    // ex-5


    $('.one').hide(2000);


    // alert("hello");

    // ex1
    // $('button').click(function(){
    //     alert("hello world");
    // })

    $('#alert').on('click', function(){
        alert("hello world");
    })


    // ex -2

    $('#btnh').on('click', function(){
        $('#lorem1').hide()
    })
    $('#btns').on('click', function(){
        $('#lorem1').show()
    })
    $('#btnt').on('click', function(){
        $('#lorem1').toggle()
    })

    // ex -3

    $('p').on('click', function(){
        $(this).hide(6000);
    })

    // ex- 4

    $('#btnfo').on('click', function(){
        $('#lorem2').fadeOut();
    })

    $('#btnfi').on('click', function(){
        $('#lorem2').fadeIn();
    })

    $('#btnft').on('click', function(){
        $('#lorem2').fadeToggle(5000);
    })

})