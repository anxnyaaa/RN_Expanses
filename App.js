import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverView() {
  return (
    <BottomTabs.Navigator screenOptions={({navigation}) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => (
        <IconButton icon='add' size={24} color={tintColor} 
          onPress={() => {navigation.navigate('Manage Expenses')}}/>
      ),
    })}>
      <BottomTabs.Screen name="Recent Expenses" component={RecentExpenses} 
        options={{
          title: 'Recent Expenses', 
          tabBarLabel: 'Recent', 
          tabBarIcon: ({color, size}) => 
            <Ionicons name="hourglass-outline" size={size} color={color}/>
        }}/>
      <BottomTabs.Screen name="All Expenses" component={AllExpenses}
        options={{
          title: 'All Expenses', 
          tabBarLabel: 'All Expenses', 
          tabBarIcon: ({color, size}) => 
            <Ionicons name="calendar-outline" size={size} color={color}/>
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Expanses Overview'
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
          }}>          
            <Stack.Screen name='Expenses Overview' component={ExpensesOverView} options={{headerShown: false}}/>
            <Stack.Screen name='Manage Expenses' component={ManageExpenses} options={{
              presentation: 'modal',
              title: 'Manage Expenses'
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>   
  );
}
