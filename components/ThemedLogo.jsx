
import { Image, useColorScheme } from "react-native";

// images
import DarkLogo from '../assets/img/logo_dark.jpg'
import LightLogo from '../assets/img/logo_light.jpg'

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <image source ={logo} {...props} />
  );
};

export default ThemedLogo;