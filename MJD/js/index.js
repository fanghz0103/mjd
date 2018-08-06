/**
 * Created by cc on 2018-07-28.
 */
window.onload = function(){
  ;(function(){
      function setBannerHeight(){
        document.querySelector('.jd-banner').style.height = document.querySelector('.jd-banner ul img').offsetHeight + 'px';
      }
      
      setBannerHeight();
      
      window.onresize = function(){
        setBannerHeight();
      }
  
  })();

}

window.onload = function(){
  // 1.设置倒计时
    downTime();

  // 2.头部滚动变色
    header();
  // 3.京东快报无缝连接
    news();
  // 4.轮播图
    banner();
}


function downTime(){


  var time = 5*60*60;
  setInterval(function(){
    time--;
    if(time<0){
      time = 3600;
    }
    var h = Math.floor(time/3600);
    var m = Math.floor(time%3600/60)
    var s = time%60;
    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;

    var spans = document.querySelectorAll('.jd-seckill .time span:nth-child(2n+1)');

    spans[0].innerHTML=h;
    spans[1].innerHTML = m;
    spans[2].innerHTML = s;


  },1000);




  
  // var time = 5*60*60;
  // setInterval(function(){
  //   time--;
  //   setTime();
    
  // },1000)
  // function setTime(){
  //   if(time<0){
  //     time = 3600;
  //   }
  //   var h = Math.floor(time/3600);
  //   var m = Math.floor(time%3600/60);
  //   var s = time%60;
  //   h = h<10?'0'+h:h;
  //   m = m<10?'0'+m:m;
  //   s = s<10?'0'+s:s;
  //   // console.log(h);
  //   var spans = document.querySelectorAll('.jd-seckill .time span:nth-child(2n+1)');
  //   // console.log(spans);
  //   spans[0].innerHTML = h;
  //   spans[1].innerHTML = m;
  //   spans[2].innerHTML = s;
  // }
}

function header(){
  
  // var bannerHeight = document.querySelector('.jd-banner').offsetHeight;
  // var header = document.querySelector('.jd-header');
  // window.onscroll = function(){
  //   var top = document.documentElement.scrollTop;
  //   // console.log(top);
    
  //   var value = top/bannerHeight;
    
  //   if(value>1){
  //     value = 1;
  //   }
  //   // console.log(value);
  //   header.style.background = 'rgba(222,24,27,'+ value + ')';
  // }


  var header = document.querySelector('.jd-header');
  var bannerHeight = document.querySelector('.jd-banner').offsetHeight;

  window.onscroll = function(){
    var top = document.documentElement.scrollTop;
    var value = top/bannerHeight;
    if(value>1){
      value = 1;
    }
    header.style.background = 'rgba(222,24,27,'+ value +')';
  }


}

function news(){
  // var ul = document.querySelector('.jd-news .info');
  // setInterval(function(){
  //   ul.style.transition = 'transform 0.5s';
  //   ul.style.transform = 'translateY(-30px)';
  // },1000)
  // ul.addEventListener('transitionend',function(){
  //   ul.appendChild(this.querySelector('li:nth-child(1)'));
  //   ul.style.transition = 'none';
  //   ul.style.transform = 'translateY(0px)';
  // })


  var ul = document.querySelector('.jd-news ul');
  var li = document.querySelectorAll('.jd-news ul li')[0];
  var moveY = li.offsetHeight;
  // console.log(moveY);
  
  setInterval(function(){
    ul.style.transition = 'transform,0.4s';
    ul.style.transform = 'translateY('+(-moveY)+'px)';
  },1000);
  ul.addEventListener('transitionend',function(){
    ul.appendChild(li);
    li = document.querySelectorAll('.jd-news ul li')[0];
    ul.style.transition = 'none';
    ul.style.transform = 'translateY(0)';
  })
}


