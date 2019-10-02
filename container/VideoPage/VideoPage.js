import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import Video from 'react-native-video';
import BottomList from '../../components/Bottom/Bottoms';

const { width } = Dimensions.get("window")

export const VideoPage1 = () => {

    return (
        <View style = {styles.backgroundVideo}>
            <View >
              <Video
                style = {{width, height: 300}}
                repeat
                source={require('./Video/Video1.mp4')}
                onAudioBecomingNoisy
                controls = {true}
                paused
                resizeMode = "cover"
                playWhenInactive
                fullscreen
                />
            </View>
        </View>
    )
}

export const VideoPage2 = () => {

  return (
      <View style = {styles.backgroundVideo}>
          <View >
            <Video
              style = {{width, height: 300}}
              repeat
              source={require('./Video/Video2.mp4')}
              onAudioBecomingNoisy
              controls = {true}
              paused
              resizeMode = "cover"
              playWhenInactive/>
          </View>
      </View>
  )
}

export const VideoPage3 = () => {

  return (
      <View style = {styles.backgroundVideo}>
          <View >
            <Video
              style = {{width, height: 300}}
              repeat
              source={require('./Video/Video3.mp4')}
              onAudioBecomingNoisy
              controls = {true}
              paused
              resizeMode = "cover"
              playWhenInactive/>
          </View>
      </View>
  )
}

export const VideoPage4 = () => {

  return (
      <View style = {styles.backgroundVideo}>
          <View >
            <Video
              style = {{width, height: 300}}
              repeat
              source={require('./Video/Video4.mp4')}
              onAudioBecomingNoisy
              controls = {true}
              paused
              resizeMode = "cover"
              playWhenInactive/>
          </View>
      </View>
  )
}

var styles = StyleSheet.create({
    backgroundVideo: {
      width: "auto",
      height: 300,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      flex: 1
    },
    fakeContent: {
      height: 850,
      backgroundColor: "#CCC",
      padding: 250,
      alignItems: "center"
    }
  });