import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';
const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      {/* Row 1: adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: 'grey'}}>Ages 13 or above</Text>
        </View>
        {/* Buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{color: 'grey', fontSize: 20}}>-</Text>
          </Pressable>
          {/* Value */}
          <Text style={{marginHorizontal: 20, fontSize: 20}}>{adults}</Text>
          {/* + */}
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{color: 'grey', fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 1: adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: 'grey'}}>Ages 2-12</Text>
        </View>
        {/* Buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={{color: 'grey', fontSize: 20}}>-</Text>
          </Pressable>
          {/* Value */}
          <Text style={{marginHorizontal: 20, fontSize: 20}}>{children}</Text>
          {/* + */}
          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={{color: 'grey', fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: 'grey'}}>Under 2</Text>
        </View>
        {/* Buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={{color: 'grey', fontSize: 20}}>-</Text>
          </Pressable>
          {/* Value */}
          <Text style={{marginHorizontal: 20, fontSize: 20}}>{infants}</Text>
          {/* + */}
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={{color: 'grey', fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default GuestsScreen;
