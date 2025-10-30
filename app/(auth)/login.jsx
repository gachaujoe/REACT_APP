import { StyleSheet, Pressable, Text, useColorScheme, TextInput} from "react-native";
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors'

// Themed components 
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
const Login =() =>{
    const[email,setEmail] = useState('')
     const[password,setPassword] = useState('')


    const handleSubmit = () => {
        console.log('Login form submitted',email,password)
    }

    return(
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
            login to Your Account
            </ThemedText>

            <ThemedTextInput
            style={{width:'80',marginBottom:20}}
             placeholder="Email"
             keyboardType='email-address'
             onChangeText={setEmail}
             value= {email}

              />
              
            <ThemedTextInput
            style={{width:'80',marginBottom:20}}
             placeholder="Password"
             secureTextEntry
             onChangeText={setPassword}
             value= {password}
             />


            <ThemedButton onPress={handleSubmit}>
                <Text style={{color: '#f2f2f2'}}>Login</Text>

            </ThemedButton>

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

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,

    },
    pressed: {
        opacity: 0.8
    }

    
})


