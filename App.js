import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { subscribeAuth } from "./src/logics/gameAPI";
import { gameStore } from "./src/logics/gameRedux";
import { HomePage } from "./src/views/pages/HomePage";
import { AuthPage } from "./src/views/pages/AuthPage";
import { GamePage } from "./src/views/pages/GamePage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    subscribeAuth(setUser, setLoading);
  }, []);

  if (loading) return;

  if (!user) return <AuthPage />;

  return (
    <Provider store={gameStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <HomePage {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Game" component={GamePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
