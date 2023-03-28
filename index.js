// $(document).ready(function(){
//     $("#myArea").val($("body").html())
//     $("#btn1").click(function(){
//         $("body").html()
//     });
// });

$(document).ready(function(){
    let g_element = "";
    var global_id = 1;

    $("#create").click(function(){
        $("body").prepend(`<section class="temp"><input type="text" id="tempInput"/></section>`)


        // $("body").prepend(`<section class="custom"><button>Custom</button></section>`)


        // let tag = $("#tag").val();
        // g_element.append(`<${tag} id='${global_id}'>
        // </${tag}>`);
        // $(`#${global_id}`).text($("#content").val());
        // $(`#${global_id}`).attr($("#property").val(),$("#value").val());
    })
    $("#VorH").click(function(){
        $(".custom").toggleClass("Horizontal",1000)
    })
    $("#submit").click(function(){
        let content = "";
        content = $("#tempInput").val()
        $(".temp").remove()
        $("body").prepend(`<section class="custom"><button class="btncustom">${content}</button></section>`)
    })
})