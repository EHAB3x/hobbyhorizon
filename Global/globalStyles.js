
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    primaryColor: "#105161",
    container:{
        flex: 1,
    },
    btn:{
        backgroundColor: "#105161",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 45,
        justifyContent: "center",
        borderRadius: 15,
    },
    btnText:{
        color: "#FFF",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 17,
        fontFamily:"inter-semiBold"
    },
    primaryTitle:{
        color: "#105161",
        textAlign: "right",
        fontFamily:"inter-regular"
    },
    title:{
        color: "#FFF",
        textAlign: "center",
        fontFamily:"inter-regular",
        fontSize:20,
    },
    label:{
        color: "#105161",
        textAlign: "left",
        fontFamily:"inter-regular",
        marginBottom:5,
        marginLeft:10,
    },
    img:{
        width: "100%",
        height: "100%",
        resizeMode:"cover"
    },
    input:{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor:"#105161",
        padding:10,
        borderRadius:15,
        color: "#FFF"
    }
})