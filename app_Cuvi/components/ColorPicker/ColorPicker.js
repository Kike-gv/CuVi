import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import ColorPalette from 'react-native-color-palette';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UncontrolledColorPicker = () => (
    <ColorPalette
      onChange={color => alert(`Color selected: ${color}`)}
      defaultColor={'#C0392B'}
      colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
      title={"Escoge tu tema, lo usaremos tambien para tus CV:"}
      icon={
        <Text>✔</Text>
        // Icon can just be text or ASCII
      }
    />
  )
   
//   const ControlledColorPicker = () => {
//       let IconComponent = Ionicons;
//     let selectedColor = '#C0392B';
//     return (
//       <ColorPalette
//         onChange={color => selectedColor = color}
//         value={selectedColor}
//         colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
//         title={"Controlled Color Palette:"}
//         icon={
//           <IconComponent name={'ion-md-checkmark'} size={25} color={'black'} />
//         // React-Native-Vector-Icons Example
//       }
//     />)
//   }

  export default UncontrolledColorPicker;