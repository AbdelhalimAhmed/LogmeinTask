import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

/* TODO-LIST:
   1. [x] initialize app (expo), describe features workflow (.30)
   2. [ ] add navigation
   3. [ ] search for free RSS feeds api
   4. [ ] RSS feeds list (UI + integration)
   5. [ ] Entries Feed list (UI + integration)
   6. [ ] Entry Details Screen
   7. [ ] Add the name of Feed into header for the list of entries
   8. [ ] Add the number of items in the entries feed list
   9. [ ] add error handling for each data fetch from RSS feed
  10. [ ] add favorites of feeds into local storage
  11. [ ] add unit testing (jest + react-native-testing-library)
*/

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
