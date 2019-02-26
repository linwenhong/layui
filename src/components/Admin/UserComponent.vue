<template>
  <div class="page">
    AdminUserComponent
    <button class="layui-btn layui-btn-sm" @click="search">搜索</button>
    <table class="layui-hide" id="table" lay-filter="table"></table>
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
            toolbar: '#toolbar'
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
        layui: null
      }
    },
    methods: {
      search () {
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
        this.tableRender()
      },
      getTableOption () {
        return {
          tableElem: '#table',
          tableTitle: '用户数据表',
          tableCols: this.cols,
          tableData: this.tableData
        }
      },
      tableRender () {
        this.$layui.Table.render(this.layui.table, this.getTableOption())
      },
      tableUpdate (data) {
        console.log('update')
        console.log(data)
      },
      tableDelete (data) {
        console.log('delete')
        console.log(data)
      }
    },
    created () {
      console.log(this.$Service)
      console.log(this.$Config)
      console.log(this.$Method)
      console.log(this.$layui)
    },
    mounted () {
      this.layui = this.$layui.Table.init(this, this.getTableOption())
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
