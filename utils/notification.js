import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCardsApp:notifications'

const localNotification = {
  title: 'Quiz!',
  body: 'Remember to do a flash cards quiz today!',
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
}

export async function scheduleNotificationForTomorrow() {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY)
  //console.log('data is', data)
  if (data === null) {
    //console.log('data is null')
    const status = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    //console.log('status is', status)
    if (status.status === 'granted') {
      //console.log('granted')
      scheduleNotification()
    }
  } else {
    scheduleNotification()
  }
}

async function scheduleNotification() {
  Notifications.cancelAllScheduledNotificationsAsync()
  let t = new Date()
  t.setDate(t.getDate()+1)
  t.setHours(19)
  t.setMinutes(0)
  t.setSeconds(2)

  
  // for testingpurposes
  //t.setMinutes(t.getMinutes()+1)
  console.log(`Notification scheduled for ${t.toISOString()}`)

  const result = await Notifications.scheduleLocalNotificationAsync(
    localNotification,
    {
      time: t,
      repeat: 'day',
    }
  )
  //console.log('notification result', result)
  AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
}