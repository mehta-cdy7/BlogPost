import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ShowScreen = ({ navigation }) => {

    const title = navigation.getParam("title");
    const id = navigation.getParam("id");

    return (<View>
        <Text style={styles.title}>Title :</Text>
        <View style={styles.content}>
            <Text >{title}</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
    ,
    content: {
        fontSize: 16,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth : 1,
    }
});

export default ShowScreen;