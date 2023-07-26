import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "./MapScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { DefaultPostsScreen } from "./DefaultPostsScreen";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";

export const PostsScreen = ({ navigation }) => {
  const PostsStack = createStackNavigator();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigation.navigate("Login");
  };

  return (
    <PostsStack.Navigator>
      <PostsStack.Screen
        name="Публікації"
        component={DefaultPostsScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            >
              <MaterialIcons name="logout" size={28} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerLeft: () => false,
        }}
      />
      <PostsStack.Screen name="Локація" component={MapScreen} />
      <PostsStack.Screen name="Коментарі" component={CommentsScreen} />
    </PostsStack.Navigator>
  );
};
