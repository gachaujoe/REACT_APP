import { client, Account, Avatars } from 'react-native-appwrite';

export const client = new client ()
    .setProject('68e61c08000be8ce8f4')
    .setPlatform("React Native")

 export const account = new Account(client)
 export const Avatars = new Avatars(client)