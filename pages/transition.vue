<template>
  <div style="text-align: center;">
    <div>
      <p>
        <button type="button" @click="show = !show">切换</button>
      </p>
      <transition name="my-slide">
        <span id="target1" v-if="show" style="display: inline-block;">
          transition变化
        </span>
      </transition>
    </div>
    <div>
      <p>
        <button type="button" @click="show2 = !show2">切换</button>
      </p>
      <transition name="bounce">
        <span id="target2" v-if="show2" style="display: inline-block;">
          animation变化
        </span>
      </transition>
    </div>
    <div>
      <p>
        <button type="button" @click="show3 = !show3">切换</button>
      </p>
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__bounceInLeft"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <span v-if="show3" style="display: inline-block;">
          animate.css 的 bounceInDown
        </span>
      </transition>
    </div>
    <div>
      <p>
        <button type="button" @click="show4 = !show4">切换</button>
      </p>
      <transition name="bezier">
        <span v-if="show4" style="display: inline-block; background: cyan;" class="my-animation">
          cubic-bezier变化
        </span>
      </transition>
    </div>
    <div>
      <p>
        <button type="button" @click="showAnimate = !showAnimate">切换</button>
      </p>
      <p>
        <transition name="custom-classes-transition" enter-active-class="fade-in" leave-active-class="bounce-right-out">
        <span class="sprite" v-if="showAnimate">
          MyAnimate
        </span>
        </transition>
      </p>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      show: true,
      show2: true,
      show3: true,
      show4: true,
      showTada: true,
      showAnimate: false,
    }
  },
  mounted() {
    // this.addDOMListener();
  },
  methods: {
    addDOMListener() {
      var mutationObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          /************************当DOM元素发送改变时执行的函数体***********************/
          console.log(document.querySelector('#target2').classList.toString() + '    时间：' + new Date().getTime())
          /*********************函数体结束*****************************/
        });
      });
      /**Element**/
      mutationObserver.observe(document.querySelector('#target2'), {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });


    },
  }
}
</script>
<style>
div{
  margin: 30px;
}
p{
  text-align: center;
}
.sprite{
  font-size: 24px;
  color: purple;
  display: inline-block;
}
.my-slide-leave-active {
  transition: all 0.3s;
}
.my-slide-enter-active {
  transition: all 0.8s;
}
.my-slide-leave-to,
.my-slide-enter {
  transform: translateX(100px);
  opacity: 0.5;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}
.bezier-enter-active, .bezier-leave-active{
  /** 默认的 ease */
  transition: all 3s cubic-bezier(0.25, 0.01, 0.25, 1.0);
  /** 默认的 linear */
  transition: all 3s cubic-bezier(0,0,1,1);
  /** 默认的 ease-in */
  transition: all 3s cubic-bezier(0.42,0,1,1);
  /** 其他的值还有 ease-out */
  /** 来回缓冲效果 */
  transition: all 3s cubic-bezier(0.68,-0.55, 0.27, 1.55);
}
.bezier-enter, .bezier-leave-to{
  transform: translateX(500px);
}

@keyframes swing2 {
  0% {
    transform: rotateZ(-45deg)
  }

  10% {
    transform: rotateZ(40deg)
  }
  20% {
    transform: rotateZ(-35deg)
  }
  30% {
    transform: rotateZ(30deg)
  }
  40% {
    transform: rotateZ(-25deg)
  }
  50% {
    transform: rotateZ(20deg)
  }
  60% {
    transform: rotateZ(-15deg)
  }
  70% {
    transform: rotateZ(10deg)
  }
  85% {
    transform: rotateZ(-5deg)
  }
  100% {
    transform: rotateZ(0deg)
  }
}
.my-animation{
  animation: swing 1s;
}
@keyframes myTada {
  0%{
    transform: scale(1);
  }
  10%, 20%{
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90%{
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80%{
    transform: scale(1.1) rotate(-3deg);
  }
  100%{
    transform: scale(1);
  }
}
.my-tada{
  animation: myTada 1s;
}
@keyframes MyBackInDown {
  0%{
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }
  70%{
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }
  100%{
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
.back-in-down{
  animation: MyBackInDown 1s;
}
@keyframes MyBackOutDown {
  0%{
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  30%{
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }
  100%{
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }
}
.back-out-down{
  animation: MyBackOutDown 1s;
}

@keyframes MyBounceIn {
  0%, 20%, 40%, 60%, 80%, 100%{
    animation-timing-function: ease-out;
  }
  0%{
    opacity: 0;
    transform: scale(0.3);
  }
  20%{
    opacity: 0.2;
    transform: scale(1.3);
  }
  40%{
    opacity: 0.4;
    transform: scale(0.85);
  }
  60%{
    opacity: 0.7;
    transform: scale(1.1);
  }
  80%{
    opacity: 0.95;
    transform: scale(0.95);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
.bounce-in{
  animation: MyBounceIn 0.7s;
}
@keyframes MuBounceRightOut {
  20%{
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }
  100%{
    transform: translate3d(2000px, 0,0) scaleX(3);
  }
}
.bounce-right-out{
  animation: MuBounceRightOut 0.7s;
}
@keyframes MyFadeInTopLeft {
  0%{
    opacity: 0;
    transform: translate3d(-100%, -100%, 0)
  }
  100%{
    opacity: 1;
    transform: translateZ(0);
  }
}
.fade-in{
  animation: MyFadeInTopLeft 1s;
}
</style>
