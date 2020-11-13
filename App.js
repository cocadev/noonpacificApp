import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/home';
import LoginScreen from './src/screens/login';
import { DetailScreen } from './src/screens/detail';
import AppDrawer from './src/components/drawer';
import { connect } from "react-redux";
import { useSelector } from "react-redux";


const AuthNavigator = () => {
  const AuthStackNavigator = createStackNavigator();
  return (
      <AuthStackNavigator.Navigator headerMode={false}>
        <AuthStackNavigator.Screen name="login" component={LoginScreen} />
      </AuthStackNavigator.Navigator>
  );
};

const ScreensWithDrawer = (props) => {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator
          drawerStyle={{ backgroundColor: '#FBFBFB' }}
          contentContainerStyle={{ borderWidth: 1 }}
          drawerStyle={{width: 220}}
          drawerContent={()=>{return(<AppDrawer />)}}
          screenOptions={{
            headerShown: false
          }}
      >
          <Drawer.Screen name="home" component={HomeScreen} />
      </Drawer.Navigator>);
}

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.logged) || false;

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigator /> : <ScreensWithDrawer />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  };
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);