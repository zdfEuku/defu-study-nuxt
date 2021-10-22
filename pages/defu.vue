<template>
  <div>
    <el-carousel height="600px">
      <el-carousel-item v-for="(item, index) in scrollList" :key="index">
        <div>
        <a :href="item.linkAddress">
        <img :src="item.imgPath" :alt="item.advertisName"/>
        </a>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div>
      <span class="icon iconfont tm-icon-info"></span>
    </div>
    <div>
      <el-button type="primary" round>主要按钮</el-button>
    </div>
  </div>
</template>

<script>
import Urls from '@/http/url'
export default {
  layout: 'blog',
  async asyncData(context){
    let res = await context.$axios.$get(Urls.getAdvertisingPositionBatch, {
      params: {
        positionIds: 'pc_index_scroll,pc_index_model'
      }
    });
    return {
      scrollList: res.data[0].advertiseList,
      modelList: res.data[1].advertiseList,
    }
  }
}
</script>
