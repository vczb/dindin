import Collection from "../pages/Collection";
import Home from "../pages/Home";
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
    path: "",
    exact: true,
    private: false,
    component: Home,
  },
  {
    path: "adicionar",
    exact: false,
    private: false,
    component: Inventory,
  },
  {
    path: "lista",
    exact: false,
    private: false,
    component: Collection,
  },
  {
    path: "404",
    exact: true,
    private: false,
    component: NotFound,
  },
];
