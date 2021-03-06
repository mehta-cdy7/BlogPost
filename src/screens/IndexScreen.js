import React, { useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Button,
    TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Entypo, Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {


    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost()
        
        // if index screen is opened again this function will work then 
        const listener = navigation.addListener('didFocus' , ()=>{
              getBlogPost();
        });

        //in future if we want to un mound our index screen 
        //we will remove the listener to prevent memory_leak
        return ()=>{
            listener.remove();
        }
        
    }, []);

    getBlogPost()

    return <View>

        <FlatList
            data={state}
            keyExtractor={(blogpost) => blogpost.title}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { title: item.title, id: item.id })}>
                        <View style={styles.row}>

                            <Text
                                style={styles.text}>
                                {item.title} - {item.id}
                            </Text>

                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Entypo
                                    name='trash'
                                    style={styles.icon}
                                />

                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>);
            }}
        />

    </View >

}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name='plus' size={20} />
        </TouchableOpacity>
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 15,
        borderColor: 'grey',
        borderBottomWidth: 2,

    },

    text: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
    button: {
        borderRadius: 10,
        borderColor: 'black',
        marginHorizontal: 2,
        marginVertical: 5,
    },
});
export default IndexScreen;