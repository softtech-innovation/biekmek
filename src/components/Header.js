import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#95a5a6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
