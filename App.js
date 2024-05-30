import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}