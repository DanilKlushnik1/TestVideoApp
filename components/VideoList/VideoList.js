import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { Actions } from 'react-native-router-flux'

const VideoList = () => {
    return (
        <View style = {styles.red}>
            <View style = {{height: "auto"}}>
                <Button 
                    style = {styles.VideoList} 
                    title = "Video1"
                    onPress = {Actions.video1}
                    type="clear"
                    color="red"
                    loadingStyle
                    ></Button>
            </View>
            <View style = {{height: "auto"}}>
                <Button 
                    style = {styles.VideoList} 
                    title = "Video2"
                    onPress = {Actions.video2}
                    type="clear"
                    loadingStyle></Button>
            </View>
            <View style = {{height: "auto"}}>
                <Button 
                    style = {styles.VideoList} 
                    title = "Video3"
                    onPress = {Actions.video3}
                    type="clear"
                    color="red"
                    loadingStyle></Button>
            </View>
            <View style = {{height: "auto"}}>
                <Button 
                    style = {styles.VideoList} 
                    title = "Video4"
                    onPress = {Actions.video4}
                    type="clear"
                    loadingStyle></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    red :{
        backgroundColor: "#CCC",
    },
    VideoList: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 0,
        height: 60,
        width: 60
    }
})

export default VideoList