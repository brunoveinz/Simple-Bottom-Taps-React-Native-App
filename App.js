import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import { Ionicons } from '@expo/vector-icons'

const BottomTap = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <BottomTap.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b'},
        headerTintColor: 'white',
        tabBarActiveTintColor: '#3c0a6b'
      }}>
        <BottomTap.Screen name="Welcome" component={WelcomeScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            )
          }}
        />
        <BottomTap.Screen name="User" component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size} />
            )
          }}
        />
      </BottomTap.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
