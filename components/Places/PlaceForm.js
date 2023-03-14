import { Text, View, ScrollView, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from '../../components/UI/Colors';
import ImagePicker from './ImagePicker';

function PlaceForm() {
  const [entTitle, setEntTitle] = useState("");

  function changeTitleHandler(text) {
    setEntTitle(text);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChange={changeTitleHandler} value={entTitle} style={styles.input} />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    },
})
