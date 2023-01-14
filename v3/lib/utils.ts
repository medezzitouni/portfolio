import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// import { z, ZodTypeAny } from 'zod';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};


export const setupScrolling = () => {
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  function preventDefault(e: any) {
    e.preventDefault();
  }

function preventDefaultForScrollKeys(e: any) {
  // @ts-ignore
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  // @ts-ignore
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
// // @ts-ignore

var wheelEvent = typeof window === "object" && 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    // @ts-ignore
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    // @ts-ignore
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  return [disableScroll, enableScroll];
}

