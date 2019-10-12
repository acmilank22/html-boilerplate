function createNotification({
  title,
  onunsupport,
  ondenied,
  onshow,
  onclick,
  onclose,
  onerror,
  ...rest
}) {
  const { Notification } = window;
  if (typeof Notification === 'undefined') {
    onunsupport();
    throw new Error('Your browser does not support Notifications API');
  }

  const func = () => {
    const notification = new Notification(title, { ...rest });
    notification.onshow = onshow;
    notification.onclick = onclick;
    notification.onclose = onclose;
    notification.onerror = onerror;
  };

  const { permission } = Notification;
  if (permission === 'granted') {
    func();
  } else if (permission === 'denied' || permission === 'default') {
    Notification.requestPermission().then(res => {
      if (res === 'granted') {
        func();
      } else if (res === 'denied') {
        typeof ondenied === 'function' && ondenied();
      } else if (res === 'default') {
        console.log('The permission request was dismissed.');
      }
    });
  }
}

createNotification({
  title: 'hello',
  body: 'content',
  tag: 'a00',
  renotify: true,
  ondenied: () => {
    console.log('ondenied');
  },
  onclick: () => {
    console.log('onclick');
  },
  onclose: () => {
    createNotification({
      title: 'hello1',
      body: 'content',
      tag: 'b00',
      renotify: true,
      ondenied: () => {
        console.log('ondenied');
      },
      onclick: () => {
        console.log('onclick');
      }
    });
  }
});

setTimeout(() => {}, 6000);
