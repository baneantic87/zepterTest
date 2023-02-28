import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ColorConstants } from '../helpers/ColorConstants';

const PortfolioScreen = () => {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.textStyle}>This is portfolio screen screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center',
		backgroundColor: ColorConstants.black
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 400,
		color: ColorConstants.white
	}
})

export default PortfolioScreen;