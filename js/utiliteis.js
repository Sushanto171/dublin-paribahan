// button scale
function clickButtonDownUp (id){
    document.getElementById(id).addEventListener('mousedown',function(){
        document.getElementById(id).style.scale ='.9';
    })
    document.getElementById(id).addEventListener('mouseup',function(){
        document.getElementById(id).style.scale ='1';
    })
}
