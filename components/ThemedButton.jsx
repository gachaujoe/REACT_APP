import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors'

function ThemedButton ({style,...props}) {
    return (
        <Pressable
        style={({pressed})=>[styles.btn, pressed && styles.pressed, style]}
        {...props}
        ></Pressable>
            
    )
}
const styles =StyleSheet.create ({
    btn:{
        background: Colors.primary,
        padding : 18,
        boarderRadius: 6,
        marginVertical: 10
    },
    pressed :{
        opacity: 0.5
    },
    
})

export default ThemedButton