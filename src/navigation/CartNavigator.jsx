import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";

export default function CartNavigator() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart"
                component={CartScreen} 
                options={{ title: "Cart" }}
            />
        </Stack.Navigator>
    );
}
