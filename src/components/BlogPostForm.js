import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit  , initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (<View style={styles.container}>
        <Text style={styles.title}>Title :</Text>
        <TextInput
            style={styles.content}
            placeholder="enter title"
            value={title}
            onChangeText={(value) => { setTitle(value) }}
        ></TextInput>

        <Text style={styles.title}>Content :</Text>
        <TextInput
            style={styles.content}
            placeholder="enter content"
            value={content}
            onChangeText={(value) => { setContent(value) }}
        ></TextInput>

        <Button style={styles.button}
            title="SAVE POST"
            onPress={() => { onSubmit(title , content) }}
        ></Button>

    </View>);
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        margin: 2,
    }
    ,
    content: {
        fontSize: 16,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 2,
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 10,
    }

});

export default BlogPostForm;