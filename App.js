// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const HomeScreen =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const DetailsScreen =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
       <Button
        title="Go to Item1"
        onPress={() => navigation.navigate('Item1')}
      />
    
    </View>
  );
}

const Item1 =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item1</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
       <Button
        title="Go to Item2"
        onPress={() => navigation.navigate('Item2')}
      />
      <Button
        title="Go to Item3"
        onPress={() => navigation.navigate('Item3')}
      />
    </View>
  );
}

const Item2 =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item2</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
       <Button
        title="Go to Item1"
        onPress={() => navigation.navigate('Item1')}
      />
      <Button
        title="Go to Item3"
        onPress={() => navigation.navigate('Item3')}
      />
    </View>
  );
}

const Item3 =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item3</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Item1"
        onPress={() => navigation.navigate('Item1')}
      />
      <Button
        title="Go to Item2"
        onPress={() => navigation.navigate('Item2')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const ScreenView = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        
      </Stack.Navigator>

  )
}

const Screen2 = () => {
  return (
    <Stack.Navigator>
        
        <Stack.Screen name="Item1" component={Item1} />
        <Stack.Screen name="Item2" component={Item2} />
        <Stack.Screen name="Item3" component={Item3} />
      </Stack.Navigator>

  )
}


const App =() => {
  return (
    <NavigationContainer>
    <Tabs.Navigator>
    <Tabs.Screen name='ScreenView' component={ScreenView} options={{headerShown: false}}/>
    <Tabs.Screen name='Screen2' component={Screen2} options={{headerShown: false}}/>
    

    </Tabs.Navigator>
      
    </NavigationContainer>
  );
}

export default App;