import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BakkalDetail = (props) => {
  return (
    <TouchableOpacity>
      <Card>
        <CardSection>
          <Text>{props.bakkal.title}</Text>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

export default BakkalDetail;
