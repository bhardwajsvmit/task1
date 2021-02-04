import React,{useState} from 'react'
import { SafeAreaView,View, Text, Button ,StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'


export default function Section() {

    const [inp,setInp] = useState('')
    const [list,setList] =useState([]);

    const addLecture=()=>{
        if(inp){
        setList([ ...list, { key : Math.random().toString() , data:inp } ]);
        setInp('')
        }
        else{
            setList([...list])
        }
    }

    const removeLecture=(itemkey)=>{
        var newlist = list.filter(item=> item.key!=itemkey);
        setList(newlist);
    }

    return (
        <SafeAreaView style={styles.section}  >
           
            <View style={styles.sectionTab} >
            <TextInput 
            style={{width:200,color:'red', textAlign:'center',fontSize:18,borderColor:'red',borderWidth:1,height:37}} 
            onChangeText={(text)=>setInp(text)} 
            value={inp} 
            placeholder="enter lecture name" />
            <Button title="add lecture" onPress={addLecture} />
            </View>
           
            <ScrollView > 
                {list.map((item)=>
                 <View key={item.key} style={styles.scrollviewitem} >
                 <Text style={styles.scrollviewtext} >{item.data}</Text>
                 <Button style={{flex:1,justifyContent:'center'}} title="Delete" onPress={()=>removeLecture(item.key)} />
                 </View>
                
                    )}

            </ScrollView>
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    section:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    
        sectionTab : {
            width:'100%',
            height:50,
            borderWidth:1,
            borderColor:'gray',
            backgroundColor: 'pink',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
    },
    scrollviewitem:{
        backgroundColor :'orange',
        flexDirection:'row',
        margin:2,
        width:'80%',
        borderRadius:10,
        padding:8,
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf:'center',

    },
    scrollviewtext:{
        flex:4,
        justifyContent:'center',
        alignSelf:'center',
        fontSize:17,

    },
  });
  