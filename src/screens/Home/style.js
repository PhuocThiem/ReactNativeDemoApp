import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContent: {
    borderRadius: 5,
    flex: 1,
  },
  button: {
    backgroundColor: '#43ABC9',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDDDDD',
    borderRadius: 3,
    flexDirection: 'row',
  },
  itemInfo: {
    width: '70%',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
  titleLiner: {
    height: 1,
    backgroundColor: '#f0f8ff',
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  itemAction: {
    marginTop: 5,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemButton: {
    width: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  createModalAction: {
    flexDirection: 'row',
  },
  createModalButton: {
    padding: 10,
    elevation: 2,
    borderRadius: 10,
  },
  buttonSubmit: {
    backgroundColor: '#479d48',
    marginRight: 10,
  },
  buttonClose: {
    backgroundColor: 'grey',
  },
  deleteButton: {
    backgroundColor: '#d54b48',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTextSuccess: {
    color: 'green',
  },
  modalTextError: {
    color: 'red',
  },
  input: {
    height: 30,
    width: 200,
    margin: 5,
    borderBottomWidth: 1,
  },
});
