/*
 * MyTh Ahmed Faiz Copyright © 2016-2022 All rights reserved.
 * Email: mythpe@gmail.com
 * Mobile: +966590470092
 * Website: https://4myth.com
 */
import * as Application from 'expo-application'
import * as Updates from 'expo-updates'
import * as Network from 'expo-network'
import { Platform } from 'react-native'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CallbackWithResult, Callback } from '@react-native-async-storage/async-storage/src/types'
import { UrlType } from './types'

const myth = {
  UrlGroup: (group?: UrlType) => (segments?: UrlType, parent?: UrlType) => ((parent ?? '') + (parent && group ? '/' : '')) + (group ?? '') + ((group && segments ? '/' : '') + (segments ?? '')),
  hasUpdates: async () => {
    if (process.env.NODE_ENV !== 'production') {
      return !1
    }
    let result = !1
    let isAvailable = !1
    try {
      const update = await Updates.checkForUpdateAsync()
      isAvailable = update.isAvailable
      if (isAvailable) {
        result = !0
        await Updates.fetchUpdateAsync()
      }
    } catch (e) {
      console.warn('Check Updates: ', e)
    } finally {
      isAvailable && await Updates.reloadAsync()
    }

    return result
  },
  checkNetwork: async () => (await Network.getNetworkStateAsync())?.isInternetReachable === !0,
  StoreUrl: () => {
    return Platform.select({
      ios: Constants.ios.appStoreUrl ?? null,
      android: Constants.android.playStoreUrl ?? null,
      default: null
    })
  },
  AppVersion: () => Application.nativeApplicationVersion,
  GetMMSSFromMillis (millis: any) {
    const totalSeconds = millis / 1000
    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor(totalSeconds / 60)

    const padWithZero = (number: any) => {
      const string = number.toString()
      if (number < 10) {
        return '0' + string
      }
      return string
    }
    return padWithZero(minutes) + ':' + padWithZero(seconds)
  },
  StyleFromProps (props: Record<string, any> = {}, mergeStyle?: Record<string, any>): Record<string, any> {
    const style: Record<string, any> = { ...(mergeStyle || {}) }

    const classes = [
      { prop: 'flex', style: 'flex' },
      { prop: 'justifyContent', style: 'justifyContent' },
      { prop: 'alignContent', style: 'alignContent' },
      { prop: 'alignItems', style: 'alignItems' },
      { prop: 'alignSelf', style: 'alignSelf' },
      { prop: 'ms', style: 'marginStart' },
      { prop: 'me', style: 'marginEnd' },
      { prop: 'mt', style: 'marginTop' },
      { prop: 'ml', style: 'marginLeft' },
      { prop: 'mb', style: 'marginBottom' },
      { prop: 'mr', style: 'marginRight' },
      { prop: 'mx', style: 'marginHorizontal' },
      { prop: 'my', style: 'marginVertical' },
      { prop: 'ma', style: 'margin' },
      { prop: 'ps', style: 'paddingStart' },
      { prop: 'pe', style: 'paddingEnd' },
      { prop: 'pt', style: 'paddingTop' },
      { prop: 'pl', style: 'paddingLeft' },
      { prop: 'pb', style: 'paddingBottom' },
      { prop: 'pr', style: 'paddingRight' },
      { prop: 'px', style: 'paddingHorizontal' },
      { prop: 'py', style: 'paddingVertical' },
      { prop: 'pa', style: 'padding' },
      { prop: 'bg', style: 'backgroundColor' },
      { prop: 'height', style: 'height' },
      { prop: 'width', style: 'width' }
    ]
    classes.forEach((e) => {
      if (props[e.prop]) {
        style[e.style] = props[e.prop]
      }
    })
    return style
  },
  _errorMessage: (errors: Record<string, string[]> | undefined = {}, name: string | number | null | undefined) => errors && name ? (errors[name] ? errors[name][0] : undefined) : undefined,
  storage: {
    set: async (key: string, value: string, callback?: Callback): Promise<void> => AsyncStorage.setItem(key, value, callback),
    get: async (key: string, callback?: CallbackWithResult<string>) => AsyncStorage.getItem(key, callback),
    remove: async (key: string, callback?: Callback): Promise<void> => AsyncStorage.removeItem(key, callback)
  }
}

export default myth
