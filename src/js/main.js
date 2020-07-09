requirejs.config({
    // baseUrl:'../../node_modules',
    paths:{
        jquery:'../../node_modules/_jquery@3.5.1@jquery/dist/jquery.min',
        index:'../js/lib/index'
    }
})

// require(['jquery'],function($){
//     $('#btn').on('click',function(){
//         alert(1);
//     })
// })

require(['index'],function (o) { 
    o.render();
 })
