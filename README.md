# Jukerstone React Native SDK

The **Jukerstone React Native SDK** enables access to licensed music videos using ISRC, with real-time playback, token burns, and stream reporting — powered by the Jukerstone protocol.

Built for mobile developers building cross-platform music experiences with token-based economics and playback transparency.

---

## 🎯 What This SDK Does

- ✅ Plays official music videos using just the ISRC
  
- 🔐 Authenticates with your Developer Token (JDT) and Jukerstone ID (JID)
  
- 🔄 Burns a Spin for every playback — reducing token supply
  
- 🎛 Supports playback, seeking, events, and progress tracking
  
- 📡 Automatically syncs MediaSession (iOS only)
  
- 📊 Reports stream data to the Jukerstone Dashboard  

> Currently supported on iOS only. Android support coming soon.

---

## 📦 Installation

Install the SDK and its dependencies:

```bash
npm install jukepod-react-native
# or
yarn add jukepod-react-native
```

Then install iOS native dependencies:

bash
Copy
Edit
```bash
cd ios && pod install && cd ..
```
This package uses react-native-webview and requires CocoaPods.

## 🛠 Requirements
- React Native >= 0.64
- iOS deployment target >= 13.0
- Node >= 16
- Xcode and CocoaPods for iOS builds

You will also need:

- A Jukerstone ID (JID)
- A Jukerstone Developer Token (JDT)

👉 Get both at jukerstone.com/dashboard

## 🚀 Quickstart
tsx
Copy
Edit

```bash
import React from "react";
import {
  JukerstoneSDK,
  handleSpin,
  handlePause,
  handleStop,
  handleResume,
  handleSeek,
  onProgress,
  onPrevious,
  onNext,
  onEnd,
} from "jukepod-react-native";

const App = () => {
  return (
    <JukerstoneSDK>
      {/* Your app content */}
    </JukerstoneSDK>
  );
};
```

## 🎮 Playback Controls
ts
Copy
Edit
```bash
handleSpin();      // Play now (burns a Spin)
handlePause();     // Pause playback
handleResume();    // Resume playback
handleStop();      // Stop playback
handleSeek(0.5);   // Seek to 50%
```

## 📡 Progress & Events
ts
Copy
Edit
```bash
const progress = onProgress();
// progress: { currentTime, duration, percentage }

onEnd();      // Callback for end of playback
onNext();     // Callback for next track
onPrevious(); // Callback for previous track
```

## 🔉 MediaSession Support (iOS)
On iOS, playback integrates with native controls:

- 🎵 Displays title, artist, and album artwork

- 🎧 Supports AirPods, Bluetooth, CarPlay

- 🎛 Enables native control center playback

## 🔥 Why Spins?
Spins are the protocol-level unit of access.
Every time a video is played:

- 🔥 A Spin is burned

- 📉 Supply decreases

- 📈 Value increases

Apps contribute to the protocol by consuming tokens.

You can:

- 💼 Hold Spins for your users or app

- 🏦 Pre-fund access via the dashboard

- 📊 Monitor usage and burn in real time

- 📊 Dashboard & Analytics
Log into your Jukerstone Dashboard to:

- 🔥 View playback burn logs

- 🎥 Inspect per-track performance

- 🧠 Analyze session trends and ISRCs

- 🏆 Track global usage leaderboards

- 🧾 Notes
Only iOS is supported at this time

Android is in progress and coming soon

> No media hosting required — Jukerstone handles rights, metadata, and delivery

- 🪙 Buy Tokens
Spins are available via:

- 🔄 Direct allocation

- 🤝 Partnership packages

- 🧑‍💻 Developer purchase program

>Early builders receive discounts.
> Treasury-backed with transparent burn economics.

> 👉 Get started at jukerstone.com

---

## 🧩 SDK Compatibility

- ✅ Native Swift (UIKit)  
- ✅ SwiftUI-ready  
- ✅ React Native (via bridge – available on request)  

---

## 🧠 Build with Confidence

This SDK powers video playback in production across:

- 🛍 Retail environments  
- 🏋️‍♀️ Gyms and fitness studios  
- 🎧 Music-facing mobile apps  
- 🖥 Interactive displays and embedded devices  

> 📦 Weekly updates  
> 🎵 Real content  
> 🚚 Shipping software  

---

## 📣 Need Help?

- Visit your dashboard: [jukerstone.com/dashboard](https://jukerstone.com/dashboard)  
- Reach out via the developer portal or Discord  
- Questions? We're here to support you  

---

© Jukerstone Ltd. All rights reserved.
