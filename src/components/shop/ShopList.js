import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
    Card,
    CardItem,
    Text,
    Body,
    Right
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Actions} from 'react-native-router-flux';
import PreventDoubleClick from '../common/PreventDoubleClick';

const TouchableWithoutFeedback2= PreventDoubleClick(TouchableWithoutFeedback);

class ShopList extends Component {
    state = {
        shopNames: [
            {
                'id': '1',
                'name': '레귤러식스',
                'introduction': '레귤러식스는 강남 N타워 B2에 위치한 복합공간으로, 외식문화를 선도하는 공간입니다',
                'uri': 'https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg'
            },
            {
                'id': '2',
                'name': '평화옥',
                'introduction': '평화옥은 강남 N타워 B2에 위치한 복합공간으로, 외식문화를 선도하는 공간입니다',
                'uri': 'https://cdn.pixabay.com/photo/2014/04/26/00/41/dining-room-332207_1280.jpg'
            },
            {
                'id': '3',
                'name': '조선횟집',
                'introduction': '평화옥은 강남 N타워 B2에 위치한 복합공간으로, 외식문화를 선도하는 공간입니다',
                'uri': 'https://cdn.pixabay.com/photo/2015/06/30/18/35/st-826687_1280.jpg'
            },
            {
                'id': '4',
                'name': '라운지엑스',
                'introduction': '평화옥은 강남 N타워 B2에 위치한 복합공간으로, 외식문화를 선도하는 공간입니다',
                'uri': 'https://cdn.pixabay.com/photo/2016/08/28/22/02/restaurant-1626983_1280.jpg'
            },
            {
                'id': '5',
                'name': '라운지',
                'introduction': '평화옥은 강남 N타워 B2에 위치한 복합공간으로, 외식문화를 선도하는 공간입니다',
                'uri': 'https://cdn.pixabay.com/photo/2014/06/23/19/56/breakfast-room-375489_1280.jpg'
            },
            {
                'id': '6',
                'name': '평화옥',
                'introduction': '평화옥은 강남 N타워 B2에 위치한 복합공간으로, 외식문화를 선도하는 공간입니다',
                'uri': 'https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg'
            },
        ]
    };

    render() {
        return (
            <ScrollView style={styles.scrollViewContainer}>
                {
                    this.state.shopNames.map((item, index) => (
                        <Card transparent key={item.id} style={styles.cardContainer}>
                            <TouchableWithoutFeedback2
                                onPress={() => Actions.homeDetailScreen()}
                            >
                                <View>
                                    <CardItem cardBody>
                                        <Image
                                            source={{uri: item.uri}}
                                            style={{height: 200, flex: 1, borderRadius: 10, margin: 15}}/>
                                    </CardItem>
                                    <CardItem style={styles.cardItem}>
                                        <Body>
                                        <Text>
                                            <Text>{item.name}</Text>
                                        </Text>
                                        </Body>
                                        <Right>
                                            <Icon name="share-alt" style={styles.icon}/>
                                        </Right>
                                    </CardItem>
                                    <CardItem style={styles.cardItem}>
                                        <Body>
                                        <Text>
                                            <Text style={{color: "gray", fontSize: 12}}>{item.introduction}</Text>
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </View>
                            </TouchableWithoutFeedback2>
                        </Card>
                    ))
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: "white"
    },
    cardContainer: {
        paddingBottom: 10
    },
    cardItem: {
        marginBottom: 0,
        paddingBottom: 0
    },
    icon: {
        color: 'black',
        fontSize: 15
    }
});

export default ShopList;
