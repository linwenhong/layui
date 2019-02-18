<template>
  <div>

    <div class="header-nav">
      <ul class="layui-nav">
        <li class="layui-nav-item"><a href="">最新活动</a></li>
        <li class="layui-nav-item layui-this">
          <a href="javascript:;">产品</a>
          <dl class="layui-nav-child">
            <dd><a href="/admin-index">选项1</a></dd>
            <dd><a href="/admin-user">选项2</a></dd>
            <dd><a href="">选项3</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">大数据</a></li>
        <li class="layui-nav-item">
          <a href="javascript:;">解决方案</a>
          <dl class="layui-nav-child">
            <dd><a href="">移动模块</a></dd>
            <dd><a href="">后台模版</a></dd>
            <dd class="layui-this"><a href="">选中项</a></dd>
            <dd><a href="">电商平台</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">社区</a></li>
      </ul>
    </div>

    <div class="left-nav">
      <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="demo" style="margin-right: 10px;">
        <li class="layui-nav-item layui-nav-itemed">
          <a href="javascript:;">默认展开</a>
          <dl class="layui-nav-child">
            <dd><a @click="openTag('index')" href="javascript:;">index</a></dd>
            <dd><a @click="openTag('user')" href="javascript:;">user</a></dd>
            <dd><a href="javascript:;">选项三</a></dd>
            <dd><a href="">跳转项</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;">解决方案</a>
          <dl class="layui-nav-child">
            <dd><a href="">移动模块</a></dd>
            <dd><a href="">后台模版</a></dd>
            <dd><a href="">电商平台</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">云市场</a></li>
        <li class="layui-nav-item"><a href="">社区</a></li>
      </ul>
    </div>

    <div class="right-content">
      <TagsView/>
      <router-view/>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import Config from '@/assets/config'
export default {
  name: 'IndexComponent',
  data () {
    return {
    }
  },
  methods: {
    openTag (name) {
      this.$router.push({ name: name })
    }
  },
  created () {
    console.log(Config)
  },
  mounted () {

  }
}

layui.use('element', function(){
  const element = layui.element;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layui-nav {
  border-radius: 0;
}
.header-nav {

}
.left-nav ul {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 60px;
  height: -webkit-fill-available;
  margin-top: -60px;
  padding-top: 60px;
}
.right-content {
  padding-left: 200px;
}

.layui-this {
  background-color: #009688;
}
</style>
