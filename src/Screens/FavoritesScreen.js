import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ColorConstants } from '../helpers/ColorConstants';

const FavoritesSreen = () => {
	return (
		<View style={style.mainContainer}>
			<Text style={styles.textStyle}>This is favorites screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 400,
		color: ColorConstants.black
	}
})

export default FavoritesSreen;