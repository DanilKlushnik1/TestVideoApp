/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, StatusBar, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Router, Scene, Stack} from 'react-native-router-flux'

import HandlePage from './container/HandlePage/HandlePage';
import { VideoPage1, VideoPage2, VideoPage3, VideoPage4} from "./container/VideoPage/VideoPage";
import BottomList from './components/Bottom/Bottoms';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Router>
          <Stack 
            key = "root"
            headerLayoutPreset="center">
            <Scene 
              key = "HandlePage" 
              component = {HandlePage} 
              title = "Title"
            />

              <Stack key = "video1" headerLayoutPreset="center" title = "video1">
                <Scene 
                  key = "VideoPage1" 
                  component = {VideoPage1} 
                  title = "Video Page"
                  />
              </Stack>

              <Stack key = "video2" headerLayoutPreset="center" title = "video2">
                <Scene 
                  key = "VideoPage2" 
                  component = {VideoPage2} 
                  title = "Video Page"
                  />
              </Stack>

              <Stack key = "video3" headerLayoutPreset="center" title = "video3">
                <Scene 
                  key = "VideoPage3" 
                  component = {VideoPage3} 
                  title = "Video Page"
                  />
              </Stack>

              <Stack key = "video4" headerLayoutPreset="center" title = "video4">
                <Scene 
                  key = "VideoPage4" 
                  component = {VideoPage4} 
                  title = "Video Page"
                  />
              </Stack>
          </Stack>
        </Router>
      <StatusBar barStyle="dark-content" />
      <BottomList />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
