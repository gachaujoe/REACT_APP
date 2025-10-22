import { View, Text ,StyleSheet, useColorScheme } from 'react-native'
import { Slot, slot, Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
const RootLayout = () =>{
    const colorScheme = useColorScheme()
    console.log(colorScheme)
    const theme = Colors[colorScheme]?? Colors.light

    return(
        <>
        <StatusBar value ='auto' />
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title

        }}>
            <Stack.Screen name= "(auth)" options={{headerShown: false}}/>

     
            
                <Stack.Screen name="index"options={{title: "Home" }} />
               
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})