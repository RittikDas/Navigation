import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Follow from "./screens/Follow";
import Three from "./screens/Three";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Follow: { screen: Follow },
    Three: { screen: Three }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#BA2F16"
      },
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;

//TODO: create a third page where no of follower you have are showing (assignment)
