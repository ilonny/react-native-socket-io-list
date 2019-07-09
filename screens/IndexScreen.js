import React from "react";
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableOpacity
} from "react-native";
import SocketIOClient from "socket.io-client";
export default class IndexScreen extends React.Component {
    state = {
        items: []
    };
    componentDidMount() {
        this.socket = SocketIOClient("http://localhost:19002");
        this.socket.on("sport-list", items => this.setState({ items }));
    }
    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {id: item.id, socket: this.socket})}>
                <View
                    style={{
                        flex: 1,
                        padding: 10,
                        justifyContent: "flex-start"
                    }}
                >
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    _keyExtractor = item => item.id.toString();
    render() {
        console.log("this state", this.state);
        console.log("this props", this.props);
        const { items } = this.state;
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                {items.length ? (
                    <FlatList
                        data={this.state.items}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                ) : (
                    <ActivityIndicator />
                )}
            </View>
        );
    }
}
