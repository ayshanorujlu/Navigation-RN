import React from "react";
import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
const MainPage: React.FC = () => {
   const router = useRouter();  // Sayfalar arasında yönlendirme için
   return (
<View style={styles.container}>
<Text>Main App</Text>
<Button title="Open About" onPress={() => router.push("/about")} />
<Button title="Open Users" onPress={() => router.push("/users")} />
</View>
   );
};
const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
   },
});
export default MainPage;