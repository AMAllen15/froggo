import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Setup from './pages/Setup';

const { Navigator, Screen } = createStackNavigator();

interface RoutesProps {
    initialRouteName: string;
}

export default function Routes({ initialRouteName }: RoutesProps) {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={initialRouteName}
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#8D2D56' },
                    headerBackTitleVisible: false,
                }}
            >
                <Screen
                    name="Setup"
                    component={Setup}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: 'Github Profile',
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
