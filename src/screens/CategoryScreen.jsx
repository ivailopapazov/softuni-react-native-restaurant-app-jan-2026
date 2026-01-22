import { View, Text } from "react-native";

export default function CategoryScreen({ route }) {
    const { categoryId } = route.params;

    alert(`Category ID: ${categoryId}`);
    return (
        <View>
            <Text>Category Screen</Text>
        </View>
    );
}
