import React, { useCallback, RefObject } from 'react';
import useEventListener from './useEventListener';
import noop from 'lodash/noop';

function useOutsideClick(ref: RefObject<HTMLDivElement>, cb: (...args: any[]) => any = noop, dependencies: any[] = []) {
  const handler = (event: React.ChangeEvent<HTMLDivElement>) => {
    if (!ref.current?.contains(event.target)) cb();
  };

  const memoizedHandler = useCallback((e: React.ChangeEvent<HTMLDivElement>) => handler(e), dependencies);

  useEventListener({ eventName: 'click', handler: memoizedHandler });
}

export default useOutsideClick;

/*
  useOutsideClick: Do something when a click is detected outside of an element
  ...
  const wrapperRef = useRef(null);
  const handleClickOutside = (event) => console.log('handling my event!!', event)
  ...
  ...
  useOutsideClick(wrapperRef, handleClickOutside);
*/
