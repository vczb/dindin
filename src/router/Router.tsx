import { useLayoutEffect, useState } from "react";
import { routes } from "./routes";

export type View = () => Element | JSX.Element;

const Router = () => {
  const [view, setView] = useState<View>();

  useLayoutEffect(() => {
    const onLocationHashChange = () => {
      const [, path] = window.location.pathname.split("dindin");

      const current = routes.find((route) => {
        if (route.exact) {
          return route.path === path;
        }
        return route.path.includes(path);
      });

      if (current) {
        return setView(current.component);
      }

      const notFound = routes.find((route) => route.path === "404");

      return setView(notFound?.component);
    };

    window.addEventListener("hashchange", onLocationHashChange);
    onLocationHashChange();
    return () => {
      window.removeEventListener("hashchange", onLocationHashChange);
    };
  }, []);

  return <>{view}</>;
};

export default Router;
