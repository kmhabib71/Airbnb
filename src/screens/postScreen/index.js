import React from 'react';
import {Text, View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';
import {useRoute} from '@react-navigation/native';

const postScreen = props => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);
  console.log(route.params);
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};
export default postScreen;