function banner(){
  
  // var banner = document.querySelector('.jd-banner');
  // var ul = document.querySelector('ul');
  // var points = document.querySelectorAll('ol li');
  // var bannerWidth = banner.offsetWidth;
  // var index = 1;
  // var timer = setInterval(turn,1000);
  // function turn(){
  //   index++;
  //   ul.style.transition = 'transform,0.4s';
  //   ul.style.transform = 'translateX('+ (-index*bannerWidth) +'px)';
  // }
  // ul.addEventListener('transitionend',function(){
  //   if(index>=9){
  //     index = 1;
  //     ul.style.transition = 'none';
  //     ul.style.transform = 'translateX('+ (-index*bannerWidth) +'px)';
  //   }
  //   if(index<=0){
  //     index = 8;
  //     ul.style.transition = 'none';
  //     ul.style.transform = 'translateX('+ (-index*bannerWidth) +'px)';
  //   }
  //   function setPoint(index){
  //     points.forEach(function(v,i,arr){
  //       v.classList.remove('active');
  //     })
  //     points[index].classList.add('active');
  //   }
  //   setPoint(index-1);
  // })


  // var startX = 0;
  // var moveX = 0;
  // var distanceX = 0;
  // banner.ontouchstart = function(e){
  //   clearInterval(timer);
  //    startX = e.targetTouches[0].clientX;
  // }
  // banner.ontouchmove = function(e){
  //    moveX = e.targetTouches[0].clientX;
  //    distanceX = moveX - startX;
  //    ul.style.transition = 'none';
  //    ul.style.transform = 'translateX('+(-index*bannerWidth+distanceX)+'px)';
  // }
  // banner.ontouchend = function(e){
  //   if(Math.abs(distanceX)>=bannerWidth/3){
  //     if(distanceX>0){
  //       index--;
  //     }
  //     if(distanceX<0){
  //       index++;
  //     }
  //   }
  //   ul.style.transition = 'transform,0.4s';
  //   ul.style.transform = 'translateX('+(-index*bannerWidth)+'px)';
  //   timer = setInterval(turn,1000);
  //   startX = 0;
  //   moveX = 0;
  //   distanceX = 0;
    
  // }

  var banner = document.querySelector('.jd-banner');
  var ul = document.querySelector('.jd-banner ul');
  var lis = document.querySelectorAll('.jd-banner ol li');
  var bannerWidth = banner.offsetWidth;
  console.log(bannerWidth);
  
  var index = 1;
  var timer = setInterval(turn,1000);
  function turn(){
    index++;
    ul.style.transition = 'transform,0.4s';
    ul.style.transform = 'translateX('+(-index*bannerWidth)+'px)';
  }
  ul.addEventListener('transitionend',function(){
    if(index>=9){
      index=1;
      ul.style.transition = 'none';
      ul.style.transform = 'translateX('+(-index*bannerWidth)+'px)';
    }
    if(index<=0){
      index=8;
      ul.style.transition = 'none';
      ul.style.transform = 'translateX('+(-index*bannerWidth)+'px)';
    }
    function setPoint(index){
      lis.forEach(function(v,i,arr){
        v.classList.remove('active');
      })
      lis[index].classList.add('active');
    }
    setPoint(index-1);
  })

  var startX = 0;
  var moveX = 0;
  var distanceX = 0;
  ul.ontouchstart = function(e){
    clearInterval(timer);
    startX = e.targetTouches[0].clientX;
  }
  ul.ontouchmove = function(e){
    moveX = e.targetTouches[0].clientX;
    distanceX = moveX - startX;
    ul.style.transition = 'none';
    var x = -index * bannerWidth + distanceX;
    ul.style.transform = 'translateX('+x+'px)';
  }
  ul.ontouchend = function(e){
    if(Math.abs(distanceX)>bannerWidth/3){
      if(distanceX>0){
        index--;
      }
      if(distanceX<0){
        index++;
      }
    }
    ul.style.transition = 'transform,0.4s';
    ul.style.transform = 'translateX('+(-index*bannerWidth)+'px)';
    var timer = setInterval(turn,1000);
    startX = 0;
    moveX = 0;
    distanceX = 0;
  }
  window.onresize = function(){
    bannerWidth = document.querySelector('.jd-banner').offsetWidth;
    ul.style.transition = 'transform,0.4s';
    ul.style.transform = 'translateX('+(-index*bannerWidth)+'px)';
  }
}


