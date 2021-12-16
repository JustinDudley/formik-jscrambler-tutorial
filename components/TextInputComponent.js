import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
// import { TextInput as RNTextInput, View } from 'react-native'  //original scrip in tutorial.  The author renamed TextInput so as not to confuse it with the Author's own confusing name "TextInput" for the component!

import { Entypo as Icon } from '@expo/vector-icons';


// Wrapping the whole TextInput with forwardRef forwards the ref to a child component

// THIS COMPONENT IS CALLED TextInput IN THE ORIGINAL TUTORIAL. Very confusing, so I changed it:
const TextInputComponent = forwardRef(({ icon, error, touched, ...otherProps }, ref) => {
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
                {/* <RNTextInput   // in tutorial */}
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholderTextColor='rgba(34, 62, 75, 0.7)'
                    {...otherProps}
                    ref={ref}  // added this when wrapping with forwardRef. It uses the second parameter, ref, above
                />
            </View>
          </View>
    )
})

export default TextInputComponent