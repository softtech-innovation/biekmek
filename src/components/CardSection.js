import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 15,
    backgroundColor: '#ecf0f1',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#34495e',
    position: 'relative'
  }
};

export default CardSection;
