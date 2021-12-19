import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

/* TODO-LIST:
   1. [x] initialize app (expo), describe features workflow (.30)
   2. [x] add navigation (.30)
   3. [x] search for free RSS feeds api (.15) Done with ==> https://www.dw.com/en/rss/s-31500
   4. [ ] setup context API for manage state and fetch side effect
   5. [ ] RSS feeds list (UI + integration)
   6. [ ] Entries Feed list (UI + integration)
   7. [ ] Entry Details Screen
   8. [ ] Add the name of Feed into header for the list of entries
   9. [ ] Add the number of items in the entries feed list
  10. [ ] add error handling for each data fetch from RSS feed
  11. [ ] add favorites of feeds into local storage
  12. [ ] add unit testing (jest + react-native-testing-library)
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
