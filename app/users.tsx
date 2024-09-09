import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
const UserPage: React.FC = () => {
   const router = useRouter();
   return (
<View style={{
           flex: 1,
           justifyContent: "center",
           alignItems: "center",
       }}>
<Text>User Page</Text>
<Button title="Go Back to Main" onPress={() => router.push("/")} />
</View>
   );
}
export default UserPage;