import React from 'react'
import { TouchableOpacity, StyleSheet, Modal, View, Text, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import * as authActions from "../store/actions/auth";

const { width, height } = Dimensions.get('window');
const mokeData = [
    {id: 1, title: 'Los Angeles', description: 'MONDAY'},
    {id: 2, title: 'New York', description: 'TUESDAY'},
    {id: 3, title: 'London', description: 'WEDNESDAY'},
    {id: 4, title: 'Singles', description: 'FRIDAY'},
]

function DrawerModal(props){
    return (
        <Modal
            transparent
            onRequestClose={() => { }}
            visible={true}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>props.removeModal()}>
                            <Icon name="close" size={25} color="#000" style={{ marginLeft: 12 }}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>{'NYC // 165'}</Text>
                    </View>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        {
                            mokeData.map((item, index) => 
                            <View key={index} style={styles.item}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <EvilIcons name="trophy" size={40} color="grey" />
                                    <View style={{ marginLeft: 18, paddingVertical: 9}}>
                                        <Text style={{ fontSize: 18, color: '#000'}}>{item.title}</Text>
                                        <Text style={{ color: 'grey', fontSize: 12}}>{item.description}</Text>
                                    </View>
                                </View>
                                <MaterialCommunityIcons name="bell-ring" size={20} color="black" />
                            </View>)
                        }
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => { props.removeModal(); props.goout();}} style={styles.button}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: state.auth.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeModal: () => {
            return dispatch(authActions.modalRemove());
        },
        goout: () => {
            return dispatch(authActions.logout());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerModal);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .6)',
    },
    card: {
        borderRadius: 5,
        backgroundColor: '#fff',
        height: height - 30,
        paddingVertical: 20,
        justifyContent:'space-between',
        width: '94%'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 12
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#000',
        height: 55,
        width: '100%',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginLeft: 50
    }
})