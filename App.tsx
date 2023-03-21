import React from "react";
import "react-native-gesture-handler";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./src/utils/use-loaded-resources";
import { RootNavigator } from "./src/navigation";


export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator/>
    </SafeAreaProvider>
  );
}
