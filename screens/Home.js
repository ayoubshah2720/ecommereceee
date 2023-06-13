import { Button, StyleSheet, Text, View } from "react-native"
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"
import auth from '@react-native-firebase/auth'
import ProductsPage from './ProductsPage'

export default function Home({ route }) {
    const handleSingout = async () => {
        const isAuth = await auth().signOut()
        navigation.replace('Signin');
        // .then((res) => {
        //     const isSignedOut = res
        //     if (res) {
        //     }
        // }).catch((err) => {
        //     console.log(err)
        // });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Home </Text>
            <Text style={{ fontSize: 20 }}> {route?.params?.email} </Text>
            <Text style={{ fontSize: 20 }}> {route?.params?.userId} </Text>
            <ProductsPage/>
            <Button title="Singout" onPress={handleSingout} />
            <View style={styles.bottomBanner}>
                <BannerAd style={styles.banner} size={BannerAdSize.FULL_BANNER} unitId={TestIds.BANNER} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        // flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 36,
        fontWeight: 'bold'
    },
    bottomBanner: {
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    banner: {
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
})