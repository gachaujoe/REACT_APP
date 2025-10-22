import { StyleSheet} from "react-native";
import { Link } from 'expo-router';

// Themed components 
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
const Login =() =>{
    return(
        <ThemedView style={style.container}>

            <Spacer />
            <ThemedText title={true} style={style.title}>
            login to Your Account
            </ThemedText>

            <Spacer height = {100}/>
            <Link href ='/register'>
             <ThemedText  style={{ textAlign: 'center'}}>
                Register instead
             </ThemedText>

            </Link>
        

        </ThemedView>
    )
}

export default Login

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


