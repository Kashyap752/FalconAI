import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 14,
        color: '#010d1f',
        height: 40
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image1: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
        tintColor: 'grey',
    },
    image: {
        height: 16,
        width: 16,
        marginHorizontal: 5,
        tintColor: 'grey',
        marginRight: 10
    },
    optionContainer: {
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    optionText: {
        paddingLeft: 16,
        fontSize: 16,
        color: '#010d1f'
    },
    label: {
        color: '#010d1f',
        fontSize: 16,
        marginBottom: 10
    }
})