import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
const SearchResultMaps = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flatList = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const map = useRef();
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  const width = useWindowDimensions().width;
  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index: index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
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
            key={place.id}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          paddingLeft: 5,
        }}>
        <FlatList
          ref={flatList}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};
export default SearchResultMaps;
