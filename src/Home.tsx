import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
};

export default Home;
