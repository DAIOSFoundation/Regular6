import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,

} from 'react-native';
import {Button} from 'native-base';
class MyPageReservationConfirm extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.cardContainer}>

                    {/*ㅇㅖ약확인*/}
                    <View style={styles.card}>
                        <Text style={styles.reservationTitle}>예약자_01034568976</Text>

                        <View style={styles.cardContent}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardLeftLabel}>장소</Text>
                                <Text style={styles.reservationLabel}>평화옥</Text>
                            </View>

                            <View style={styles.cardRight}>
                                <Text style={styles.cardLeftLabel}>날짜</Text>
                                <Text style={styles.reservationLabel}>2019.05.10</Text>
                            </View>
                        </View>

                        <View style={styles.cardContent}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardLeftLabel}>시간</Text>
                                <Text style={styles.reservationLabel}>17:00</Text>
                            </View>

                            <View style={styles.cardRight}>
                                <Text style={styles.cardLeftLabel}>인원</Text>
                                <Text style={styles.reservationLabel}>어른 7</Text>
                            </View>
                        </View>

                        <View style={styles.cardFooter}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardLeftReqLabel}>요청사항</Text>
                                <Text style={styles.reservationLabel}>룸으로 예약</Text>
                            </View>
                        </View>


                        <View style={styles.cardFooterButton}>
                            <Button bordered block style={styles.reservationEditBtn}>
                                <Text style={styles.reservationEditText}>예약수정</Text>
                            </Button>

                            <Button bordered block style={styles.reservationCancelBtn}>
                                <Text style={styles.reservationCancelText}>예약취소</Text>
                            </Button>
                        </View>
                    </View>


                    <View style={styles.card}>
                        <Text style={styles.reservationTitle}>예약자_01034568976</Text>

                        <View style={styles.cardContent}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardLeftLabel}>장소</Text>
                                <Text style={styles.reservationLabel}>평화옥</Text>
                            </View>

                            <View style={styles.cardRight}>
                                <Text style={styles.cardLeftLabel}>날짜</Text>
                                <Text style={styles.reservationLabel}>2019.05.10</Text>
                            </View>
                        </View>

                        <View style={styles.cardContent}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardLeftLabel}>시간</Text>
                                <Text style={styles.reservationLabel}>17:00</Text>
                            </View>

                            <View style={styles.cardRight}>
                                <Text style={styles.cardLeftLabel}>인원</Text>
                                <Text style={styles.reservationLabel}>어른 7</Text>
                            </View>
                        </View>

                        <View style={styles.cardFooter}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardLeftReqLabel}>요청사항</Text>
                                <Text style={styles.reservationLabel}>룸으로 예약</Text>
                            </View>
                        </View>


                        <View style={styles.cardFooterButton}>
                            <Button bordered block style={styles.reservationEditBtn}>
                                <Text style={styles.reservationEditText}>예약수정</Text>
                            </Button>

                            <Button bordered block style={styles.reservationCancelBtn}>
                                <Text style={styles.reservationCancelText}>예약취소</Text>
                            </Button>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    /******** card **************/
    cardContainer: {
        backgroundColor: "#d8d8d8",
        paddingBottom: 300,
    },
    card: {
        // marginVertical: 8,
        // flexBasis: '47%',
        // marginHorizontal: 16,
        paddingHorizontal: 16,
        marginTop: 10,
        paddingTop: 16,
        paddingBottom: 24,
        backgroundColor: "#ffffff",
        // borderTopWidth: 1,
        // borderTopColor: "#d8d8d8",
        // borderBottomWidth: 1,
        // borderBottomColor: "#d8d8d8",
    },
    cardContent: {
        // marginHorizontal: 16,
        // marginTop: 10,
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: "#ffffff",
        // borderTopWidth: 1,
        // borderTopColor: "#d8d8d8",
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
        flexDirection: 'row',
    },
    cardFooter: {
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        // justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 16,
        // paddingBottom: 25,
        // paddingHorizontal: 16,
        // borderBottomLeftRadius: 1,
        // borderBottomRightRadius: 1,
    },
    cardFooterButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    cardLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 8,
        // backgroundColor: 'green'
    },
    cardRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        paddingLeft: 16,
        // paddingRight: 24,
        // backgroundColor: 'red',
    },
    cardLeftLabel: {
        marginRight: 38,

    },
    cardLeftReqLabel: {
        marginRight: 14,

    },
    reservationEditBtn: {
        backgroundColor: "#ffffff",
        // borderColor: 'black',
        width: 80,
        height: 40,
        borderRadius: 20,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        marginRight: 8,
    },
    reservationCancelBtn: {
        backgroundColor: "#ffffff",
        // borderColor: 'black',
        width: 80,
        height: 40,
        borderRadius: 20,
        borderColor: '#d8d8d8',
        borderWidth: 1,
    },

    reservationEditText: {
        textAlign: 'center',
        fontSize: 14,
        color: "#000000",
    },
    reservationCancelText: {
        textAlign: 'center',
        fontSize: 14,
        color: "#000000",
    },

    /******** reservation bar ******************/
    reservationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    reservationSection: {
        // justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    reservationLabel: {
        marginLeft: 8,
        // alignSelf: 'flex-end',
        // justifyContent: 'center',
    },
    reservationTitle: {
        fontSize: 16,
        marginLeft: 8,
        color: "#000000",
        fontWeight: '600',
    }
});
export default MyPageReservationConfirm;
