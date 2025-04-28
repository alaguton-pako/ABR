import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistGate } from "redux-persist/integration/react";
import PersistentAudioPlayer from "@/store/PersistentAudioPlayer";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={() => {
          console.log("Rehydrating state...");
        }}
      >
        <QueryClientProvider client={queryClient}>
          {children}

          <PersistentAudioPlayer />
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

{
  /* <ReactQueryDevtools initialIsOpen={false} /> */
}
