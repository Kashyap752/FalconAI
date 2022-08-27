import { StyleSheet } from "react-native";
import constant from "../constants/constant";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15
    },
    title: {
        paddingVertical: 10,
        fontSize: 28,
        color: '#061a36',
        fontWeight: 'bold'
    },
    subTitleContainer: {
        justifyContent: 'center',
        marginLeft: 16
    },
    subTitle: {
        fontSize: 20,
        color: '#061a36',
        fontWeight: '400'
    },
    timeContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 16,
        marginBottom: 15,
        flexDirection: 'row'
    },
    timeText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    time: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    }
})