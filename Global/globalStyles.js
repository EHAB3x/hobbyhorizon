
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    primaryColor: "#105161",
    container:{
        flex: 1,
    },
    btn:{
        backgroundColor: "#105161",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 50,
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 15,
    },
    btnText:{
        color: "#FFF",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 17,
        fontFamily:"inter-semiBold"
    },
    regText:{
        color: "#FFF",
        textAlign: "center",
        fontFamily:"inter-regular"
    },
    img:{
        width: "100%",
        height: "100%",
        resizeMode:"cover"
    }
})