import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabsNavigation from './MainTabsNavigation';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import { RootStackParamList } from '../types';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabsNavigation} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
