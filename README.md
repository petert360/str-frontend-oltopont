# Oltópont adminisztrációs rendszer - User Story

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

---

## Eposz #2 - Páciens adatok

Adminisztrátorként szükségem van arra, hogy a páciens adatok táblázatos formában megjelenjenek, hogy a páciens forgalom átlátható legyen.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy a páciens lista táblázatos formában megjelenjen, így az páciens forgalom folyamatosan nyomon követhető.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A páciens lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív páciens lista oldal elkészítése.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy a páciens lista elemeihez szerkesztés funkció tartozzon, annak érdekében, hogy az adatok változását rögzíteni lehessen.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A pácines lista elemeihez szerkesztés funkció tartozik.

#### Feladatok

- A páciens lista elemeihez adatok szerkesztése funkció hozzárendelése.

### Felhasználói történet #3

Adminisztrátorként szükségem van arra, hogy a páciens lista elemeihez létrehozás funkció tartozzon, annak érdekében, hogy az adatbázisban új pácienst lehessen rögzíteni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A páciens lista elemeihez létrehozás funkció tartozik.

#### Feladatok

- A páciens lista elemeihez létrehozás funkció hozzárendelése.

### Felhasználói történet #4

Adminisztrátorként szükségem van arra, hogy a páciens lista elemeihez törlés funkció tartozzon, annak érdekében, hogy az adatbázisból pácienseket lehessen törölni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A páciens lista elemeihez törlés funkció tartozik.

#### Feladatok

- A páciens lista elemeihez törlés funkció hozzárendelése.

### Felhasználói történet #5

Adminisztrátorként szükségem van arra, hogy a páciens lista elemeit rendezni és szűrni lehessen, annak érdekében, hogy a táblázatban megjelenített adatok módosíthatók legyenek.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A páciens lista elemeihez rendezés és szűrés funkció tartozik.

#### Feladatok

- A páciens lista elemeihez rendezés és szűrés funkció hozzárendelése.

### Felhasználói történet #6

Adminisztrátorként szükségem van arra, hogy a páciens lista oldalakra bontva, megadott számú pácienst listázzon, és az oldalak között lapozni lehessen, annak érdekében, hogy a táblázat átlátható legyen.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A páciens lista elemeihez lapozó funkció tartozik.

#### Feladatok

- A páciens lista elemeihez lapozó funkció hozzárendelése.

---

## Eposz #3 - Vakcina adatok

Adminisztrátorként szükségem van arra, hogy a vakcina adatok táblázatos formában megjelenjenek, hogy a vakcina adatbázis átlátható legyen.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy a vakcina lista táblázatos formában megjelenjen, így az adatbázisban elérhető vakcinák nyomon követhetők.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A vakcina lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív vakcina lista oldal elkészítése.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy a vakcina lista elemeihez szerkesztés funkció tartozzon, annak érdekében, hogy a vakcinák adatait módosítani lehessen.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A vakcina lista elemeihez szerkesztés funkció tartozik.

#### Feladatok

- A vakcina lista elemeihez adatok szerkesztése funkció hozzárendelése.

### Felhasználói történet #3

Adminisztrátorként szükségem van arra, hogy a vakcina lista elemeihez létrehozás funkció tartozzon, annak érdekében, hogy az adatbázisba új vakcinát lehessen rögzíteni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A vakcina lista elemeihez létrehozás funkció tartozik.

#### Feladatok

- A vakcina lista elemeihez adatok létrehozása funkció hozzárendelése.

### Felhasználói történet #4

Adminisztrátorként szükségem van arra, hogy a vakcina lista elemeihez törlés funkció tartozzon, annak érdekében, hogy az adatbázisból vakcinákat lehessen törölni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- A vakcina lista elemeihez törlés funkció tartozik.

#### Feladatok

- A vakcina lista elemeihez törlés funkció hozzárendelése.

---

## Eposz #4 - Oltási események

Adminisztrátorként szükségem van arra, hogy az oltási események táblázatos formában megjelenjenek, hogy az oltási esemény adatbázis átlátható legyen.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy az oltási események listája táblázatos formában megjelenjen, így az adatbázisba felvitt oltási események nyomon követhetők.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási esemény lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív oltási esemény lista oldal elkészítése.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy az oltási események lista elemeihez szerkesztés funkció tartozzon, annak érdekében, hogy az oltási események adatait módosítani lehessen.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási esemény lista elemeihez szerkesztés funkció tartozik.

#### Feladatok

- Az oltási események lista elemeihez adatok szerkesztése funkció hozzárendelése.

### Felhasználói történet #3

Adminisztrátorként szükségem van arra, hogy az oltási események lista elemeihez létrehozás funkció tartozzon, annak érdekében, hogy az adatbázisba új oltási eseményt lehessen rögzíteni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási esemény lista elemeihez létrehozás funkció tartozik.

#### Feladatok

- Az oltási esemény lista elemeihez adatok létrehozása funkció hozzárendelése.

