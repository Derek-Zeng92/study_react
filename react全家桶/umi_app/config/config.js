// 手动配置 配置式路由
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
      },
    ],
  ],
  routes: [
    {
      path: '/goods',
      component: './goods',
    }, // component的值相对于根目录下的/pages
    {
      path: '/',
      component: './index',
    },
    // 配置商品显示的路由
    {
      path:'/goods',
      component:'./goods'
    },
    {
      path: '/about',
      component: './about',
      Routes: ['./routes/PrivateRoute'],
    },
    {
      path: '/users',
      component: './users/_layout',
      routes: [
        {
          path: '/users',
          component: './users/index',
        },
        {
          path: '/users/:id',
          component: './users/$id',
        },
      ],
    },
    {
      path: '/login',
      component: './login',
    },
    {
      component: './404',
    },
  ],
};
