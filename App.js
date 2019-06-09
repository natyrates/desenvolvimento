import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'; 
import {home, recebidos, mapa } from "./src/páginas";
import OneSignal from 'react-native-onesignal';
import Ionicons from "react-native-vector-icons"

const TabNavigation = createMaterialTopTabNavigator( //ABAS NO TOPO
  {
    Recebidos: recebidos,
    Mapa: mapa,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
      },
      activeBackgroundColor: '#FFF',
    }
  }
)

const TabNavigation = createBottomTabNavigator ( //ABAS NO RODAPÉ
  {
    Home: home,
    Leilao: leilao,
    Calendario: calendario,
    Pesquisar: pesquisar,
    Notificacao: notificacao,
    Menu: menu,
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal }) => {
        const {routName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        if (routName === 'Home'){
          iconName = 'home_menu_icon.png';
        }else if (routName === 'Leilao'){
          iconName = 'leipesquisar_icone.png';
        }else if(routName === 'Calendario'){
          iconName = 'calendar_menu_icon.png';
        }else if(routName === 'Pesquisar'){
          iconName = 'pesquisar_icone.png';
        }else if(routName === 'Notificacao'){
          iconName = 'bell_menu_icon.png';
        }else if(routName === 'Menu'){
          iconName = 'more_menu_icon.png';
        }

        return <IconComponent name={iconName} size={20}/>
      }
    })
  }
);

export default createAppContainer (TabNavigation);

export default class App extends Component {
  componentDidMount() { //PUSH NOTIFICATION
    OneSignal.init('f9eac7f9-f9b6-46ae-bfd3-7b59b8ea19cb');
    OneSignal.addEventListener('received', this.receivedPush);
    OneSignal.addEventListener('opened', this.openedPush);
    OneSignal.addEventListener('ids', this.idsPush);
  }
  receivedPush(push) {
    console.log('Received Push: ${push}');
  }
  openedPush(push) {
    console.log('Opened Push: ${push}');
  }
  idsPush(push) {
    console.log('IDS Push: ${push}');
  }

  render() {
    return(
      <View style={{marginTop: 20}}>
        <Image source={required('../image/header_bg.png')}/>
      </View>
    )
  }
}
