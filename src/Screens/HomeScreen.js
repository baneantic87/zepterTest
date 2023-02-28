import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { ColorConstants } from '../helpers/ColorConstants';
import axios from 'axios'

const uri = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'

const HomeScreen = () => {
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(uri, { headers: { "Content-Type": "application/json" } })
                setCryptoData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const renderBilions = (number) => {
        return (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainerStyle}>
                <Image style={styles.coinImageStyle} source={{ uri: item.image }} />
                <View style={{ flex: 1 }}>
                    <View style={styles.innerContainerStyle}>
                        <Text style={styles.textBold}>{item.name}</Text>
                        <Text style={styles.textStyle}>${item.current_price}</Text>
                    </View>
                    <View style={styles.innerContainerStyle}>
                        <View style={styles.innerLeftContainer}>
                            <View style={styles.textBoxGray}>
                                <Text style={[styles.textStyle, styles.textAligns]}>{item.market_cap_rank}</Text>
                            </View>
                            <Text style={styles.textStyle}>{item.symbol.toUpperCase()}</Text>
                            {item.price_change_percentage_24h > 0 ? <Image style={styles.imageStyle} source={require('../../assets/icons/upArrow.png')} /> : <Image style={styles.imageStyle} source={require('../../assets/icons/downArrow.png')} />}
                            <Text style={styles.textStyle}>{item.price_change_percentage_24h}%</Text>
                        </View>
                        <View style={styles.rightInnerContainer}>
                            <Text style={styles.textStyle}>MCap {renderBilions(item.market_cap)}</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {
                cryptoData.length ?
                    <FlatList
                        data={cryptoData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                    :
                    <ActivityIndicator size={'large'} color={ColorConstants.white} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: ColorConstants.black
    },
    itemContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    coinImageStyle: {
        width: 60, height: 60
    },
    innerContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    imageStyle: {
        width: 12,
        height: 12
    },
    textStyle: {
        color: ColorConstants.white,
        fontSize: 14
    },
    innerLeftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textBold: {
        fontWeight: '800',
        fontSize: 16,
        color: ColorConstants.white
    },
    textAligns: {
        alignSelf: 'center',
        padding: 1
    },
    textBoxGray: {
        width: 18,
        height: 18,
        backgroundColor: 'gray',
        borderRadius: 6
    },
    rightInnerContainer: {
        flex: 1,
        alignItems: 'flex-end'
    }
})

export default HomeScreen;



