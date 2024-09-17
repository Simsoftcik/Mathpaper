Nie wiem czy poniższa komenda nie wywali ci błędu że expo nie ma bo mi samo dodawało przy tworzeniu apki, duża szansa bo całe node modules są w gitignore. Wtedy po prostu `npm i expo` czy coś

`npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`

+ komendy z instalacji nativewinda na ich stronce w zakładce expo

+ ikonki
`npm install --save react-native-vector-icons`


---

Ponoć dla działania tego ostatniego na IOS trzeba dodać to do Info.plist, ale zakładam ze to na etapie buildowania apki:
```
<key>UIAppFonts</key>
<array>
  <string>Fonts/MaterialIcons.ttf</string>
  <string>Fonts/FontAwesome.ttf</string>
  <string>Fonts/Ionicons.ttf</string>
</array>
```