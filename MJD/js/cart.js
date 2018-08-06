window.onload = function () {
  //1-点击删除桶， 
  // 桶盖打开
  // 模块框出现（动画效果)  
  var dels = document.querySelectorAll('.del');
  //模态框
  var winBox = document.querySelector('.win-box');
  //删除的盒子
  var delBox = document.querySelector('.del-box');
  //遍历绑定点击事件
  dels.forEach(function (v, i, arr) {
      v.onclick = function () {
          // 桶盖打开
          this.classList.add('open');
          //给删除的盒子添加动画
          delBox.classList.add('animated');
          delBox.classList.add('bounceInDown');
          //模块框出现（动画效果) 
          winBox.style.display = 'block';
      }
  })


  //2-点击取消按钮 
  // 模态框隐藏 
  // 桶盖闭合
  document.querySelector('.cancel').onclick = function () {
      // 模态框隐藏 
      winBox.style.display = 'none';
      // 桶盖闭合
      document.querySelector('.open').classList.remove('open');
  }

}