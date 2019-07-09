import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
export default class DetailScreen extends React.Component {
    state = {
        items: []
    };
    componentDidMount() {
        console.log("cdm props", this.props);
        const { getParam } = this.props.navigation;
        this.getItems(getParam("id"), getParam("socket"));
    }
    getItems(id, socket) {
        console.log("get items", id, socket);
        socket.emit("get-sport", { id: id, meta_id: "tfcygvu672geube" });
        socket.on("get-sport", r => this.setState({ items: r.response }));
    }
    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    padding: 10,
                    justifyContent: "flex-start"
                }}
            >
                <Text>{item}</Text>
            </View>
        );
    };
    _keyExtractor = item => item.toString();
    render() {
        console.log("detail props", this.props);
        console.log("detail state", this.state);
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
