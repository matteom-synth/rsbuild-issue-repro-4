import "./App.css";

import "@lottiefiles/lottie-player";

// Just an example of the imports that break lottie-player in prod.
// The console.log doesn't do anything, is just to ensure the import is not 
// removed by tree-shaking.
// If you remove the two following lines, lottie-player will work in prod.
import { datadogLogs } from "@datadog/browser-logs";
console.log("@datadog/browser-logs", datadogLogs);

const App = () => {
  return (
    <div className="content">
      <lottie-player
        autoplay
        controls
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ width: 320 }}
      ></lottie-player>
    </div>
  );
};

export default App;
