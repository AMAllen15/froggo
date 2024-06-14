import { Callout, Marker } from 'react-native-maps';
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import { AuthenticationContext } from '../context/AuthenticationContext';
import User from '../types/user';

interface UserMarkerProps {
    data: User;
    handleCalloutPress: (username: string) => void;
}

export default function UserMarker({ data: user, handleCalloutPress }: UserMarkerProps) {
    const currentUser = useContext(AuthenticationContext)?.value;
    const isCurrentUser = user.login === currentUser;

    return (
        <Marker key={user.id} coordinate={user.coordinates}>
            <Image
                style={[styles.avatar, isCurrentUser && styles.currentUser]}
                source={{ uri: user.avatar_url }}
                resizeMode="contain"
            />
            <Callout onPress={() => handleCalloutPress(user.login)}>
                <View style={styles.callout}>
                    <Text style={styles.devName}>{user.name}</Text>
                    <Text style={styles.devCompany}>{user.company}</Text>
                    <Text style={styles.devBio}>{user.bio}</Text>
                </View>
            </Callout>
        </Marker>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 64,
        height: 64,
        borderWidth: 4,
        borderColor: '#AD2D56',
        borderRadius: 32,
    },

    currentUser: {
        borderColor: '#D53C3C',
    },

    callout: {
        paddingTop: 5,
        width: 240,
        alignItems: 'center',
        backgroundColor: '#A3445D',
    },

    devName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },

    devCompany: {
        color: 'white',
        fontSize: 12,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },
});
