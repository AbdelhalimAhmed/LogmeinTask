import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FeedsProvider } from './context/feeds/FeedsProvider';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

/* TODO-LIST:
   1. [x] initialize app (expo), describe features workflow (.30)
   2. [x] add navigation (.30)
   3. [x] search for free RSS feeds api (.15) Done with ==> https://www.dw.com/en/rss/s-31500
   4. [x] setup context API for manage state and fetch side effect (.30)
   5. [x] RSS feeds list = categoryFeeds (UI + integration) (.30)
   6. [x] news Feed list (UI + integration) (.45)
   7. [x] Entry Details Screen (.05)
   8. [x] Add the name of Feed into header for the list of news (.15)
   9. [x] Add the number of items in the news feed list (including in above task)
  10. [x] add error handling for each data fetch from RSS feed (already done while adding context)
  11. [x] add favorites of feeds into local storage (.45)
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
        <FeedsProvider>
          <Navigation colorScheme={colorScheme} />
        </FeedsProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
