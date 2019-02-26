'use strict'

function toolbar () {
  const html = '<script type="text/html" id="toolbar">' +
    '<div class="layui-btn-container">' +
    '<button class="layui-btn layui-btn-normal layui-btn-sm" lay-event="update">编辑<\/button>' +
    '<button class="layui-btn layui-btn-danger layui-btn-sm" lay-event="delete">删除<\/button>' +
    '<\/div>' +
    '<\/script>';
  $('.page').append(html);
}

function getTableOption (e) {
  return {
    elem: e.tableElem,
    toolbar: true,
    title: e.tableTitle,
    totalRow: true,
    cols: [e.tableCols],
    data: e.tableData,
    page: true
  }
}

module.exports = {
  init: (component, e) => {
    toolbar();

    return layui.use('table', () => {
      const table = layui.table;

      table.render(getTableOption(e));

      table.on('tool(table)', obj => {
        const data = obj.data;
        if(obj.event === 'delete'){
          //obj.del()
          component.tableDelete(data)
        }
        if(obj.event === 'update'){
          component.tableUpdate(data)
        }
      });
    });

  },
  render: (table, e) => {
    table.render(getTableOption(e));
  },
  setTop: () => {
    layui.use('layer', function(){ //独立版的layer无需执行这一句
      const layer = layui.layer; //独立版的layer无需执行这一句

      layer.open({
        type: 2 //此处以iframe举例
        ,title: '当你选择该窗体时，即会在最顶端'
        ,area: ['390px', '260px']
        ,shade: 0
        ,maxmin: true
        ,offset: [ //为了演示，随机坐标
          Math.random()*($(window).height()-300)
          ,Math.random()*($(window).width()-390)
        ]
        ,content: 'asdsadsad'
        ,btn: ['继续弹出', '全部关闭'] //只是为了演示
        ,yes: function(){
          $(that).click();
        }
        ,btn2: function(){
          layer.closeAll();
        }
        ,zIndex: layer.zIndex //重点1
        ,success: function(layero){
          layer.setTop(layero); //重点2
        }
      });

    })
  }
};
