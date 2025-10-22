import { StyleSheet} from "react-native";
import { Link } from 'expo-router';

// Themed components 
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
const Register =() =>{
    return(
        <ThemedView style={style.container}>

            <Spacer />
            <ThemedText title={true} style={style.title}>
            Register for an Account
            </ThemedText>

            <Spacer height = {100}/>
            <Link href ='/login'>
             <ThemedText  style={{ textAlign: 'center'}}>
                Login instead
             </ThemedText>

            </Link>
        

        </ThemedView>
    )
}

export default Register

const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },

    
})
