$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,//vong lap
    margin:10,//khoang cah cac item
    nav:false,//thanh dieu huong
    autoplay:true,
    dots:false,
    autoplayTimeout:5000,
    responsive:{ //quy dinh so luong san pham tren cac man hinh 
        0:{ // khoang man hinh tu 0-559px
            items:1
        },
        600:{ //tu 600px-999px;
            items:1
        },
        1000:{ //tren 1000px
            items:1
        }
    }
})

  });