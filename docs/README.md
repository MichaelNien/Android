# Android



## Android 16.0 (API level 36)



## Android 15.0 (API level 35)

- Support 16 KB page sizes

  https://developer.android.com/guide/practices/page-sizes
  
- 自動啟用 Edge-to-edge enforcement



## Android 14.0 (API level 34)

- LaunchMode singleInstance 殘留問題，Android 14 QPR1 已修復。

  https://github.com/openid/AppAuth-Android/issues/977
  
- Activity#onActivityResult()失效問題

  影響裝置

  Pixel 8、Pixel 8a、Pixel 8 Pro

  Pixel 5a (5G)、Pixel 6、Pixel 6a、Pixel 6 Pro、Pixel 7、Pixel 7a、Pixel 7 Pro、Pixel Fold、Pixel Tablet
  
  例如：
  
  Pixel 6a
  
  | build ID           | 狀態               |
  | ------------------ | ------------------ |
  | AP3A.241005.015    | 正常<br>Android 15 |
  | AP2A.240905.003.F1 | 異常               |
  | AP2A.240805.005.F1 | 異常               |
  | AP2A.240705.004    | 異常               |
  | AP2A.240605.024    | 異常               |
  | AP1A.240505.004    | 正常               |
  
  https://issuetracker.google.com/issues/351245215



## Android 13.0 (API level 33)



## Android 12.0 (API level 32)



## Android 12.0 (API level 31)



## Android 11.0 (API level 30)



## Android 10.0 (API level 29)



## Android 9.0 (API level 28)



## Android 8.1 (API level 27)



## Android 8.0 (API level 26)

- bug Activities 設定透明，又設定方向，閃退問題

  Only fullscreen activities can request orientation

  https://blog.csdn.net/ruanxiaoyao/article/details/102462738



## Android 7.1 (API level 25)



## Android 7.0 (API level 24)



## Android 6.0 (API level 23)



## Android 5.1 (API level 22)



## Android 5.0 (API level 21)



## 其他

https://developer.android.com/build/jdks

| 版本                                          | JDK        |
| --------------------------------------------- | ---------- |
| 15.0                                          | OpenJDK 17 |
| 13.x                                          | OpenJDK 11 |
| 7.x ~ 12.x                                    | OpenJDK 8  |
| 5.x ~ 6.0 <br>(API level 21) ~ (API level 23) | OpenJDK 7  |



憑證

預設禁用  certificate revocation checking (憑證註銷檢查)

https://github.com/square/okhttp/issues/2348