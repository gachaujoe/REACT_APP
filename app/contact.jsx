import { View, Text ,StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const contact = () =>{
    return(
        <View style={styles.container}>
            <Text styles={SVGStyleElement.title}>Contact Page</Text>
            <Link href="/" style={styles.link}>Back Home</Link>
        </View>
    )
}


export default contact;

const styles = StyleSheet.create({

container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})