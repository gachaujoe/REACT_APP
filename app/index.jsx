// import React from 'react';
// import {  StyleSheet,  } from 'react-native';
// import { Link } from 'expo-router';

// //themed component
// import ThemedView from '../components/ThemedView'
// import ThemedLogo from '../components/ThemedLogo';
// import Spacer from '../components/Spacer';
// import ThemedText from '../components/ThemedText';


// const Home = () => {
//   return (
//     <ThemedView style={styles.container}>
//         <ThemedLogo style={styles.img}/>
//         <Spacer height={20} />

//       <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

//       <Spacer height={10} />

//       <ThemedText > Reading List App</ThemedText>
//       <Spacer />

//       <Link href="/about" style={styles.link}>
//        <ThemedText>About Page</ThemedText>
//       </Link>
//       <Link href="/contact" style={styles.link}>
//        <ThemedText>Contact Page</ThemedText>
//       </Link>

    

        

//     </ThemedView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: 18
//     },
  
//     link: {
//         marginVertical: 10,
//         borderBottomWidth: 1
//     }
    
// })

import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';

// themed components
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import { Colors } from '../constants/Colors';

const Home = () => {
  // Detect current system color scheme
  const colorScheme = useColorScheme() || 'light';
  const theme = Colors[colorScheme] || Colors.light;

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />

      <ThemedText style={[styles.title, { color: theme.title }]} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />

      <ThemedText style={{ color: theme.text }}>Reading List App</ThemedText>
      <Spacer height={20} />

      <Link href="/login" style={[styles.link, { borderBottomColor: theme.iconColor }]}>
        <ThemedText style={{ color: theme.text }}>login Page</ThemedText>
      </Link>

      <Link href="/register" style={[styles.link, { borderBottomColor: theme.iconColor }]}>
        <ThemedText style={{ color: theme.text }}>Register Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
