import React,{FunctionComponent} from 'react';
import {StyleSheet, View,} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

interface rating {
  rating: number
}
export const StarRating:FunctionComponent<rating>= ({rating}) => {
  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let color = '#ffba00';
    if (i > rating) {
      color = '#dddddd';
    }
    stars.push(<Icon name={'star-fill'} size={13} style={{color:color,marginLeft:2}} key={i} />);
  }
  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
