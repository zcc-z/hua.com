let baseUrl = "http://localhost//twice/hua.com";//基础路径

define(['jquery'],function(){
    return{
        // 顶部导航
        render:function(){
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                // data: "data",
                dataType: "json",
                success: function (res) {
                    // console.log(res);
                    let temp = '';
                    res.forEach(elm =>{
                        // console.log(elm);
                        temp+=`
                        <div class="con-box">
                            <a href="${baseUrl}/src/html/product.html?id=${elm.id}">
                                <div class="img-show">
                                    <img src="${elm.pri}" alt="">
                                </div>
                                <div class="con-show">
                                    <p>${elm.title}</p>
                                    <p class="num">￥${elm.price}</p>
                                    <p class="xq">已售 ${elm.num}万 件</p>
                                </div>
                            </a>
                            
                        </div>
                        `;
                    });
                    $('.render').html(temp);
                }
            });
        }
    }
});