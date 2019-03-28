import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ReservationComplete extends Component {

    render() {
        return (
            <Container>
                <View flex style={styles.viewAlign}>
                    <Icon name="check" style={styles.icon}/>
                    <Text style={styles.text}>예약이</Text>
                    <Text style={styles.text}>완료되었습니다.</Text>
                </View>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    viewAlign: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        fontSize:28
    },
    text:{
        fontSize:25
    }
});

export default ReservationComplete;
