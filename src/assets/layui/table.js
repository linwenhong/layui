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
  }
};
