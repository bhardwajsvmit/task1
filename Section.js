import React from 'react'
import { View, Text, Button ,StyleSheet, TextInput } from 'react-native'

const addSection=()=>{
    const [inp,setInp]=useState('')

    return(
        <View style={styles.lecture}>
            <TextInput onChangeText={(text)=>setInp(text)} value={inp} />
            <Button title="add section" />
        </View>
    )
}

export default function Section() {
    return (
        <View style={styles.section} >
            <View style={styles.sectionTab} >
            <TextInput onChangeText={(text)=>setInp(text)} value={inp} />
            <Text>{inp}</Text>
            <Button tittle="add section" onPress={Section}  />
            <Button title="add lecture" onPress={addSection} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'

    },
    sectionTab : {
      flex: 1,
      backgroundColor: 'gray',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lecture:{
        sectionTab : {
            flex: 1,
            backgroundColor: 'pink',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center',
    },
  });
  