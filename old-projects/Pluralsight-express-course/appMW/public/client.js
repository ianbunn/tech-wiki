$(function(){
    $.get("/blocks", appendToList);

    function appendToList(blocks){
        var list = [];
        for(var i in blocks){
            list.push($("<li>",{text:blocks[i]}));
        };
        $(".block-list").append(list);
    };
});