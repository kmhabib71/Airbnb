import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});
export default styles;
