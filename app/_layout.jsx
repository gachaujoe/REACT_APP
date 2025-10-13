import { View, Text ,StyleSheet, Image } from 'react-native'
import { Slot, slot, Stack } from 'expo-router'

const RootLayout = () =>{
    return(
        <Stack screenOptions={{
            headerStyle: {backgroundColor: '#ddd'},
            headerTintColor: '#333'

        }}>
     
            
                <Stack.Screen name="index"options={{title: "Home"}} />
                <Stack.Screen name="about"options={{title: "About"}} />
                <Stack.Screen name="contact"options={{title: "Contact", headershown: false }} />
            </Stack>
        
    )
}

export default RootLayout

const styles = StyleSheet.create({})