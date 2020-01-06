import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {

    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(
        blogpost => blogpost.id === id
    );

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => { console.log(title, content) }}
    />

}
const styles = StyleSheet.create({
});

export default EditScreen