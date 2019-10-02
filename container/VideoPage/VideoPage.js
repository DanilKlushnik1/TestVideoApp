import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import Video from 'react-native-video';

const { width } = Dimensions.get("window")

export const VideoPage1 = () => {

    return (
        <View style = {styles.backgroundVideo}>
            <View >
              <Video
                style = {{width, height: 300}}
                source={require('./Video/Video1.mp4')}
                controls = {true}
                paused
                resizeMode = "cover"
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
              source={require('./Video/Video2.mp4')}
              controls = {true}
              paused
              resizeMode = "cover"/>
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
              source={require('./Video/Video3.mp4')}
              controls = {true}
              paused
              resizeMode = "cover"/>
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
              source={require('./Video/Video4.mp4')}
              controls = {true}
              paused
              resizeMode = "cover"/>
          </View>
      </View>
  )
}

var styles = StyleSheet.create({
    backgroundVideo: {
      backgroundColor: "black",
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
      padding: 250,
      alignItems: "center"
    }
  });