// import { View, useColorScheme } from "react-native";
// import { Colors } from '../constants/Colors';
// const ThemedView = ({ style, children, ...props }) => {
//     const ColorScheme = useColorScheme();
//     const theme = Colors[ColorScheme] ?? Colors.light;



//     return(
//         <view 
//           style={[{ backgroundColor: theme.background }, style]}
//           {...props}  
//           >
//             {children}
//             </view>
            
        
//     );
// };
// export default ThemedView;


import { View, useColorScheme } from "react-native";
import { Colors } from '../constants/Colors';

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      // The fix is to combine the theme style and the prop style in an array
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
     >
      {children}
    </View>
  );
};

export default ThemedView;