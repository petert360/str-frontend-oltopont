# Igény - oltópont adminisztrációs rendszer

A kórházi oltópont adminisztrátorként (továbbiakban adminisztrátor) egy olyan reszponzív felülettel rendelkező adminisztrációs rendszerre van szükségem, mely teljeskörűen kezeli az előjegyzett és az oltópontra érkezett páciensek adatait, annak érdekében, hogy az oltóponton nagyszámú páciens ellátása tervezetten, gyorsan, biztonságosan történjen.

## Eposz #1 - Autentikáció

Adminisztrátorként szükségem van arra, hogy az adminisztrációs felülethez csak autentikációt követően lehessen hozzáférni az adatok biztonsága érdekében.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy az egyes felhasználók felhasználói név, jelszó párossal azonosíthassák magukat, hogy csak a megfelelő jogosultsággal rendelkező felhasználók férjenek hozzá a rendszerhez.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A rendszer belépési (login) képernyővel fogadja a belépni kívánó felhasználót.
- A jelszó nem látható módon gépelhető be.
- Csak a rendszergazda által regisztrált felhasználó névvel és a hozzátartozó jelszóval rendelkező felhasználók léphetnek be a rendszerbe.

#### Feladatok

- reszponzív belépési űrlap létrehozása,
- űrlap validáció megvalósítása.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy a rendszerhez hozzáférő felhasználók autentikációs adatai külön erre a célra létrehozott adatbázisban legyenek, annak érdekében, hogy a fejhasználói név-jelszó párosok jól elkülönülten, biztonságban legyenek.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A felhasználói adatbázis elkészült.
- A felhasználói adatbázishoz rendszergazda által felhasználó-jelszó párosok adhatók.

#### Feladatok

- adatbázis létrehozása
- jelszavak titkosított tárolása
- felhasználói adatbázis kezelés

## Eposz #2 - Adatok feltöltése

Adminisztrátorként szükségem van arra, hogy páciens adatokat tudjak feltölteni az adatbázisba, hogy a külső féltől érkező adatok az adminisztrációs rendszer részei legyenek.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy a feltöltendő adatok CSV formátumban rendelkezésre álljanak, mert az előjegyzési listák a külső féltől Microsoft Excel formátumban érkeznek, és a CSV feldolgozása az adatbázis számára egyszerűbb. Megjegyzés: ez a felhasználói történet nem az applikáció szoros része, a konverzió az applikáción kívül történik meg.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A külső féltől érkezett XLSX -> CSV átalakítás megvalósul.

#### Feladatok

- XLSX -> CSV átalakítás megoldása

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy a CSV file-t az alkalmazás "Feltöltés oldalán" az adatbázisba feltölthessem, hogy az előjegyzési, illetve páciens adatok az adatbázisban elérhetővé váljanak.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az alkalmazás feltöltés oldala rendelkezésre áll, és működőképes a feltöltés funkció: a feltöltendő CSV-ben szereplő adatok az adatbáziban megjelennek.

#### Feladatok

- Feltöltés oldal frontend megvalósítása.
- Feltöltés funkció backend megvalósítása.

## Eposz #3 - Adatok megjelenítése

Adminisztrátorként szükségem van arra, hogy a napi páciens és oltási adatok táblázatos formában megjelenjenek, hogy a napi forgalom átlátható legyen.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy az aktuális napi előjegyzési lista táblázatos formában megjelenjen, így az aktuális napi páciens forgalom folyamatosan nyomon követhető.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az aktuális napi lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív napi lista oldal elkészítése.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy az aktuális napi előjegyzési lista táblázatában az egyes sorok elemein  táblázatos formában megjelenjen, így az aktuális napi páciens forgalom folyamatosan nyomon követhető.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az aktuális napi lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív napi lista oldal elkészítése.

## Eposz #4 - Statisztika

Adminisztrátorként szükségem van arra, hogy statisztikai lekérdezéseket végezhessek az adatbázisban tárolt adatokról, annak érdekében, hogy az oltásokkal, páciens forgalommal kapcsolatos kimutatásokat, statisztikákat készíthessek.

### Felhasználói történet #1

#### Elfogadási kritérium

A feladat elkészült, ha:

#### Feladatok

## Fejlesztési lehetőségek

- Páciens adatok beolvasása QR kód segítségével.
- Páciens adatok exportálása külső rendszer számára.

---

## A dokumentum felépítése

A felhasználói történetek az alábbi struktúra szerint rendeződnek:  
(forrás: *[User needs vs User stories in Agile development](https://salmapatel.co.uk/academia/user-needs-vs-user-stories-in-agile)*)

- a legfelsőbb szinten az igényt fogalmaztam meg (H1),
- ez alatt eposzok foglalják csoportba a felhasználói történeteket (H2),
- a felhasználói történeteket (H3) eposzok szerint csoportosítottam, és magukba foglalják az elfogadási kritériumot (H4) és a kritérium teljesítéséhez szükséges feladatokat (H4),
- a további fejlesztési lehetőségeket külön kiemeltem (H3)
