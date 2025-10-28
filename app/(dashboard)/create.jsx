import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer"
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
 
const Create = () => {
    return(
        <ThemedView style={StyleSheet.container}>

            <ThemedText title={true} style={StyleSheet.heading}>
                Add a New 
                </ThemedText>
                <Spacer />

            </ThemedView>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignment:"center",
    },
    heading:{
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
        
    },
})
