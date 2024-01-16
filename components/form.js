import {View, Text, Button} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from '../globalCss/css';

const FormScreen = () => {
    const navigate = useNavigation();


    return (
        <View style = {styles.container}>
            <Text>FormScreen</Text>
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigate.goBack()}
            />
        </View>
    )    
}

export default FormScreen;