import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import Home from "./pages/Home";

const Nav = createSwitchNavigator({ Login, Home });

const Routes = createAppContainer(Nav);

export default Routes;
