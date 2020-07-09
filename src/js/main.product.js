requirejs.config({
    paths:{
        jquery:'../../node_modules/_jquery@3.5.1@jquery/dist/jquery.min',
        product:'../js/lib/product',
        cookie:'./cookie'
    }

    
});



require(["jquery","product"],function ($,o) { 
       o.render(function(id,price){
           $('.add-car').on('click',function(){
                o.addItem(id,price);
           });
       }); 
       
});