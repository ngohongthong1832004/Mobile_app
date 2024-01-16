import React from 'react';
import { View, Button, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from "../globalCss/css.js";   


const HomeScreen = () => {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Go Form"
                onPress={() => navigate.navigate('Form')}
            />
        </View>
    );
};


export default HomeScreen;
