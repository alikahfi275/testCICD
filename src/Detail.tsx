import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Detail = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, marginBottom: 20}}>Details Screen</Text>
      <Button
        title="Go to Profile again"
        onPress={() => navigation.push('Detail')}
      />

      {/* Setiap Di Klik Akan Bertumpuk */}
      <Text style={{fontSize: 30, marginBottom: 20}}>Back To Home Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack('Home')} />

      {/* Untuk Langsung Ketumpukan Awwal */}
      <Text style={{fontSize: 30, marginBottom: 20}}>Pop To Home</Text>
      <Button title="Go Back" onPress={() => navigation.popTo('Home')} />
    </View>
  );
};

export default Detail;
