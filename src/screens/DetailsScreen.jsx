import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";

import Button from "../components/Button";
import QuantityStepper from "../components/QuantityStepper";
import { mealApi } from "../api";
import { useCartContext } from "../contexts/cart/CartContext";

export default function DetailsScreen({
    route,
    navigation,
}) {
    const [quantity, setQuantity] = useState(1);
    const [meal, setMeal] = useState(null);
    const { itemId } = route.params;
    const { addToCart } = useCartContext();

    useEffect(() => {
        mealApi.getOne(itemId)
            .then(res => {
                setMeal(res.data);
            })
            .catch(err => {
                console.error('Error fetching meal details:', err);
            });
    }, [itemId]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: meal?.imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.content}>
                    <Text style={styles.name}>{meal?.name}</Text>
                    <Text style={styles.description}>{meal?.description}</Text>
                    <Text style={styles.basePrice}>Base price: ${meal?.price?.toFixed(2)}</Text>

                    <View style={styles.divider} />

                    {/* Extra selector */}

                    <View style={styles.qtySection}>
                        <Text style={styles.qtyLabel}>Quantity</Text>
                        <QuantityStepper
                            qty={quantity}
                            onIncrement={() => setQuantity(quantity + 1)}
                            onDecrement={() => setQuantity(quantity - 1)}
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalPrice}>${meal?.price && (meal?.price * quantity).toFixed(2)}</Text>
                    </View>
                    <View style={styles.footerButtons}>
                        <Button
                            title="Add to Cart"
                            style={styles.addButton}
                            onPress={() => {
                                if (meal) {
                                    addToCart(meal, quantity);
                                    navigation.navigate('CartModal');
                                }
                            }}
                        />
                        <Button
                            title="View Cart"
                            variant="outline"
                            style={styles.viewCartButton}
                            onPress={() => navigation.navigate('CartModal')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: '#FF3B30',
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginBottom: 8,
    },
    basePrice: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 16,
    },
    qtySection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qtyLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    totalLabel: {
        fontSize: 16,
        color: '#666',
    },
    totalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    footerButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    addButton: {
        flex: 2,
    },
    viewCartButton: {
        flex: 1,
    },
});
