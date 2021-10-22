<template>
  <div>
    <div>
      <button type="button" @click="shuffleList">切换</button>
    </div>
    <ul id="list1">
      <li id="li_0">one</li>
      <li id="li_1">two</li>
      <li id="li_2">three</li>
      <li id="li_3">four</li>
      <li id="li_4">five</li>
    </ul>
    <hr/>
    <div>
      <button type="button" @click="trigger1">transition actions</button>
    </div>
    <div id="transitionPlace"></div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      show: false,
      tag: 'span',
      className: 'sprite',
      html1: '文本',
    }
  },
  mounted() {
    // this.addDOMListener();
  },
  methods: {
    tidyUpAnimations(){

    },

    flipToggle(el){

    },

    shuffleList() {
      // 对 DOM 元素重新排序
      function orderDOM(){
        var root = document.querySelector('#list1')
        var elems = root.querySelectorAll('li')
        var indexAry = _.shuffle([0, 1, 2, 3, 4]);
        console.log(JSON.stringify(indexAry))
        var oldElems = new Array(elems.length); // 存储老顺序
        for(var j = 0; j < elems.length; j++){
          oldElems[j] = elems[j];
        }
        for(var j = 0; j < elems.length; j++){
          root.insertBefore(oldElems[indexAry[elems.length - 1 - j]], root.querySelectorAll('li')[0])
        }
      }


      var root = document.querySelector('#list1')
      var elList = [];
      // 给标识
      for(var j = 0; j < document.querySelectorAll('#list1 li').length; j++){
        var el = document.querySelectorAll('#list1 li')[j];
        el.setAttribute('data-id', 'original_' + j);
      }
      for(var j = 0; j < document.querySelectorAll('#list1 li').length; j++){
        elList.push(root.querySelector(`[data-id="original_${j}"]`))
      }
      // Get the first position.
      var firstAry = [];
      for(var el of elList){
        firstAry.push(el.getBoundingClientRect());
      }

      // Now set the element to the last position.
      orderDOM();

      // Read again. This forces a sync
      // layout, so be careful.
      var last = el.getBoundingClientRect();
      var lastAry = [];
      for(var el of elList){
        lastAry.push(el.getBoundingClientRect());
      }

      // You can do this for other computed
      // styles as well, if needed. Just be
      // sure to stick to compositor-only
      // props like transform and opacity
      // where possible.
      // 只变化了 top
      var invertAry = [];
      for(var j = 0; j < elList.length; j++){
        invertAry.push(firstAry[j].top - lastAry[j].top)
      }
      for(var j = 0; j < elList.length; j++){
        var el = elList[j];
        if(invertAry[j] !== 0){
          el.style.transform = `translateY(${invertAry[j]}px)`
        }
      }

      // Wait for the next frame so we
      // know all the style changes have
      // taken hold.
      requestAnimationFrame(function () {

        for(var j = 0; j < elList.length; j++){
          var el = elList[j];
          if(invertAry[j] !== 0){
            el.classList.add('animate-on-transforms');
            el.style.transform = '';
          }
        }
      });

      // Capture the end with transitionend
      for(var j = 0; j < elList.length; j++){
          var el = elList[j];
          if(invertAry[j] !== 0){
            el.addEventListener('transitionend', function tidyUp(){
              el.classList.remove('animate-on-transforms');
            });
          }
        }

    },

    trigger1(){
      var place = document.querySelector('#transitionPlace');
      if(this.show){
        // 隐藏
        this.show = !this.show;
        let elem = place.querySelector('.' + this.className);
        elem.classList.add('fade-leave');
        elem.classList.add('fade-leave-active');
        requestAnimationFrame(() => {
          elem.classList.remove('fade-leave');
          elem.classList.add('fade-leave-to');
        });
        elem.addEventListener('transitionend', function(){
          elem.classList.remove('fade-leave');
          elem.classList.remove('fade-leave-to');
          place.removeChild(elem);
        })
      }else{
        // !this.show
        this.show = !this.show;
        let elem = document.createElement(this.tag);
        elem.classList.add(this.className);
        elem.innerHTML = this.html1;
        elem.classList.add('fade-enter');
        elem.classList.add('fade-enter-active');
        place.appendChild(elem);
        requestAnimationFrame(function(){
          elem.classList.remove('fade-enter');
          elem.classList.add('fade-enter-to');
        });
        elem.addEventListener('transitionend', function(){
          elem.classList.remove('fade-enter-active');
          elem.classList.remove('fade-enter-to');
        });
      }
    },


  }
}
</script>
<style>
div {
  margin: 30px;
}
.sprite {
  font-size: 24px;
  color: purple;
  display: inline-block;
}
.sprite1{
  position: relative;
}
.sprite {
  font-size: 24px;
  color: purple;
  display: inline-block;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
.totes-at-the-end{
  margin-top: 45px;
}
.animate-on-transforms{
  transition: all 1s;
}
</style>
