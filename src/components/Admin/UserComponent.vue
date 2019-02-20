<template>
  <div class="page">
    AdminUserComponent
    <button class="layui-btn layui-btn-sm" @click="search">搜索</button>
    <table class="layui-hide" id="table" lay-filter="table"></table>


    <div :class="showModal ? 'modal-show' : 'modal-hide'">
      <div style="height: 50px;background-color: #999;"></div>
      <div style="overflow: auto; height: 300px" ref="box">
        <div style="background-color: #FF00FF" ref="content">
          <div v-for="item in items" class="item" ref="items">
            <p style="height: 100px"></p>
          </div>
        </div>
      </div>
      <div style="height: 50px;background-color: #999;"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Config from '@/assets/config'
  export default {
    name: 'AdminUserComponent',
    data () {
      return {
        cols: [
          {type: 'radio', fixed: 'left'},
          {type: 'checkbox', fixed: 'left'},
          {field: 'id', title: 'ID', width: 80, fixed: 'left', unresize: true, sort: true, totalRowText: '合计行'},
          {field: 'username', title: '用户名', edit: 'text'},
          {field: 'sex', title: '性别', edit: 'text', sort: true},
          {field: 'logins', title: '登入次数', sort: true, totalRow: true},
          {field: 'city', title: '城市'},
          {field: 'joinTime', title: '加入时间'},
          {
            field: 'right', title: '操作', width: 180,
            toolbar: '#bar'
          }
        ],
        tableData: [
          {
            id: 1,
            username: '小明',
            sex: '男',
            logins: 123,
            city: '广州',
            joinTime: '2019-02-19'
          }
        ],
        items: [],
        selectItem: {},
        showModal: false,
        table: null
      }
    },
    methods: {
      openModal (item) {
        this.showModal = true
        this.items = [1,2,3,4,5,6,7,8,9]
        this.$nextTick(() => {
          this.computedModalHeight()
          const items = this.$refs.items
          const img = new Image()
          img.src = 'http://api.hzoa.test.ywqian.com/pc/images/8d7d0a3c7a6dab2442485c64017f1546.jpg'
          img.style.width = '200px'
          items[0].appendChild(img)
          img.onload = () => {
            this.computedModalHeight()
          }
        })

      },
      computedModalHeight () {
        this.$nextTick(() => {
          this.$refs.box.scrollTop = this.$refs.content.clientHeight
        })
      },
      search () {
        console.log(1)
        this.tableData = [
          {
            id: 2,
            username: '小白',
            sex: '男',
            logins: 1,
            city: '广州',
            joinTime: '2019-02-19'
          }
        ]
        this.table.render({
          elem: '#table',
          toolbar: true,
          title: '用户数据表',
          totalRow: true,
          cols: [this.cols],
          data: this.tableData,
          page: true
        });
      }
    },
    created () {

    },
    mounted () {
      const html = '<script type="text/html" id="bar">' +
        '<div class="layui-btn-container">' +
        '<button class="layui-btn layui-btn-sm" lay-event="add">添加<\/button>' +
        '<button class="layui-btn layui-btn-normal layui-btn-sm" lay-event="update">编辑<\/button>' +
        '<button class="layui-btn layui-btn-danger layui-btn-sm" lay-event="delete">删除<\/button>' +
        '<\/div>' +
        '<\/script>'
      $('.page').append(html)

      layui.use('table', () => {
        this.table = layui.table;

        this.table.render({
          elem: '#table',
          toolbar: true,
          title: '用户数据表',
          totalRow: true,
          cols: [this.cols],
          data: this.tableData,
          page: true
        });

        this.table.on('tool(table)', obj => {
          const data = obj.data;
          if(obj.event === 'delete'){
            obj.del()
          }
          if(obj.event === 'update'){
            this.openModal(data)
          }
        });

      });


    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-show {
  position: fixed;
  z-index: 88;
  left: 400px;
  top: 200px;
  width: 500px;
  height: 400px;
}
.modal-hide {
  width: 0;
  height: 0;
}
img {
  background-size: 100%;
}
  .a {
    background-color: red;
  }
  .b {
    background-color: blue;
  }
</style>
