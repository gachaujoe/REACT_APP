import { StyleSheet, Pressable, Text} from "react-native";
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors'

// Themed components 
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
const Login =() =>{
    const handleSubmit = () => {
        console.log('Login form submitted')
    }

    return(
        <ThemedView style={style.container}>

            <Spacer />
            <ThemedText title={true} style={style.title}>
            login to Your Account
            </ThemedText>


            <Pressable 
            onPress={handleSubmit}
            
            style={({pressed})=> [style.btn, pressed && style.pressed]}>
                <Text style={{ color: "#f2f2f2f2"}}>Login</Text>

            </Pressable>

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
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        boarderRadius: 5,

    },
    pressed: {
        opacity: 0.8
    }

    
})


