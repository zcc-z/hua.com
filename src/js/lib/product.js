let baseUrl = "http://localhost//twice/hua.com";//基础路径


define(['jquery','cookie'],function($,cookie){
    return{
        render:function(callback){
            let id = location.search.split("=")[1];
            // console.log(id);
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id:id
                },
                dataType: "json",
                success: function (res) {
                    // console.log(res);
                    let pro = JSON.parse(res.pro);
                    // console.log(pro);
                    // console.log(res.pripro);
                    let pripro=JSON.parse(res.pripro);
                    // console.log(pripro);
                    let temp = `
                    <div class="pro-hd">
                    <a href="Javascript:;" class="xy">首页</a>
                    &lt;
                    <a href="Javascript:;" class="xh">鲜花</a>
                    &lt;
                    <a href="Javascript:;"><b class="pro">${pro[0].hd}</b></a>
                </div>
                <div class="pro-con">
                    <div class="pro-l float_l">
                        <div class="big-img">
                            <img src="${pripro[0].img}" alt="">
                        </div>
                        <div class="small-img">
                            <div class="img-box  actived">
                                <img src="${pripro[0].img1}" alt="">
                            </div>
                            <div class="img-box">
                                <img src="${pripro[0].img2}" alt="">
                            </div>
                            <div class="img-box">
                                <img src="${pripro[0].img3}" alt="">
                            </div>
                            <div class="img-box">
                                <img src="${pripro[0].img4}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pro-r float_r">
                        <div class="title">
                            <h4>${pro[0].hd}</h4>
                            <p>${pro[0].tran}</p>
                            <p class="pro-num">已售 <span>${res.num}</span> 件</p>
                        </div>
                        <div class="attr">
                            <dl class="clear_fix">
                                <dt class="float_l">类别：</dt>
                                <dd class="float_l">${pro[0].category}</dd>
                            </dl>
                            <dl class="clear_fix">
                                <dt class="float_l">材料：</dt>
                                <dd class="float_l">${pro[0].material}</dd>
                            </dl>
                            <dl class="clear_fix">
                                <dt class="float_l">包装：</dt>
                                <dd class="float_l">${pro[0].packaging}</dd>
                            </dl>
                            <dl class="clear_fix">
                                <dt class="float_l">花语：</dt>
                                <dd class="float_l">${pro[0].says}</dd>
                            </dl>
                            <dl class="clear_fix">
                                <dt class="float_l">附送：</dt>
                                <dd class="float_l">${pro[0].attached}</dd>
                            </dl>
                            <dl class="clear_fix">
                                <dt class="float_l">配送</dt>
                                <dd class="float_l">全国</dd>
                            </dl>
                            <dl class="clear_fix">
                                <dt class="float_l">配送至：</dt>
                                <dd class="float_l"><span>请选择<i></i></span></dd>
                            </dl>
                        </div>
                        <div class="price">
                            <p class="old">市场价：${pro[0].scj}</p>
                            <p>花礼价：<span>${pro[0].hlj}</span></p>
                        </div>
                        <div class="appzx">
                            <ul class="zx">
                                <li class="the-one float_l">
                                    <p class="float_l">促销信息：</p>
                                    <div class="float_l">
                                        <img src="../image/appzx_01.png" alt="">
                                    </div>
                                    <b class="float_l">${pro[0].wxj}</b>
                                </li>
                                <li class="float_l the-other">
                                    <i class="float_l"></i>
                                    <p class="float_l">去app购买 &gt;</p>
                                </li>
                                <li class="float_l the-other">
                                    <i class="float_l"></i>
                                    <p class="float_l">去app购买 &gt;</p>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-buy">
                            <a href="Javascript:;" class="add-car">加入购物车</a>
                            <a href="Javascript:;" class="now-buy">立即购买</a>
                            <a href="Javascript:;" class="later-buy">收藏</a>
                        </div>
                    </div>
                </div>
                    `;
                    $('.main').append(temp);
                    callback && callback(res.id,res.price);
                }
            });
        },
        addItem:function(id,price){
            let shop = cookie.get('shop');
            // 获取是为了判断它是否存在
            // 不存在 创建
            // 存在 修改

            let product={
                id:id,
                price:price
            }

            if(shop){
                shop = JSON.parse(shop);//将字符串转成数组
                // 数组中已经存在了商品的id
                // 只修改num值 而不是将商品放入数组
                if(shop.some(elm=>elm.id===id)){
                    
                }else{
                    shop.push(product);
                }
            }else{
                shop = [];
                shop.push(product);
            }
            cookie.set('shop',JSON.stringify(shop),1);
        }
    }
});