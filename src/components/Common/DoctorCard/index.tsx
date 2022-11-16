import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Female from '../../../assets/Images/female.svg';
import Star from '../../../assets/Icons/star.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveWidth} from 'react-native-responsive-dimensions';

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
  index: number;
}) => {
  const [like, setLike] = React.useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.card,
        props.index % 2 == 0 && {marginLeft: responsiveWidth(3.5)},
        props.index >= 2 && {marginBottom: responsiveWidth(10)},
      ]}
      activeOpacity={0.9}>
      <View style={styles.photosContainer}>
        <TouchableOpacity
          style={styles.like}
          onPress={() => setLike(!like)}
          activeOpacity={0.8}>
          <View style={styles.likeStyle}>
            {like ? (
              <AntDesign name={'heart'} color="white" size={20} />
            ) : (
              <AntDesign name={'hearto'} color="white" size={20} />
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.imageBg}>
          <Female />
        </View>
      </View>
      <View style={styles.DetalisContainer}>
        <Text style={styles.DrText}>{props.data.name}</Text>
        <Text style={styles.Drspecial}>{props.data.specialization}</Text>
        <View style={styles.star}>
          <Star />
          <Text style={styles.starText}>{props.data.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;
