$(document).ready(()=>{

    $('.edit-author').on('click',(e)=>{
        $target = $(e.target);

        const id = $target.attr('id');

        $.ajax({
            type: 'GET',
            url: '/admin/update_author/'+ id,
            success : function(response){
                // alert('Editting Book');
                window.location.href='/admin/update_author/'+ id
            },
            error: function(err){
                console.log(err);
            }
        })
    })    

    $('.delete-author').on('click',(e)=>{
        $target = $(e.target);
        //console.log($target.attr('id'));

        const author_id = $target.attr('id');

        $.ajax({
            type: 'DELETE',
            url: '/admin/delete_author/' + author_id,
            success : function(response){
                alert('Deleting Author');
                window.location.href='/admin/authors'
            },
            error: function(err){
                console.log(err);
            }
        })
    })
})