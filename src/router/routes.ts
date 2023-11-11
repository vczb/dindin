import Inventory from "../pages/Inventory";
import NotFound from "../pages/NotFound";
import { View } from "./Router";

type Routes = {
  path: string;
  exact?: boolean;
  private?: boolean;
  component: View;
};

export const routes: Routes[] = [
  {
    path: "/",
    exact: true,
    private: false,
    component: Inventory,
  },
  {
    path: "404",
    exact: true,
    private: false,
    component: NotFound,
  },
];
