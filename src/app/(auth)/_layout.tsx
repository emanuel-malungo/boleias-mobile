import { Stack } from "expo-router";

export default function RootLayoutAuth() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
