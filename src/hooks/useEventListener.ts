/* eslint-disable consistent-return */
import React, { useRef, useEffect } from 'react';

export interface UseEventListenerProps<T extends HTMLElement = HTMLElement> {
  eventName: keyof HTMLElementEventMap;
  element?: T;
  handler: (evt: React.ChangeEvent<HTMLDivElement>) => void;
}

function useEventListener<T extends HTMLElement = HTMLElement>(p: UseEventListenerProps<T>) {
  const { eventName = '', handler, element = window } = p;
  const savedHandler = useRef<typeof handler>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    // @ts-expect-error using 3rd party lib/function - Cannot invoke an object which is possibly undefined
    const eventListener = (event: Event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
}

export default useEventListener;

// https://usehooks.com/useEventListener/
