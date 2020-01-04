import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    const blogPost = state.find((blogpost) => { blogpost.id === navigation.getParam('id')})
    /* const title = navigation.getParam("title");
    const id = navigation.getParam("id"); */

    return (<View>
        <Text style={styles.title}>Title :</Text>
        <View style={styles.content}>
            <Text >{blogPost.title}</Text>
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
        borderWidth: 1,
    }
});

export default ShowScreen;