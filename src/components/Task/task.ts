import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        
        flexDirection: "row",
        paddingHorizontal: 12,
        height: 64,
        backgroundColor: '#262626',
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        marginBottom: 8,
        
    },
    titleTask: {
       
        flex: 1,
        fontSize: 16,
        lineHeight: 25,
        
        color: '#F2F2F2'
    },
    titleTaskDone: {
        color: '#808080',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        lineHeight: 25,
        textDecorationLine: "line-through",
    }

})