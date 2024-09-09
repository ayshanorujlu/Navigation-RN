import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
const AboutPage: React.FC = () => {
   const router = useRouter();
   return (
<View style={{
           flex: 1,
           justifyContent: "center",
           alignItems: "center",
       }}>
<Text>About Page</Text>
<Button title="Go to Main Page" onPress={() => router.push("/")} />
</View>
   );
};
export default AboutPage;