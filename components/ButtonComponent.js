import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// THIS COMPONENT IS CALLED Button IN THE ORIGINAL TUTORIAL. Very confusing, so I changed it:
export default function ButtonComponent ({ label, onPress }) {
    return (
        <TouchableOpacity
            style={{
                borderRadius: 8,
                height: 50,
                width: 245,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e94832',
            }}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text
                style={{ fontSize: 18, color: 'white', textTransform: 'uppercase'}}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}