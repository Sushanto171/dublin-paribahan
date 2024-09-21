// // mobile menu 
document.getElementById('menu-button').addEventListener('click', function(){
    clickButtonDownUp('menu-button');
    const  mobileMenu =document.getElementById('mobile-menu') ;
   if(mobileMenu.classList.contains('hidden') === true){
    mobileMenu.classList.remove('hidden');
}
else{
    mobileMenu.classList.add('hidden');
   }
})
// identity button
document.getElementById('identity-button').addEventListener('click',function(){
    clickButtonDownUp('identity-button');

})