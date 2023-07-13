import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useSyncExternalStore } from 'react';

export const store = create(
  persist(
    (set: any) => ({
      menu: true,
      setMenu: (value: boolean) => set({ menu: value }),
    }),
    { name: 'storage' }
  )
);

// Sidebar hide/unhide
// if im using zustand for state management to hide/unhide sidebar will error cause zustand store data to localstorage and SSR cannot access client side
type StateSetter<State> = React.Dispatch<React.SetStateAction<State>>;

export function createSource<DefaultValue>(defaultValue: DefaultValue) {
  const store = createStore(defaultValue);

  return () => {
    const state = useSyncExternalStore(store.subscribe, store.get);

    return [state, store.set] as [DefaultValue, StateSetter<DefaultValue>]
  };
}

function createStore<DefaultValue>(defaultValue: DefaultValue) {
  let store = defaultValue;

  const subscribers = new Set<StateSetter<DefaultValue>>();

  function subscribe(subscriberFn: StateSetter<DefaultValue>) {
    subscribers.add(subscriberFn);

    return () => subscribers.delete(subscriberFn);
  }

  function setter(newValue: DefaultValue) {
    if (typeof newValue === 'function') {
      store = newValue(store);
    } else {
      store = newValue;
    }

    subscribers.forEach(fn => fn(store));
  }

  return {
    get: () => store,
    set: setter,
    subscribe,
  };
}

export const useSidebar = createSource(true)
