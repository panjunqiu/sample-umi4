/**
 * 路由配置，给umi使用，路由需要，给layout使用生成导航
 */

export interface RouteItem {
  path: string;
  component?: string;
  name?: string;
  exact?: boolean;
  redirect?: string;
  menu?: boolean;
  routes?: RouteItem[];
}

export const routes: RouteItem[] = [
  {
    path: "/",
    component: "@/layouts/main",
    name: "root",
    routes: [
      { exact: true, path: "/", redirect: "/home", menu: false },
      {
        path: "/home",
        component: "@/pages/home",
        name: "Home",
      },
      {
        path: "/docs",
        component: "@/pages/docs",
        name: "Docs",
      },
      {
        path: "/help",
        component: "@/pages/help",
        name: "Help",
      },
      {
        path: "*",
        component: "@/pages/404",
        name: "404",
        menu: false,
      },
    ],
  },
];
