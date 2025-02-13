
import react from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";


export default props =>{
    return(
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType="slide" transparent={true}>
            <View style={styles.frame}> 
                <View style={styles.container}>
                    <Text style={styles.title} > Select a level</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={ () =>    props.onLevelSelect(0.1)}>
                        <Text style={styles.buttonLabel}> Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgMedium]} onPress={ () =>    props.onLevelSelect(0.2)}>
                        <Text style={styles.buttonLabel}> Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={ () =>    props.onLevelSelect(0.3)}>
                        <Text style={styles.buttonLabel}> Hard</Text>
                    </TouchableOpacity>
                </View>     
            </View> 
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex: 1,    
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',

    },  
    container:{
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },  
    title:{
        fontSize: 30,
        fontWeight: 'bold',

    },
    button:{
        marginTop: 10,
        padding: 5,
    },          
    buttonLabel:{
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },      
    bgMedium:{
        backgroundColor: '#2765f7'
    },      
    bgEasy:{
        backgroundColor: '#49b65d'
    },      
    bgHard:{
        backgroundColor: '#f26337'
    }
})
