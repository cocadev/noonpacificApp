import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";
import * as authActions from "../store/actions/auth";

const { width, height } = Dimensions.get('window');

const DRAWERS =
    [
        { title: 'NYC // 155', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
        { title: 'NYC // 156', url: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg' },
        { title: 'NYC // 157', url: 'https://media.gettyimages.com/photos/aladaglar-and-demirkazik-summit-on-taurus-mountains-at-turkey-picture-id1158804498' },
        { title: 'NYC // 158', url: 'https://cdn.cdnparenting.com/articles/2018/08/602444213-H.jpg' },
        { title: 'NYC // 159', url: 'https://www.adventure-journal.com/wp-content/uploads/2013/06/adventure-journal-songs-about-mountains.jpg' }
    ]

function AppDrawer(props) {

    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity style={styles.header} onPress={() => { props.openModal() }}>
                <Text style={{ fontWeight: '600', fontSize: 14, marginRight: 30 }}>New York</Text>
                <Icon name="caretdown" size={17} color="black" />
            </TouchableOpacity>
            <View style={styles.container}>
                {
                    DRAWERS.map((item, index) =>
                        <ImageBackground
                            key={index}
                            source={{ uri: item.url }}
                            style={styles.img}
                        >
                            <Text style={{ color: '#fff', fontSize: 17 }}>{item.title}</Text>
                        </ImageBackground>
                    )
                }
            </View>
            <View style={{ height: 12 }} />
        </DrawerContentScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        modal: state.auth.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => {
            return dispatch(authActions.modalOpen());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 12
    },
    img: {
        width: 180,
        height: 180,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
});