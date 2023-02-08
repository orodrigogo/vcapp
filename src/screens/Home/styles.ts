import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  options: {
    position: 'absolute',
    zIndex: 1,
    right: 24,
    top: 100,
  },
  footer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingBottom: 56,
    paddingTop: 16,
    bottom: 0,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});