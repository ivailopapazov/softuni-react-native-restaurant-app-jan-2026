import { View, Text, StyleSheet, FlatList } from 'react-native';
import CartItem from '../components/CartItem';
import { useCartContext } from '../contexts/cart/CartContext';
import Button from '../components/Button';

export default function CartScreen({navigation, route}) {
    const { items, total, totalPrice } = useCartContext();
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item, index }) => <CartItem index={index} quantity={item.quantity} {...item.meal} />}
                keyExtractor={(item) => item.meal.id.toString()}
                ListEmptyComponent={(
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyIcon}>🛒</Text>
                        <Text style={styles.emptyTitle}>Your cart is empty</Text>
                        <Text style={styles.emptySubtitle}>
                            Add some delicious items to get started
                        </Text>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Items ({total})</Text>
                    {/* <Text style={styles.summaryValue}>${total}</Text> */}
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>${totalPrice.toFixed(2)}</Text>
                </View>
                <Button
                    style={styles.checkoutButton}
                    disabled={items.length === 0}
                    onPress={() => navigation.navigate(route.name === 'CartModal' ? 'CheckoutModal' : 'Checkout')}
                    title="Proceed to Checkout"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f8f8f8',
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
    },
    list: {
        padding: 16,
        paddingBottom: 8,
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 15,
        color: '#666',
    },
    summaryValue: {
        fontSize: 15,
        color: '#333',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    totalValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    checkoutButton: {
        marginTop: 16,
    },
});
