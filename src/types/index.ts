import { FlexStyle, ViewStyle } from 'react-native'

export type UrlType = string | number | boolean

export type FlexPropsStyle = {
  flex?: FlexStyle['flex']
  justifyContent?: FlexStyle['justifyContent']
  alignContent?: FlexStyle['alignItems']
  alignItems?: FlexStyle['alignItems']
  alignSelf?: FlexStyle['alignSelf']
  ma?: FlexStyle['margin']
  ms?: FlexStyle['marginStart']
  me?: FlexStyle['marginEnd']
  ml?: FlexStyle['marginLeft']
  mt?: FlexStyle['marginTop']
  mr?: FlexStyle['marginRight']
  mb?: FlexStyle['marginBottom']
  mx?: FlexStyle['marginHorizontal']
  my?: FlexStyle['marginVertical']
  pa?: FlexStyle['padding']
  ps?: FlexStyle['paddingStart']
  pe?: FlexStyle['paddingEnd']
  pl?: FlexStyle['paddingLeft']
  pt?: FlexStyle['paddingTop']
  pr?: FlexStyle['paddingRight']
  pb?: FlexStyle['paddingBottom']
  px?: FlexStyle['paddingHorizontal']
  py?: FlexStyle['paddingVertical']
  bg?: ViewStyle['backgroundColor']
  height?: ViewStyle['height']
  width?: ViewStyle['width']
}
