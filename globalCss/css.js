import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container : {
        flex : 1,
        display : "flex",
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "transparent"
    },
    headerTitle : {
        width : 200,
        height : 200,
        resizeMode : "contain"
    },
    text : {
        fontSize : 20,
        color : "#000"
    },
    button : {
        width : 200,
        height : 50,
        backgroundColor : "#000",
        alignItems : "center",
        justifyContent : "center",
        marginTop : 10
    },
    buttonText : {
        color : "#fff",
        fontSize : 15
    },
    input : {
        width : 200,
        height : 50,
        borderWidth : 1,
        borderColor : "#000",
        padding : 10,
        marginBottom : 10
    },
    form : {
        width : "100%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    },
    formTitle : {
        fontSize : 20,
        color : "#000",
        marginBottom : 10
    },
    formButton : {
        width : 200,
        height : 50,
        backgroundColor : "#000",
        alignItems : "center",
        justifyContent : "center",
        marginTop : 10
    },
    formButtonText : {
        color : "#fff",
        fontSize : 15
    },
    formInput : {
        width : 200,
        height : 50,
        borderWidth : 1,
        borderColor : "#000",
        padding : 10,
        marginBottom : 10
    },
})

export default styles;