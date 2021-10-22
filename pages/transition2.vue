<template>
  <div>
    <div>
      <button type="button" @click="toggleList">切换</button>
    </div>
    <transition name="fade">
      <div key="list" v-if="todoList.length > 0">
        <p v-for="item in todoList" :key="item">{{item}}</p>
      </div>
      <div key="empty" v-else>没有内容</div>
    </transition>
    <hr />
    <transition mode="out-in" enter-active-class="animate__animated animate__bounceInLeft" leave-active-class="animate__animated animate__bounceOutRight">
      <button key="on" v-if="switchType == true" @click="switchType = !switchType">on</button>
      <button key="off" v-if="switchType == false" @click="switchType = !switchType">off</button>
    </transition>
    <hr />
    <div>
      <button @click="showComponent == 'Header' ? showComponent = 'NuxtLogo' : showComponent = 'Header'"> switchComponent </button>
    </div>
    <transition name="fade">
      <component v-bind:is="showComponent" />
    </transition>
    <hr/>
    <div>
      <button type="button" @click="add">add</button>
      <button type="button" @click="remove">remove</button>
      <button type="button" @click="shuffle">shuffle</button>
    </div>
    <transition-group name="list" tag="p">
      <span class="list-item" :class="'item-' + index" v-for="(item, index) in list" :key="item">{{item}}</span>
    </transition-group>
    <hr/>
    <div>
      <button type="button" @click="shuffle2">shuffle2</button>
    </div>
    <transition-group tag="div" name="list2" class="matrix-list">
      <span class="cell" v-for="item in list2" :key="item">{{item}}</span>
    </transition-group>
    <hr/>
    <div>
      <input v-model="query"/>
    </div>
    <transition-group tag="ul" name="filter">
      <li v-for="(item) in filterSearchList" :key="item">{{item.msg}}</li>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      todoList: [
        '10-2 回老家',
        '10-7 回来',
        '持续的 对抗虚无'
      ],
      switchType: true,
      showComponent: 'Header',
      list: [1,2,3,4,5],
      list2: [],
      nextNum: 6,
      searchList: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ],
      query: '',
    }
  },
  mounted() {
    // this.addDOMListener();

    this.setList2()
  },
  computed: {
    filterSearchList(){
      return this.searchList.filter((item) => {
        return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    setList2(){
      let list2 = [];
      for(var j = 0; j < 9; j++){
        for(var k = 0; k < 9; k++){
          list2.push(`${j + 1}${k + 1}`);
        }
      }
      this.list2 = list2;
    },
    shuffle2(){
      this.list2 = _.shuffle(this.list2)
    },
    shuffle(){
      this.list = _.shuffle(this.list);
    },
    randomIndex(){
      return Math.floor(this.list.length * Math.random());
    },
    add(){
      this.list.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove(){
      this.list.splice(this.randomIndex(), 1)
    },

    toggleList() {
      if (this.todoList.length > 0) {
        this.todoList = [];
      } else {
        this.todoList = [
          '10-2 回老家',
          '10-7 回来',
          '持续的 对抗虚无'
        ]
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
.list-item{
  margin-right: 10px;
  display: inline-block;
}
.list-enter-active, .list-leave-active{
  transition: all 2s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.list-move{
  transition: all 2s;
}
.list-leave-active{
  position: absolute;
}
.list2-move{
  transition: all 1s;
}
.matrix-list{
  display: flex;
  width: 264px;
  height: 264px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background: cyan;
}
.cell{
  display: flex;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid gray;
  margin-right: -1px;
  margin-bottom: -1px;
  justify-content: center;
  align-items: center;
}
.cell:nth-child(3n){
  margin-right: 0;
}
.cell:nth-child(27n - 1),
.cell:nth-child(27n - 2),
.cell:nth-child(27n - 3),
.cell:nth-child(27n - 4),
.cell:nth-child(27n - 5),
.cell:nth-child(27n - 6),
.cell:nth-child(27n - 7),
.cell:nth-child(27n - 8),
.cell:nth-child(27n){
  margin-bottom: 0;
}
.filter-leave-active, .filter-enter-active{
  transition: all 1s;
}
.filter-leave-to, .filter-enter{
  transform: translateY(-15px);
}
</style>
