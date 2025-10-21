import { StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { Colors } from '../constants/Colors';

const Contact = () => {
  // 👇 get current color scheme (light/dark)
  const colorScheme = useColorScheme() || 'light';
  const theme = Colors[colorScheme] || Colors.light;

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* fixed: use "style", not "styles", and use styles.title from your stylesheet */}
      <ThemedText style={styles.title}>Contact Page</ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

