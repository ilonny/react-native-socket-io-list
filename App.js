import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./screens/IndexScreen";
import DetailScreen from "./screens/DetailScreen";

const AppNavigator = createStackNavigator({
    Home: {
        screen: IndexScreen
    },
    Detail: {
        screen: DetailScreen
    }
});

export default createAppContainer(AppNavigator);
