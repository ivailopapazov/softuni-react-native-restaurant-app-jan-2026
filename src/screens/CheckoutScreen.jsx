import { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from "react-native";
import { useCartContext } from "../contexts/cart/CartContext";
import Button from "../components/Button";

export default function CheckoutScreen({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const { totalPrice, clearCart } = useCartContext();

    const handlePlaceOrder = () => {
        Alert.alert(
            'Order Placed!',
            `Thank you, ${name}! Your order of $${totalPrice.toFixed(2)} will be delivered to:\n${address}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        // Clear the cart
                        clearCart();

                        // Reset navigation to MenuHome, preventing back navigation to checkout
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [
                        //         {
                        //             name: 'TabNavigator',
                        //             state: {
                        //                 index: 0,
                        //                 routes: [
                        //                     {
                        //                         name: 'HomeTab',
                        //                         state: { index: 0 },
                        //                     },
                        //                     {
                        //                         name: 'CartTab',
                        //                         state: { index: 0 },
                        //                     }
                        //                 ]
                        //             }
                        //         },
                        //     ]
                        // });
                        setName('');
                        setPhone('');
                        setAddress('');
                    },

                },
            ]
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>Delivery Details</Text>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="John Doe"
                            placeholderTextColor="#999"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="words"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="(555) 123-4567"
                            placeholderTextColor="#999"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Delivery Address *</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="123 Main St, Apt 4B, City, State 12345"
                            placeholderTextColor="#999"
                            value={address}
                            onChangeText={setAddress}
                            multiline
                            numberOfLines={3}
                            textAlignVertical="top"
                        />
                    </View>
                </View>

                <View style={styles.summary}>
                    <Text style={styles.summaryTitle}>Order Summary</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Total</Text>
                        <Text style={styles.summaryValue}>${totalPrice.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Button
                        title={`Place Order • $${totalPrice.toFixed(2)}`}
                        disabled={totalPrice === 0}
                        onPress={handlePlaceOrder}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 24,
    },
    form: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 14,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    textArea: {
        height: 80,
        paddingTop: 14,
    },
    summary: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    summaryLabel: {
        fontSize: 16,
        color: '#666',
    },
    summaryValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
});
