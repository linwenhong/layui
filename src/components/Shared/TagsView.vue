<template>
  <div class="layadmin-pagetabs" id="LAY_app_tabs">
    <div class="layui-icon layadmin-tabs-control layui-icon-prev" @click="prevPage()"></div>
    <div class="layui-icon layadmin-tabs-control layui-icon-next" @click="nextPage()"></div>
    <div class="layui-icon layadmin-tabs-control layui-icon-down"></div>
    <div class="layui-tab" lay-unauto="" lay-allowclose="true" lay-filter="layadmin-layout-tabs" ref="tabsView">
      <ul class="layui-tab-title" id="LAY_app_tabsheader" style="left: 0px;" ref="tabs">
        <li><i class="layui-icon layui-icon-home"></i></li>
        <template v-for="(tag, index) in Array.from(visitedViews)">
          <li @click.stop="openTag(tag.name)" :class="index == 0 ? 'layui-this' : ''">
            <router-link :to="tag.path" :key="tag.path"  class="tags-view-item" :class="isActive(tag)?'active':''">
              <span>{{ tag.title }}</span><i @click.prevent.stop="delSelectTag(tag)" class="layui-icon layui-unselect layui-tab-close">ဆ</i>
            </router-link>
          </li>
        </template>
        <!--<li lay-id="template/caller.html" lay-attr="template/caller.html" class="layui-this"><span>客户列表</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li>-->
      </ul>
    </div>
  </div>
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
  computed: {
    visitedViews () {//store中取值
      return this.$store.state.tagsview.visitedviews
    }
  },
  mounted () {
    this.addViewTags();
  },
  methods: {
    openTag (name) {
      this.$router.push({ name: name })
    },
    isActive (route) {
      return route.path == this.$route.path
    },
    addViewTags () {//路由改变时执行的方法
      if(this.$route.name){
        let isHasView = false
        const route = this.$route
        for (const view of this.visitedViews) {
          if (route.name == view.name) {
            isHasView = true
            break
          }
        }
//        if (!isHasView) this.$store.dispatch('addVisitedViews',route);
        this.$store.dispatch('addVisitedViews',route);
      }
    },
    delSelectTag (route) {//先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
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
    },
    prevPage () {
      const tabs = this.$refs.tabs.getElementsByTagName('li')
      const tagsNode = [0]
      for (const tab of tabs) {
        const node = tab.offsetWidth + tagsNode[tagsNode.length - 1]
        tagsNode.push(node)
      }
      console.log(tagsNode)

      const viewWidth = this.$refs.tabsView.offsetWidth - 120 // 标签栏视图宽度
      const tabsWidth = this.$refs.tabs.offsetWidth // 标签列表中宽度

      if (tabsWidth <= viewWidth) return; // 总宽度不超过视图宽度

      const left = this.$refs.tabs.style.left // 标签列表偏移量,带px的字符串
      const leftNode = Math.abs(left.split('px')[0])  // 标签列表偏移量取绝对值,Number类型
      console.log(leftNode)
      console.log(viewWidth)
      console.log(tabsWidth)
      if (leftNode <= viewWidth) {
        this.$refs.tabs.style.left = 0
      } else {
        const ContrastValue = leftNode - viewWidth
        for (const index in tagsNode) {
          if (index > 0 && tagsNode[index] > ContrastValue && tagsNode[index - 1] <= ContrastValue) {
            this.$refs.tabs.style.left = - tagsNode[index - 1] + 'px'
            break
          }
        }
      }
    },
    nextPage () {
      const tabs = this.$refs.tabs.getElementsByTagName('li')
      const tagsNode = [0]
      for (const tab of tabs) {
        const node = tab.offsetWidth + tagsNode[tagsNode.length - 1]
        tagsNode.push(node)
      }
      console.log(tagsNode)

      const viewWidth = this.$refs.tabsView.offsetWidth - 120 // 标签栏视图宽度
      const tabsWidth = this.$refs.tabs.offsetWidth // 标签列表中宽度

      if (tabsWidth <= viewWidth) return; // 总宽度不超过视图宽度

      const left = this.$refs.tabs.style.left // 标签列表偏移量,带px的字符串
      const leftNode = Math.abs(left.split('px')[0])  // 标签列表偏移量取绝对值,Number类型、

      if (tabsWidth - leftNode <= viewWidth)  return; // 视图首个标签开始, 后面部分不超过视图宽度(不足以翻页)

      const ContrastValue = viewWidth + leftNode  // 翻页对比值

      for (const index in tagsNode) {
        if (index > 0 && tagsNode[index] > ContrastValue && tagsNode[index - 1] <= ContrastValue) {
          this.$refs.tabs.style.left = - tagsNode[index - 1] + 'px'
          break
        }
      }
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
  .layui-tab {
    padding: 0 80px 0 40px;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    overflow: hidden;
  }
  ul.layui-tab-title {
    display: inline-block;
    border-bottom: none;
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
    background-color: #fff;
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
