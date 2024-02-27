import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverView() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Recent Expenses" component={RecentExpenses}/>
      <BottomTabs.Screen name="All Expenses" component={AllExpenses}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Expanses Overview'>          
          <Stack.Screen name='Expenses Overview' component={ExpensesOverView} options={{headerShown: false}}/>
          <Stack.Screen name='Manage Expenses' component={ManageExpenses}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

    
    
  );
}
