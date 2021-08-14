# Az **str-fullstack-oltopont** alkalmazás dokumentációja

## Az alkalmazás célja

Az alkalmazás egy kórházi oltópont adminisztrációs felületét valósítja meg. A felhasználó bejelentkezését követően felhasználó szerepkörétől függően lehetővé válik az oltásra váró páciensek adatainak kezelése: páciensek listájának megjelenítése, új páciens adatainak felvétele és módosítása. További feladata a vakcinák, oltási események, oltási szövődmények, és az oltás helyszínek adatainak kezelése (táblázatos megjelenítés, szerkesztés, új adat létrehozása).

## Az alkalmazásban felhasznált keretrendszerek:

### Backend

- Node.js
- Express
- JSON Web Tokens
- MongoDB (Atlas)
- Jest

### Frontend
- Angular
- Bootstrap
- Font Awesome


## Az **[str-fullstack-oltopont](https://github.com/petert360/str-fullstack-oltopont)** repository helyi másolat (clone) készítése:

`git clone https://github.com/petert360/str-fullstack-oltopont.git`

## Az alkalmazás telepítése fejlesztői (developer) üzemmódban

A backend oldal és függőségeinek telepítése:
 - A `/backend` mappában a Visual Studio Code indítása: `code .`
 - A terminal ablakban a gyökér mappában kell futtatni az `npm i` parancsot.
 - Backend indító script: `npm start` 

A frontend oldal és függőségeinek telepítése:
 - A `/frontend` mappában a Visual Studio Code indítása: `code .`
 - A terminal ablakban a gyökér mappában kell futtatni az `npm i` parancsot.
 - Frontend indító script: `npm start`

## Az alkalmazás telepítése felhasználói (production) üzemmódban

 - A frontend oldal és függőségeinek telepítéséhez a terminal alkalmazásban a `/frontend` mappában a kell futtatni az `npm i` parancsot.

 - A fontend build elkészítése: `ng build`

 - A `/frontend/dist/frontend` mappa tartalmát át kell másolni a `/backend/public` mappába.

 - Docker konténer felépítése és futtatása: `docker-compose up`

## Belépés az alkalmazásba
Az alkalmazásba történő belépéséhez használható e-mail cím és jelszó párosok:

| E-mail          | Jelszó |
| :----:          | :----: |
| admin@gmail.com | admin  |
| orvos@gmail.com | orvos  |
| nover@gmail.com | nover  |



## Az alkalmazás konfigurálása

A `base.service.ts` állományban meg kell adni az API végpont elérési útvonalát.

## Entitások

Az alkalmazásban használt entitások részletei:

```javascript
class Patient {
    _id: string = '';
    name: string = '';
    appointment: Date = new Date();
    personalId: string = '';
    dob: Date = new Date();
    phone: string = '';
    email: string = '';
    vaccine: Vaccine = new Vaccine;
    vaccinations?: Vaccination[] = [];
    active: boolean = true;
}

class Vaccine {
    _id: string = '';
    manufacture: string = '';
    product: string = '';
    lot: string = '';
    doseInterval: number = 0;
}

class Vaccination {
    _id: string = '';
    patient: Patient = new Patient();
    vaccine: Vaccine = new Vaccine;
    date: Date = new Date();
    dose: number = 0;
    injectionSite: string = '';
    injectionType: string = '';
    adverseEvent: AdverseEvent = new AdverseEvent;
    eeszt: boolean = false;
    place: Place = new Place;
}

class Place {
    _id: string = '';
    hospital: string = '';
    address: string = '';
    building: string = '';
}

class AdverseEvent {
    _id: string = '';
    patient: Patient = new Patient;
    date: Date = new Date();
    description: string = '';
}
```

## A backend végpontok dokumentációja

A végpontok dokumentációja Swagger segítségével történt, elérése a backend oldalon az alábbi végponton:

`/api-docs`

## Linkek

[Oltópont alkalmazás user story](https://github.com/petert360/str-fullstack-oltopont/blob/main/README.md)
