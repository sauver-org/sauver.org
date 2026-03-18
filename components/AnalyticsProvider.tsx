import { Suspense, type ReactNode } from "react";
import { FirebaseAnalyticsWatcher } from "./FirebaseAnalyticsWatcher";

type AnalyticsProviderProps = {
  children: ReactNode;
};

export default function AnalyticsProvider({
  children,
}: AnalyticsProviderProps) {
  return (
    <>
      <Suspense>
        {/*
          The watcher is wrapped in Suspense, so it doesn't block
          the initial server render. It will run on the client side.
        */}
        <FirebaseAnalyticsWatcher />
      </Suspense>
      {children}
    </>
  );
}
