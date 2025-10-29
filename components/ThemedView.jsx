
import { View, useColorScheme } from "react-native";
// Import SafeAreaView from the 'react-native-safe-area-context' library
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from '../constants/Colors';

// We no longer need useSafeAreaInsets because SafeAreaView handles it automatically.

const ThemedView = ({ style, safe = false, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  // 1. Determine which base component to use
  const Component = safe ? SafeAreaView : View;

  // 2. Render that component, passing the children inside it
  return (
    <Component
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    >
      {/* This is the crucial fix: render the children here */}
      {children}
    </Component>
  );
}

export default ThemedView;