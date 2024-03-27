setInterval("randomImg()",2000);//兩秒更新
function sequentialImg() {
 var jsImg_len = jsImg.length;
 var i = 0;
 console.log(jsImg_len);
 document.getElementById("cover").innerHTML  = "<img src='source/" + jsImg[i] + ".png' width=80%>";        
 if(i >= jsImg_len)  
    {
        i = 0;
    }
 i++;
}

var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})