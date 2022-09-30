$(function(){
    var t = $("#quantity"); 
    $("#min").click(function(){		
        t.val(parseInt(t.val())+1)
        setTotal();
    })
    $("#add").click(function(){
        if(t.val()>1){
        t.val(parseInt(t.val())-1);
        }
        setTotal();
    })
});