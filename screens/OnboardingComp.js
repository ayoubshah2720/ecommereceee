import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import auth from '@react-native-firebase/auth'
import { useState } from 'react';

export default function OnboardingComp({ navigation }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  auth().onAuthStateChanged((user) => {
    console.log('onBoarding User', user)
    if (user) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  })

  return (
    <Onboarding
      //To handle the navigation to the Homepage if Skip is clicked
      onSkip={() => {
        if (!isUserLoggedIn) {
          navigation.replace("Signin")
        } else {
          navigation.replace("Home")
        }
      }
      }

      //To handle the navigation to the Homepage after Done is clicked
      onDone={() => {
        if (!isUserLoggedIn) {
          navigation.replace("Signin")
        } else {
          navigation.replace("Home")
        }
      }
      }

      pages={[
        {
          backgroundColor: '#33DBFB',
          image: <Image source={require('../assets/images/1.png')} />,
          title: 'Welcome',
          subtitle: 'Welcome to the Ecommerceeeeeeeeeee.',
        },
        {
          backgroundColor: '#FFEFCB',
          image: <Image source={require('../assets/images/2.png')} />,
          title: 'Explore',
          subtitle: 'Explore more products from here.',
        },
        {
          backgroundColor: '#F6ADF9',
          image: <Image source={require('../assets/images/3.png')} />,
          title: 'Buy',
          subtitle: 'Buy the products as you like.',
        },
      ]}
    />
  )
}