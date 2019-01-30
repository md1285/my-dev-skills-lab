// $('tr').remove();

let $buttons = $('.remove');


$buttons.on('click', function(){
    console.log(this.closest('tr'))
   $(this.closest('tr')).remove();
});

$('footer button').on('click', function () {
    if ($('footer input').val()) {
        let $inputValue = $('footer input').val();
        $('table tbody').append(
            `<tr>
                <td><button class="remove">X</button></td>
                <td><h4>${$inputValue}</h4></td>
            </tr>`
    );
        $('footer input').val('')
    }
    $buttons = $('.remove');
    $buttons.on('click', function(){
        console.log(this.closest('tr'));
        $(this.closest('tr')).remove();
    });
});


