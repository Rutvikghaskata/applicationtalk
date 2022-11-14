import AsyncStorage from '@react-native-async-storage/async-storage';
import {BackHandler, Platform} from 'react-native';
export const Storage = AsyncStorage;
export const history = {};
export const Handler = BackHandler;
export const handlerPlatform = Platform;