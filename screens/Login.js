import React from 'react';
import { Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default function Login() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text 
                style={{
                    color: '#223e4b',
                    fontSize: 20,
                    marginBottom: 16,
                }}
            >
                Login
            </Text>
            <View
                style={{
                    paddingHorizontal: 32,
                    marginBottom: 16,
                    width: '100%',
                }}
            >
                <TextInput
                    icon='mail'
                    placeholder='Enter your email'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    keyboardAppearance='dark'
                    returnKeyType='next'
                    returnKeyLabel='next'
                />
            </View>
            <View
                style={{
                    paddingHorizontal: 32,
                    marginBottom: 16,
                    width: '100%',
                }}
            >
                <TextInput
                    icon='key'
                    placeholder='Enter your password'
                    secureTextEntry
                    autoCompleteType='password'
                    autoCapitalize='none'
                    keyboardAppearance='dark'
                    returnKeyType='go'
                    returnKeyLabel='go'
                />
            </View>
            <Button 
                label='Login'
                onPress={() => true}
            />
        </View>
    )
}