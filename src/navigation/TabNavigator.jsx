import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import { Ionicons } from "@expo/vector-icons";
import CartNavigator from "./CartNavigator";

export default function TabNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator
            screenOptions={{
            }}
        >
            <Tabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />,
                    headerShown: false,
                    title: "Cart",
                }}
            />

            <Tabs.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
                }}
            />
        </Tabs.Navigator>
    );
}