### Felhasználói történet #4

Adminisztrátorként szükségem van arra, hogy az oltási esemény lista elemeihez törlés funkció tartozzon, annak érdekében, hogy az adatbázisból oltási eseményeket lehessen törölni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási esemény lista elemeihez törlés funkció tartozik.

#### Feladatok

- Az oltási esemény lista elemeihez törlés funkció hozzárendelése.

---

## Eposz #5 - Helyszínek

Adminisztrátorként szükségem van arra, hogy az oltás beadásának helyszínei táblázatos formában megjelenjenek, hogy oltópont helyszín adatbázis átlátható legyen.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy az oltások helyszínének listája táblázatos formában megjelenjen, így az adatbázisban elérhető oltási helyszínek áttekinthetők.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási helyszín lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív oltási helyszín lista oldal elkészítése.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy az oltási helyszín lista elemeihez szerkesztés funkció tartozzon, annak érdekében, hogy az oltási helyszínek adatait módosítani lehessen.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási helyszín lista elemeihez szerkesztés funkció tartozik.

#### Feladatok

- Az oltási helyszín lista elemeihez adatok szerkesztése funkció hozzárendelése.

### Felhasználói történet #3

Adminisztrátorként szükségem van arra, hogy az oltási helyszín lista elemeihez létrehozás funkció tartozzon, annak érdekében, hogy az adatbázisba új oltási helyszínt lehessen rögzíteni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási helyszín lista elemeihez létrehozás funkció tartozik.

#### Feladatok

- Az oltási helyszín lista elemeihez adatok létrehozása funkció hozzárendelése.

### Felhasználói történet #4

Adminisztrátorként szükségem van arra, hogy az oltási helyszín lista elemeihez törlés funkció tartozzon, annak érdekében, hogy az adatbázisból oltási helyszíneket lehessen törölni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási helyszín lista elemeihez törlés funkció tartozik.

#### Feladatok

- Az oltási helyszín lista elemeihez törlés funkció hozzárendelése.

---

## Eposz #6 - Oltási szövődmények

Adminisztrátorként szükségem van arra, hogy az oltási szövődmények táblázatos formában megjelenjenek, hogy az oltással kapcsolatos szövődmények átláthatók legyenek.

### Felhasználói történet #1

Adminisztrátorként szükségem van arra, hogy az oltások szövődményeinek listája táblázatos formában megjelenjen, így az adatbázisban rögzített oltási szövődmények áttekinthetők.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási szövődmény lista egy reszponzív oldalon táblázatos formában megjelenik.

#### Feladatok

- Reszponzív oltási szövődmény lista oldal elkészítése.

### Felhasználói történet #2

Adminisztrátorként szükségem van arra, hogy az oltási szövődmény lista elemeihez szerkesztés funkció tartozzon, annak érdekében, hogy az oltási szövődmények adatait módosítani lehessen.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási szövődmény lista elemeihez szerkesztés funkció tartozik.

#### Feladatok

- Az oltási szövődmény lista elemeihez adatok szerkesztése funkció hozzárendelése.

### Felhasználói történet #3

Adminisztrátorként szükségem van arra, hogy az oltási szövődmények lista elemeihez létrehozás funkció tartozzon, annak érdekében, hogy az adatbázisba új oltási szövődményt lehessen rögzíteni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási szövődmény lista elemeihez létrehozás funkció tartozik.

#### Feladatok

- Az oltási szövődmény lista elemeihez adatok létrehozása funkció hozzárendelése.


### Felhasználói történet #4

Adminisztrátorként szükségem van arra, hogy az oltási szövődmény lista elemeihez törlés funkció tartozzon, annak érdekében, hogy az adatbázisból oltási szövődményeket lehessen törölni.

#### Elfogadási kritérium

A feladat elkészült, ha:

- Az oltási szövődmény lista elemeihez törlés funkció tartozik.

#### Feladatok

- Az oltási szövődmény lista elemeihez törlés funkció hozzárendelése.

---

## Fejlesztési lehetőségek

- Páciens adatok feltöltése CSV állományból
- Páciens adatok beolvasása QR kód segítségével.
- Páciens adatok exportálása külső rendszer számára.
- Statisztikák készítése

---

## A dokumentum felépítése

A felhasználói történetek az alábbi struktúra szerint rendeződnek:  
(forrás: *[User needs vs User stories in Agile development](https://salmapatel.co.uk/academia/user-needs-vs-user-stories-in-agile)*)

- a legfelsőbb szinten az igényt fogalmaztam meg (H1),
- ez alatt eposzok foglalják csoportba a felhasználói történeteket (H2),
- a felhasználói történeteket (H3) eposzok szerint csoportosítottam, és magukba foglalják az elfogadási kritériumot (H4) és a kritérium teljesítéséhez szükséges feladatokat (H4),
- a további fejlesztési lehetőségeket külön kiemeltem (H2).
