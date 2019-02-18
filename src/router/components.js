const COMPONENTS = {
  IndexComponent: resolve => require(['@/components/IndexComponent'], resolve),

  AdminComponent: resolve => require(['@/components/Admin/AdminComponent'], resolve),
  AdminIndexComponent: resolve => require(['@/components/Admin/IndexComponent'], resolve),
  AdminUserComponent: resolve => require(['@/components/Admin/UserComponent'], resolve),
}

export default COMPONENTS
