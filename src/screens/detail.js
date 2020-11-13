import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";

export const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                You are detail
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'green'
    },
})