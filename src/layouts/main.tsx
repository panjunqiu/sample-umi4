import { Link, Outlet } from "umi";
import styles from "./index.less";
import { routes, RouteItem } from "config/routes";
import { useMemo } from "react";

export default function Layout() {
  const nav = useMemo(() => {
    return (
      <ul>
        {routes[0].routes &&
          routes[0].routes
            .filter((item) => item.menu !== false)
            .map((item: RouteItem) => {
              return (
                <li key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
      </ul>
    );
  }, [routes]);

  return (
    <div className={styles.nav}>
      {nav}
      <Outlet />
    </div>
  );
}
