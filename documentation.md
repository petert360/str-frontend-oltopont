# Az alkalmazás célja

Az alkalmazás egy kórházi oltópont adminisztrációs felületét valósítja meg. Feladatai többek között az előjegyzett, illetve az oltópontra érkezett páciensek adatainak kezelése, a személyzet számára az aktuális napi páciens lista megjelenítése, módosítása (pl. megadott szempontok szerinti szűrés, rendezés, páciens adatok részleteinek megjelenítése, páciens adat felvétel-törlés-módosítás). További feladata statisztikák megjelenítése, mint például a napi forgalom: várható ill. megérkezett páciensek, beadott oltások száma.

# Az alkalmazás telepítése

Az str-fullstack-oltopopont repository clone készítése:

`git clone https://github.com/petert360/str-fullstack-oltopont.git`

Az alkalmazás függőségeinek telepítése az NPM segítségével:
    
`npm install`

# Az alkalmazás konfigurálása

A `base.service.ts` állományban meg kell adni az API végpont elérési útvonalát.

# Az alkalmazás indítása

A megadott Docker Container indítása és inicializálása.

# A végpontok dokumentációja

Végpontok dokumentációja Swagger segítségével.

# Linkek

[Oltópont alkalmazás user story](https://github.com/petert360/str-fullstack-oltopont/blob/main/README.md)