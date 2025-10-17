import { Text, View } from "react-native";
import Splash from "@/components/layout/Splash";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Splash />
    </View>
  );
}
