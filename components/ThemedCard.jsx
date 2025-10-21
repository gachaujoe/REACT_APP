import { View, useColorScheme,View } from "react-native";
import { Colors } from '../constants/Colors';

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      // The fix is to combine the theme style and the prop style in an array
      style={[{ backgroundColor: theme.uiBackground }, style.card,style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})