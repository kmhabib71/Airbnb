import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './style';
const Post = props => {
  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={(styles.container, {width: width - 60})}>
      <View style={styles.innerContainer}>
        {/* image */}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & bedroom */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedrooms
          </Text>

          {/* Type & description*/}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          {/* Old price & new price*/}
          <Text style={styles.prices}>
            {/* <Text style={styles.oldPrice}>${post.oldPrice} </Text> */}
            <Text style={(styles.price, {color: 'black', fontWeight: 'bold'})}>
              {' '}
              ${post.newPrice}
            </Text>
            /night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
