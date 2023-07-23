import React from "react";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
// import { Provider } from "react-redux";
import { Main } from "./components/Main";
import "react-native-gesture-handler";

// import { Text } from "react-native-svg";
// import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}> */}
      <Main />
      {/* </PersistGate> */}
      {/* </Provider> */}
    </>
  );
}
