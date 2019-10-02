import React from 'react';
import { StyleSheet, ScrollView,} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import VideoList from '../../components/VideoList/VideoList';

const HandlePage = () => {
  return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         <VideoList />
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default HandlePage;