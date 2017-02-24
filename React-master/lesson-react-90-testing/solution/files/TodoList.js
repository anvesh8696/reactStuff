/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';

export default class TodoList extends Component {

    dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    constructor(props) {
        super(props);
        this.state = {
            data: ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 5', 'Todo 6', 'Todo 9'],
            text: ''
        };
    }

    renderRows() {
        return (
            <View>
                {this.state.data.map((item, idx) => <Text key={idx}>{item}</Text>)}
            </View>
        )
    }

    _onPressButton(rowData, rowID, sectionID) {
        let data = this.state.data;
        data.splice(sectionID, 1);
        this.setState({
            data: data
        });
    }

    renderRow(rowData, rowID, sectionID) {
        return (
            <View style={styles.rowContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.text}>
                        {rowData}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity
                        onPress={() => this._onPressButton(rowData,rowID, sectionID)}>
                        <Image source={require('./delete.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.welcome}>
                        React-Native Todo
                    </Text>
                </View>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this.submitEdit.bind(this)}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Enter TODO text here..."
                    value={this.state.text}
                />
                <ListView
                    dataSource={this.dataSource.cloneWithRows(this.state.data)}
                    renderRow={this.renderRow.bind(this)} />
            </View>
        );
    }

    submitEdit(event) {
        let data = this.state.data;
        let text = event.nativeEvent.text;
        this.setState({
            data: data.concat(text),
            text: ''
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20, paddingLeft: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#666666',
        fontWeight: 'bold'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    navbar: {
        paddingTop: 17,
        height: 70
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    leftContainer: {
        flex: 20
    },
    rightContainer: {
        flex: 1
    }
});