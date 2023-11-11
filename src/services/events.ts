/* eslint-disable @typescript-eslint/no-explicit-any */

export const TOAST_MESSAGE_EVENT = "TOAST_MESSAGE_EVENT";

const EVENTS = [TOAST_MESSAGE_EVENT] as const;

type AllowedEvents = (typeof EVENTS)[number];

export function dispatch(eventName: AllowedEvents, data: any) {
  const notificationEvent = new CustomEvent(eventName, {
    detail: data,
  });
  document.dispatchEvent(notificationEvent);
}

export function observe(eventName: AllowedEvents, callback: any) {
  document.addEventListener(eventName, (e: any) => {
    e.stopImmediatePropagation();
    callback(e.detail);
  });
}
