import React, { useContext } from "react";
import { View, StyleSheet, Text , TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {AntDesign} from "@expo/vector-icons";


const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    const id = navigation.getParam('id');
    const blogpost = state.find((item) => item.id === id);

    return (<View style={styles.container}>
        <Text style={styles.title}>Title :</Text>
        <View style={styles.content}>
            <Text >{blogpost.title}</Text>
        </View>
        <Text style={styles.title}>Content :</Text>
        <View style={styles.content}>
            <Text >{blogpost.content}</Text>
        </View>
    </View>);
}

ShowScreen.navigationOptions = ({  }) => {
return {
    headerRight  :<TouchableOpacity onPress = {()=>navigation.navigate('Edit' , {id})}>
         <AntDesign name = "edit" size ={20} ></AntDesign>
    </TouchableOpacity>
}
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold', 
        padding: 5,
    }
    ,
    content: {
        fontSize: 16,
        padding: 5,
    }
});

export default ShowScreen;