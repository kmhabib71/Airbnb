import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
const Post = props => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
      />
      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedrooms</Text>

      {/* Type & description*/}
      <Text style={styles.description} numberOfLines={2}>
        This is bedroom description that you should concern while buying or
        renting a house. Its import cause I don't know
      </Text>
      {/* Old price & new price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30</Text>/night
      </Text>
      {/* Total price*/}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
