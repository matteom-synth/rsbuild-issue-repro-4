# Rsbuild issue repro

This repo showcases an issue with rsbuild where [LottiePlayer](https://github.com/LottieFiles/lottie-player) (a web component) works fine in dev, but crashes the app in production. This issue seems to happen only in conjunction with imports from other libraries (e.g., in this repro we're importing also `@datadog/browser-logs`). Removing the additional library imports make the app work fine both in dev and in prod. If I had to guess, this seems to be a minifaction issue?

## Setup

Install the dependencies:

```bash
pnpm install
```

## Reproduce the issue

### 1. Check local build (works fine)

Start the dev server:

```bash
pnpm dev
```
Check the app: you'll see it works fine.

### 2. Check prod build (it's broken)

Build and preview the app for production:

```bash
pnpm build & pnpm preview
```

You'll see it erroring out with `TypeError: Cannot read properties of undefined (reading 'createElement')`. 

### 3. Try removing the other import (works fine)

Try removing the following:

```
import { datadogLogs } from "@datadog/browser-logs";
console.log("@datadog/browser-logs", datadogLogs);
```

And try building and previewing again: you'll see that the app works fine.