import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

export default function Login() {

    const passwordRef = useRef(null)

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email Yo').required('Required'),
        password: Yup.string()
            .min(2, 'password is too short')
            .max(15, 'password is too long')
            .required('Required')
    })

    const {
        handleChange, 
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
    } = useFormik({
        validationSchema: LoginSchema, //bring in Yup functionality from block above
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
                <TextInputComponent
                    icon='mail'
                    placeholder='Enter your email'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    keyboardAppearance='dark'
                    returnKeyType='next'
                    returnKeyLabel='next'
                    onChangeText={handleChange('email')}  //add user input to the property, defined above, named "email" [WAS email: 'tempYo', IS NOW email: 'whatever the user just typed']
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                    onSubmitEditing={() => passwordRef.current?.focus()}
               />
            </View>
            <View
                style={{
                    paddingHorizontal: 32,
                    marginBottom: 16,
                    width: '100%',
                }}
            >
                <TextInputComponent
                    ref={passwordRef}
                    icon='key'
                    placeholder='Enter your password'
                    secureTextEntry
                    autoCompleteType='password'
                    autoCapitalize='none'
                    keyboardAppearance='dark'
                    returnKeyType='go'
                    returnKeyLabel='go'
                    onChangeText={handleChange('password')} // as with 'email' in block above, this string called 'password' is passed somehow into the block at the top where formik was introduced
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    touched={touched.password}
                    onSubmitEditing={() => handleSubmit()}
               />
            </View>
            <ButtonComponent 
                label='Login (the GO button)'
                onPress={handleSubmit} // press goes into formik-land
            />
        </View>
    )
}