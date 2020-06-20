$("document").ready(function () {
    let id;
    // console.log("hello world");
    $(".like").on("click", function () {
        // console.log("click!!!")
        id =$(this).attr("id")
        console.log(id);
        $.ajax("/hello/ajax/add_like/",
            {"data":{"id":id},
                "method":"get",
                "success":function (data) {
                    // console.log(data);
                    $("#" + id).html("Likes: " + data)
                        }
                    }
                )
    })
});

// $("document").ready(function () {
//     let id;
//     $("form").on("click", function () {
//         id=$(this).attr("id"),
//     console.log(id)
//     })
// var text = $(".form-control");
//     $(".btn").on("click", function () {
//     $.ajax("/hello/ajax/comment/",
//         {"data":text},
//             "method":"post",
//             "succeess":function (data) {
//     $.html("comment.objects.all")
//         }})
//         csrfmiddlewaretoken:$('input:[comment=csrfmiddlewaretoken]').val(),
//     },)
// })

$("document").ready(function () {
    $(".btn-warning").on("click", function () {
    let id = $(this).attr("id");
    let val = $("#textarea" + id).val();
    // if(val.length > 0){}else{}
    $("#textarea" + id).val("");
    $.ajax("/hello/ajax/comment/",{"data":{"id":id, "val":val},
        "method":"get",
        "success":function (data) {
        data = $.parseJSON(data);
        console.log(data);
        let row = "<i>" + val + "</i>"+"<h6>" + data['date'] + "</h6>" ;
            $("#comment-container" + id).append(row)

        }});
        console.log(val)
    })
});

