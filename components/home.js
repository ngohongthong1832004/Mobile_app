import React from 'react';
import { View, Button, StyleSheet } from "react-native";
import { Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    console.log(navigation);

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Go Form"
                onPress={() => navigation.navigate('Form')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
});

export default HomeScreen;
