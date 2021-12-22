import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
    const [renderResult, setRenderResult] = useState(true);

	const uploadDocument = async () => {
		let result = await DocumentPicker.pick({
			type: [DocumentPicker.types.allFiles]
		});
		console.log('picker result', result);
        setRenderResult(JSON.parse(JSON.stringify(result[0].uri)));
	};

	const { container, button } = Styles;
	return (
		<View style={container}>
			<TouchableOpacity style={button} onPress={uploadDocument}>
				<Text>Upload Document</Text>
			</TouchableOpacity>
            <View style={{marginTop: 50}}>
                <Text>File Path: </Text>
                <Text style={{marginTop: 20, color: 'black', fontSize: 16}}>{renderResult}</Text>
            </View>
		</View>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 50
	},
	button: {
		height: 50,
		width: 300,
		borderRadius: 10,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default App;
