import React, {useState, FunctionComponent} from 'react';
import {
  Alert,
  Modal,
  TouchableOpacity,
  Text,
  Pressable,
  View,
} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AlertProps} from './types';
const ModalAlert: FunctionComponent<AlertProps> = ({
  label,
  visible,
  onHandleModel,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onHandleModel}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextFirst}>Alert</Text>
            <TouchableOpacity
              onPress={onHandleModel}
              activeOpacity={0.7}
              style={styles.like}>
              <View style={styles.likeStyle}>
                <AntDesign name={'close'} color="white" size={20} />
              </View>
            </TouchableOpacity>
            <Text style={styles.modalText}>
              {label === 'pilldelete'
                ? 'Are you sure you want to delete  the pill reminder?'
                : label === 'pillcancel'
                ? 'Are you sure want to cancel your booked appointment'
                : label === ''
                ? ''
                : label === ''
                ? ''
                : null}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <TouchableOpacity
                onPress={onHandleModel}
                activeOpacity={0.7}
                style={styles.NoButton}>
                <Text style={styles.NoText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                {...props}
                activeOpacity={0.7}
                style={styles.YesButton}>
                <Text style={styles.YesText}>Yes</Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAlert;
