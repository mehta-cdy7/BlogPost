import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (<View>
        <Text style={styles.title}>Title :</Text>
        <TextInput
            placeholder="enter title"
            value={title}
            onChangeText={(value) => { setTitle(value) }}
        ></TextInput>

        <Text style={styles.title}>Content :</Text>
        <TextInput
            placeholder="enter content"
            value={content}
            onChangeText={(value) => { setContent(value) }}
        ></TextInput>

        <Button title="ADD" onPress={() => {
            addBlogPost(
                title,
                content,
                () => { navigation.navigate('Index') }
            )
        }
        }></Button>

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

export default CreateScreen;