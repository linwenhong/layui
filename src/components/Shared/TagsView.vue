<template>
  <div class="layadmin-pagetabs" id="LAY_app_tabs">
    <div class="layui-icon layadmin-tabs-control layui-icon-prev"></div>
    <div class="layui-icon layadmin-tabs-control layui-icon-next"></div>
    <div class="layui-icon layadmin-tabs-control layui-icon-down"></div>
    <div class="layui-tab" lay-unauto="" lay-allowclose="true" lay-filter="layadmin-layout-tabs">
      <ul class="layui-tab-title" id="LAY_app_tabsheader" style="left: 0px;">
        <li lay-id="home/console.html" lay-attr="home/console.html" class=""><i class="layui-icon layui-icon-home"></i><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li>
        <li lay-id="home/homepage1.html" lay-attr="home/homepage1.html" class=""><span>主页一</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li><li lay-id="home/homepage2.html" lay-attr="home/homepage2.html" class=""><span>主页二</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li><li lay-id="template/personalpage.html" lay-attr="template/personalpage.html" class=""><span>个人主页</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li><li lay-id="template/addresslist.html" lay-attr="template/addresslist.html" class=""><span>通讯录</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li><li lay-id="template/caller.html" lay-attr="template/caller.html" class="layui-this"><span>客户列表</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li></ul>
    </div>
  </div>
  <!--<div class="layui-tab" lay-filter="demo" lay-allowclose="true">-->
    <!--<ul class="layui-tab-title">-->
      <!--<template v-for="(tag, index) in Array.from(visitedViews)">-->
        <!--<li :class="index == 0 ? 'layui-this' : ''">-->
          <!--<router-link :to="tag.path" :key="tag.path"  class="tags-view-item" :class="isActive(tag)?'active':''">-->
            <!--{{ tag.title }}-->
            <!--<span class='el-icon-close' @click.prevent.stop="delSelectTag(tag)"></span>-->
          <!--</router-link>-->
        <!--</li>-->
      <!--</template>-->
    <!--</ul>-->
    <!--<div class="layui-tab-content">-->
      <!--<div v-for="(tag, index) in Array.from(visitedViews)" class="layui-tab-item">{{ index + 1 }}</div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script type="text/ecmascript-6">
export default {
  name: 'TagsView',
  props: {

  },
  data () {
    return {
    }
  },
  watch:{
    $route(){
      this.addViewTags();
    }
  },
  computed:{
    visitedViews(){//store中取值
      return this.$store.state.tagsview.visitedviews
    }
  },
  mounted () {
    this.addViewTags();
  },
  methods: {
    isActive (route) {
      return route.path == this.$route.path
    },
    addViewTags(){//路由改变时执行的方法
      if(this.$route.name){
        let isHasView = false
        const route = this.$route
        for (const view of this.visitedViews) {
          if (route.name == view.name) {
            isHasView = true
            break
          }
        }
        if (!isHasView) this.$store.dispatch('addVisitedViews',route);
      }
    },
    delSelectTag(route){//先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
      this.$store.dispatch('delVisitedViews',route).then((views)=>{
        if(this.isActive(route)){//只有在关闭当前打开的标签页才会有影响
          let lastView = views.slice(-1)[0]//选取路由数组中的最后一位
          if(lastView){
            this.$router.push(lastView);
          }else{
            this.$router.push('/');
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .layadmin-pagetabs .layui-tab-title li.layui-this, .layadmin-pagetabs .layui-tab-title li:hover, .layui-icon:hover {
    background-color: #f6f6f6;
  }
  .layadmin-pagetabs .layui-tab-title li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    border-radius: 0;
    background-color: #292B34;
    transition: all .3s;
    -webkit-transition: all .3s;
  }
  .layadmin-pagetabs .layui-tab-title li:hover:after {
    width: 100%;
  }

  .layadmin-pagetabs {
    position: relative;
  }
  .layui-tab-title {
    padding: 0 80px 0 40px;
  }
  .layui-icon.layui-icon-prev, .layui-icon.layui-icon-next, .layui-icon.layui-icon-down {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;

    position: absolute;
    z-index: 9;
    top: 0;
  }
  .layui-icon.layui-icon-prev {
    left: 0;
  }
  .layui-icon.layui-icon-next {
    right: 40px;
  }
  .layui-icon.layui-icon-down {
    right: 0;
  }
</style>
