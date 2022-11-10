import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import {BackIcon, CustomText,Button} from '../../../components/Common';
import CheckBox from '@react-native-community/checkbox';
import {useAppNavigation} from '../../../navigations/hook';
const Symptoms = () => {
  const initialState = {
    react: false,
    next: false,
    vue: false,
    angular: false,
  };

  const navigation = useAppNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [state, setState] = React.useState(initialState);
  const [toggleButton, setToggleButton] = React.useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text: React.SetStateAction<string>) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item: {id: string; title: string}) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackIcon
        onPress={() => {
          console.log();
        }}
        style={styles.backButton}
      />
      <View style={styles.content}>
        <View>
          <CustomText type="medium" style={styles.title}>
            Symptoms
          </CustomText>
          <View style={styles.mainContent}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Search Symptoms"
            />
            {/* <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
          </View>
          <View>
            <View style={styles.mainContentTitle}></View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                // onFillColor="#0094DE"
                value={state.react}
                onValueChange={value =>
                  setState({
                    ...state,
                    react: value,
                  })
                }
              />
              <Text>Fever</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.next}
                onValueChange={value =>
                  setState({
                    ...state,
                    next: value,
                  })
                }
              />
              <Text>Headache</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.vue}
                onValueChange={value =>
                  setState({
                    ...state,
                    vue: value,
                  })
                }
              />
              <Text>Back Pain</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Knee Pains</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Diabetics</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>General</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Body Pain</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Shoulder Pain</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Leg Pain</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Neck Pain</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Internal Pain</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={state.angular}
                onValueChange={value =>
                  setState({
                    ...state,
                    angular: value,
                  })
                }
              />
              <Text>Other</Text>
            </View>
          </View>
          <View>
            <Button label="Next" onPress={() => onHandleNavigate('symptoms')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Symptoms;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
