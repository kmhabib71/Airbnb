import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
const SearchResultMaps = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.78825,
          longitude: -16.4324,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            marketid={place.id}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 5, paddingLeft: 5}}>
        <PostCarouselItem post={places[0]} />
      </View>
    </View>
  );
};
export default SearchResultMaps;
