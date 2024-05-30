import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './views';

const Stack = createNativeStackNavigator();

const stackNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default stackNavigator