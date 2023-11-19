import { NavLink, Outlet, useRoutes } from "react-router-dom";
import clsx from "clsx";
import { MainLayout } from "../components/Layout";
import { Services } from "../features/services";
import { ServiceLayout } from "../components/Layout";
import { TabProvider } from "../provider/TabProvider";

export const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index: true,
          element: <>Home Screen</>,
        },
        {
          path: "/services",
          element: (
            <>
              <TabProvider>
                <ServiceLayout />
              </TabProvider>
            </>
          ),
          children: [
            {
              index: true,
              element: <Services />,
            },
          ],
        },
        {
          path: "/category",
          element: <>category</>,
        },
        {
          path: "/support",
          element: <>support</>,
        },
        {
          path: "/cloud",
          element: <>cloud</>,
        },
        {
          path: "*",
          element: <>setting</>,
        },
      ],
    },
  ]);

  //   const testRoute = useRoutes([
  //     {path : "/" ,
  //     Component:ServiceLayout,
  //     children:[{
  //         index:'/',
  //         element:<>Service Element</>
  //     }] }
  //   ])
  return <> {elements}</>;
};
