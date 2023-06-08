import { StyleSheet, Text, View } from "react-native"
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Home </Text>
            <BannerAd style={{bottom:0}} size={BannerAdSize.FULL_BANNER} unitId={TestIds.BANNER} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
    },
    title: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        fontSize:36,
        fontWeight:'bold'
}
})