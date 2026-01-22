import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{ headerShown: false }}
            />

            <Tabs.Screen name="Cart" component={CartScreen} />
            
            <Tabs.Screen name="Info" component={InfoScreen} />
        </Tabs.Navigator>
    );
}
