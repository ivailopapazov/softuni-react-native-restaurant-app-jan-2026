import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

export default function RootNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen
                name="CartModal"
                component={CartScreen}
                options={{
                    presentation: 'modal',
                    headerShown: true,
                    title: 'Cart',
                    animation: 'slide_from_right'
                }}
            />

            <Stack.Screen
                name="CheckoutModal"
                component={CheckoutScreen}
                options={{
                    presentation: 'modal',
                    headerShown: true,
                    title: 'Checkout',
                    animation: 'slide_from_right'
                }}
            />
        </Stack.Navigator>
    );
}
