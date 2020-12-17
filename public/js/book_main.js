$(document).ready(()=>{

    $('.edit-book').on('click',(e)=>{
        $target = $(e.target);

        const id = $target.attr('id');

        $.ajax({
            type: 'GET',
            url: '/admin/update_book/'+ id,
            success : function(response){
                // alert('Editting Book');
                window.location.href='/admin/update_book/'+ id
            },
            error: function(err){
                console.log(err);
            }
        })
    })


    $('.delete-book').on('click',(e)=>{
        $target = $(e.target);
        //console.log($target.attr('id'));

        const book_id = $target.attr('id');

        $.ajax({
            type: 'DELETE',
            url: '/admin/delete_book/' + book_id,
            success : function(response){
                alert('Deleting Book');
                window.location.href='/admin/books'
            },
            error: function(err){
                console.log(err);
            }
        })
    })


})