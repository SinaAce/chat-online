import { useState } from "react";
import MainLayout from "./components/MainLayout";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
