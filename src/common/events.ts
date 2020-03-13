const events = new Map<string, Function[]>();

export class Events {
  on(event: string, listener: Function) {
    let listeners = events.get(event);
    if (listeners) {
      this.off(event, listener);
      listeners.push(listener);
    } else {
      listeners = [listener];
      events.set(event, listeners);
    }
  }
  listeners(event: string) {
    return events.get(event) || [];
  }
  off(event: string, listener: Function) {
    let listeners = events.get(event);
    if (listeners) {
      const index = listeners.findIndex(f => f === listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
  trigger(event: string, ...args: any[]) {
    let listeners = events.get(event);
    if (listeners) {
      listeners.forEach(listener => {
        listener.call(this, ...args);
      });
    }
  }
}

export const EventsCenter = new Events();
