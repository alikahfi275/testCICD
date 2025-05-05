import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Detail = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Profile again"
        onPress={() => navigation.push('Detail')}
      />
    </View>
  );
};

export default Detail;
