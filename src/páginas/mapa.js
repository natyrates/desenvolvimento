import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const maps = 'http://api.smileb.com.br/api/TesteDesenvolvimento/DadosMapa'
const { height, width } = Dimensions.get('window');

export default class MapScreen extends Component {
    state = {
        origin: { latitude: 42.3616132, longitude: -71.0672576 },
        destination: { latitude: 42.3730591, longitude: -71.033754 },
    };
    render() {
        return(
            <View style={StyleSheet.cotainer}>
                <MapView>
                    ref={ map => this.MapView = map}
                    style={StyleSheet.map}
                    loadingEnabled={true}
                    toolbarEnabled={true}
                    zoomControlEnable={true}
                </MapView>
                <MapView.Marker>
                   coordinate={this.state.origin}
                   <MapViewDirections>
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={maps}
                    </MapViewDirections> 
                </MapView.Marker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})