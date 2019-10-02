import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux'

const BottomList = () => {
    return (
            <View style = {styles.BottomListView}>
                <Button 
                    style = {styles.BottomListText}
                    title = '1'
                    onPress = {Actions.video1}></Button>
                <Button 
                    style = {styles.BottomListText}
                    title = '2'
                    onPress = {Actions.video2}></Button>
                <Button 
                    style = {styles.BottomListText}
                    title = '3'
                    onPress = {Actions.video3}></Button>
                <Button 
                    style = {styles.BottomListText}
                    title = '4'
                    onPress = {Actions.video4}></Button>
            </View>
    )
}

const styles = StyleSheet.create({
    BottomListView: {
        borderStyle: "solid",
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // position: "relative",
        // left: 0,
        // bottom: 0,
        // width: '100%',
    },
    BottomListText: {
        textAlign: 'center',
        justifyContent: 'center',
    }
})

export default BottomList