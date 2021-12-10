import React from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default function Login() {

    const {handleChange, handleSubmit, values } = useFormik({
        initialValues: {email: 'tempYo', password: ''},
        onSubmit: values => 
        alert(`Email: ${values.email}, Password: ${values.password}`)
    })

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
                    onChangeText={handleChange('email')}  //add user input to the property, defined above, named "email" [WAS email: 'tempYo', IS NOW email: 'whatever the user just typed']
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
                    onChangeText={handleChange('password')} // as with 'email' in block above, this string called 'password' is passed somehow into the block at the top where formik was introduced
                />
            </View>
            <Button 
                label='Login (the GO button)'
                onPress={handleSubmit} // press goes into formik-land
            />
        </View>
    )
}