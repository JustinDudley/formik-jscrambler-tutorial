import React, { forwardRef } from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';

import { Entypo as Icon } from '@expo/vector-icons';

// Wrapping the whole TextInput with forwardRef forwards the ref to a child component
const TextInput = forwardRef(({ icon, error, touched, ...otherProps }, ref) => {
    const validationColor = !touched? 'black' : error? 'red' : 'green';

    return (
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 48,
          borderRadius: 8,
          borderColor: validationColor,
          borderWidth: 2,
          padding: 8
        }}
      >
          <View style={{padding: 8}}>
              <Icon 
                name={icon} 
                color={validationColor}
                size={16}
              />
            </View>

            {/* flex: 1 below, as given in tutorial, messes up the textInput on Android device (but not in chrome emulator) */}
            {/* <View style={{flex: 1}}>   */}
            <View>
                <RNTextInput
                    underlineColorAndroid='transparent'
                    placeholderTextColor='rgba(34, 62, 75, 0.7)'
                    {...otherProps}
                    ref={ref}  // added this when wrapping with forwardRef. It uses the second parameter, ref, above
                />
            </View>
          </View>
    )
})

export default TextInput