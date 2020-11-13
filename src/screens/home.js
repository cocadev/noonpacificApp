import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text, ImageBackground, Dimensions, TouchableOpacity, ScrollViewComponent } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import images from '../config/images';

import data from "../config/data";
import DrawerModal from "../components/modal";
import * as authActions from "../store/actions/auth";
import { connect } from "react-redux";

const { width, height } = Dimensions.get('window');

function HomeScreen(props) {

   
    return (
        <View style={{ flex: 1 }}>
            <ParallaxScrollView
                style={{ flex: 1 }}
                parallaxHeaderHeight={height / 1.8}
                renderForeground={() => (
                    <ImageBackground source={images.rain} style={styles.header}>
                        <Text style={{ color: '#fff', fontSize: 28 }}>NYC // 165</Text>
                    </ImageBackground>
                )}>

                <View style={styles.roundBtn}>
                    <AntDesign name="caretright" size={20} color="#000" />
                </View>

                <ScrollView>
                    <View style={styles.list}>
                        {data.musics.map((item, index) =>
                            <View key={index} style={styles.item}>
                                <Text style={{ fontSize: 11, fontWeight: '600' }}>{item.mId}</Text>
                                <View style={{ marginLeft: 12, marginLeft: 18 }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                </View>
                            </View>)}
                    </View>
                </ScrollView>

            </ParallaxScrollView>
            <TouchableOpacity style={styles.icon} onPress={() => props.navigation.toggleDrawer()}>
                <Icon name="ios-menu" size={25} color="#fff" />
            </TouchableOpacity>
            { props.modal && <DrawerModal onClose={() => props.removeModal()} />}

        </View>
    )
};

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown'
    },
    header: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {

    },
    icon: {
        position: 'absolute',
        left: 12,
        top: 12
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderTopColor: 'grey',
        borderTopWidth: 1
    },
    title: {
        fontSize: 12,
    },
    description: {
        fontSize: 11,
        color: '#777'
    },
    roundBtn: {
        position: 'absolute',
        right: 20,
        marginTop: -30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})