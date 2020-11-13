import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import AntDesign from "react-native-vector-icons/Ionicons";
import images from "../config/images";
import * as authActions from "../store/actions/auth";
import { connect } from "react-redux";

const { width, height } = Dimensions.get('window');

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Image source={images.logo} style={styles.logo} />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={()=>props._login()}>
                    <View style={styles.icon}>
                        <AntDesign name="wifi" size={17} color="#000" />
                    </View>
                    <Text style={{ color: '#fff' }}>CONNECT SPOTIFY PREMIUM</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 20 }}>
                    WHY IS PREMIUM REQUIRED?
                </Text>
            </View>
        </View>
    )
};

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = dispatch => {
    return {
        _login: () => {
            return dispatch(authActions.login());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: '#000',
        width: width - 40,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    icon: {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
    },
    logo: {
        width: width / 2,
        height: width / 2
    }
})