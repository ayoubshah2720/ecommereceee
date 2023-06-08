import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';

export default function OnboardingComp({navigation}){
  return (
    <Onboarding
      //To handle the navigation to the Homepage if Skip is clicked
      onSkip={() => navigation.replace("Signin")}

      //To handle the navigation to the Homepage after Done is clicked
      onDone={() => navigation.replace("Signin")}

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