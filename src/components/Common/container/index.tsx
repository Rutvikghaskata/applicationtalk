import {SafeAreaView, StyleSheet} from 'react-native';
import React, {ReactElement,ReactNode} from 'react';

type Props = {children: ReactNode};
function Container({ children }: Props): ReactElement{
  return <SafeAreaView style={styles.container} >{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Container;
