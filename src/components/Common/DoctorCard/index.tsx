import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Female from '../../../assets/Images/female.svg';
import Star from '../../../assets/Icons/star.svg';
import UnLike from '../../../assets/Icons/unlike.svg';

const DoctorCard = (props: {
  data: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    specialization:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    rating:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
}) => {
  return (
    <View style={styles.carddoctor}>
      <View style={[styles.photosContainer]}>
        <View style={[styles.like]}>
          <View style={[styles.likeStlye]}>
            <UnLike />
          </View>
        </View>
        <View style={styles.imageBg}>
          <Female />
        </View>
      </View>
      <View style={[styles.DetalisContainer]}>
        <Text style={[styles.DrText]}>{props.data.name}</Text>
        <Text style={[styles.Drspecial]}>{props.data.specialization}</Text>
        <View style={[styles.star]}>
          <Star />
          <Text style={[styles.starText]}>{props.data.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;
