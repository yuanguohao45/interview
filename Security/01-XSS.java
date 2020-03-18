1.漏洞描述

     XSS是跨站脚本攻击(Cross Site Scripting)的简称，之所以叫XSS而不是CSS那就是为了跟层叠样式表(Cascading Style Sheets，CSS)区别

     恶意攻击者往web页面中插入恶意HTML代码，当用户浏览该web页面时，嵌入到该web页面的恶意HTML代码就会被执行，从而达到恶意攻击用户的特殊目的。其危害主要优窃取cookie、放蠕虫、网站钓鱼 ...

     

      根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。对于前端比较常见的为存储型的，下面我们重点介绍一下存储型的XSS。

      如果页面展示的数据为不可信的数据源（也就是从后台获取或者用户输入的）的话，如果我们对这数据没有进行处理的话，那么就会存在存储型的XSS漏洞。

      例如：可以将js语句（<script>alert(“1”)</script>或者<img src=”dd” onerror="alert(12)">）写入提交后，会触发弹窗。

       例子：灯名输入：(<img src=”dd” onerror="alert(12)">)

                

            XSS现象:出现弹出框，图片等情况

       

           

      进行链接跳转获取用户信息或者诱导钓鱼网站等：（<script>window.location.href="http://www.baidu.com";</script>）

    2.防御策略

      a)对不可信的数据源,进行特殊字符的转义    

  

          封装成的公共方法：

//转义 
function HTMLEncode(str) {
      var str = str.replace(/&/g,"&amp;")
                   .replace(/</g,"&lt;")
                   .replace(/>/g,"&gt;")
                   .replace(/"/g,"&quot;")
                   .replace(/'/g,"&#x27;")
                   .replace(/\//g,"&#x2F;")
                   .replace(/ /g,"&nbsp;");
       return str;
      
}
//反转义
function HTMLDecode(str) {
        var str = str.replace(/&amp;/g,"&")
                   .replace(/&lt;/g,"<")
                   .replace(/&gt;/g,">")
                   .replace(/&quot;/g,"\"")
                   .replace(/&#x27;/g,"\'")
                   .replace(/&#x2F;/g,"/")
                   .replace(/&nbsp;/g," ");
       return str;
    }
//注：空格的转义不是安全方面，是为了解决多个空格，页面只会显示一个空格的间距问题。
       转义---打印结果：

       

       反转义--打印结果：



      所以，前端对于用户输入的数据(不可信的数据源),下发到服务器后台之前，是需要进行转义，即需要调用HTMLEncode(str)方法将数据进行转义；而对于从服务器后台获取的数据(不可信的数据源)在前端页面进行展示之前，前端需要将获取的数据进行反转义后才能进行展示。

      b)将重要的cookie标记为http only；

      c)直接过滤掉JavaScript事件标签和一些特殊的html标签；
2.对于富文本的防范：filter
      // https://www.cnblogs.com/qidh/p/11447656.html

      // https://www.jianshu.com/p/a38e280ed48b