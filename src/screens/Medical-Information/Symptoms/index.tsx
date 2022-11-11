import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {BackIcon, CustomText, Button} from '../../../components/Common';
import CheckBox from '@react-native-community/checkbox';
import {useAppNavigation} from '../../../navigations/hook';
import Feather from 'react-native-vector-icons/Feather';
const Symptoms = () => {
  const initialState = {
    Fever: false,
    Headache: false,
    BackPain: false,
    KneePains: false,
    Diabetics: false,
    General: false,
    BodyPain: false,
    ShoulderPain: false,
    LegPain: false,
    NeckPain: false,
    InternalPain: false,
    Other: false,
  };

  const navigation = useAppNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [state, setState] = React.useState(initialState);
  const [toggleButton, setToggleButton] = React.useState(false);
  const [check, setCheck] = React.useState(false);
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
      <View style={styles.uperScroll}>
        <View style={styles.containerMain}>
          <BackIcon
            onPress={() => {
              console.log();
            }}
            style={styles.backButton}
          />
        </View>

        <View>
          <CustomText type="medium" style={styles.title}>
            Symptoms
          </CustomText>
        </View>
        <View style={styles.containerSearch}>
          <View style={styles.serachInputStyle}>
            <Feather
              name="search"
              size={20}
              color="#808080"
              style={styles.iconInputStyle}
            />
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Search Symptoms"
              placeholderTextColor="#808080"
            />
          </View>
          {/* <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
        </View>
      </View>
      <View style={styles.selctionContainer}>
        <View style={styles.mainContentTitle}>
          <Text style={styles.subtitle}>Select Symptoms to add</Text>
        </View>
        <ScrollView     showsHorizontalScrollIndicator={true} style={styles.containerCheckbox}>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.Fever}
              onValueChange={value =>
                setState({
                  ...state,
                  Fever: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Fever</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.Headache}
              onValueChange={value =>
                setState({
                  ...state,
                  Headache: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Headache</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.BackPain}
              onValueChange={value =>
                setState({
                  ...state,
                  BackPain: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Back Pain</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.KneePains}
              onValueChange={value =>
                setState({
                  ...state,
                  KneePains: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Knee Pains</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.Diabetics}
              onValueChange={value =>
                setState({
                  ...state,
                  Diabetics: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Diabetics</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.General}
              onValueChange={value =>
                setState({
                  ...state,
                  General: value,
                })
              }
            />
            <Text style={styles.checkboxText}>General</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.BodyPain}
              onValueChange={value =>
                setState({
                  ...state,
                  BodyPain: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Body Pain</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.ShoulderPain}
              onValueChange={value =>
                setState({
                  ...state,
                  ShoulderPain: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Shoulder Pain</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.LegPain}
              onValueChange={value =>
                setState({
                  ...state,
                  LegPain: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Leg Pain</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.NeckPain}
              onValueChange={value =>
                setState({
                  ...state,
                  NeckPain: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Neck Pain</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.InternalPain}
              onValueChange={value =>
                setState({
                  ...state,
                  InternalPain: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Internal Pain</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              tintColors={{false: '#BABABA'}}
              onFillColor="#0094DE"
              onCheckColor={'#0094DE'}
              onTintColor={'#0094DE'}
              value={state.Other}
              onValueChange={value =>
                setState({
                  ...state,
                  Other: value,
                })
              }
            />
            <Text style={styles.checkboxText}>Other</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.ButtonContainer}>
        <Button label="Next" onPress={() => onHandleNavigate('symptoms')} />
      </View>
    </SafeAreaView>
  );
};

export default Symptoms;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
