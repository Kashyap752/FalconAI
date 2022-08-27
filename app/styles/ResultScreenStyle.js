import { StyleSheet } from "react-native";
import constant from "../constants/constant";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    titleContainer1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        paddingVertical: 10,
        fontSize: 28,
        color: '#061a36',
        fontWeight: 'bold'
    },
    subTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 20,
        color: 'black'
    },
    timeContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 16,
        marginVertical: 15,
        flexDirection: 'row',
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
    },
    successText: {
        color: '#061a36',
        fontSize: 14,

    },
})