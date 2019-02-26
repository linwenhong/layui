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
        <template v-for="(option, index) of navOptions">
          <template v-if="option.children">
            <li class="layui-nav-item" :class="index == 0 ? 'layui-nav-itemed' : ''">
              <a href="javascript:;">{{ option.title }}</a>
              <dl class="layui-nav-child">
                <dd v-for="item of option.children" :class="item.routeName == selectTagName ? 'layui-this' : ''">
                  <a @click="openTag(item.routeName)" href="javascript:;">{{ item.title }}</a>
                </dd>
              </dl>
            </li>
          </template>

          <template v-else>
            <li :class="option.routeName == selectTagName ? 'layui-this' : ''" class="layui-nav-item" @click="openTag(option.routeName)"><a href="javascript:;">{{ option.title }}</a></li>
          </template>
        </template>
      </ul>
    </div>

    <div class="right-content">
      <TagsView ref="tagsVies" :selectTagName="selectTagName" @selectTagNameChange="selectTagNameChange" />
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
      selectTagName: null,
      navOptions: [
        {
          title: '默认展开',
          children: [
            {
              title: 'index',
              routeName: 'index'
            },
            {
              title: 'user',
              routeName: 'user'
            }
          ]
        },
        {
          title: '解决方案',
          children: [
            {
              title: 'index',
              routeName: 'index'
            },
            {
              title: 'user',
              routeName: 'user'
            }
          ]
        },
        {
          title: 'user',
          routeName: 'user'
        }
      ]
    }
  },
  methods: {
    openTag (name) {
      this.$refs.tagsVies.openTag(name)
    },
    selectTagNameChange (name) {
      this.selectTagName = name
    }
  },
  created () {
    console.log(Config)
  },
  mounted () {

  }
}

layui.use(['element', 'table'], function(){ });
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
