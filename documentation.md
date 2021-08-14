# Az **str-fullstack-oltopont** alkalmazás dokumentációja

## Az alkalmazás célja

Az alkalmazás egy kórházi oltópont adminisztrációs felületét valósítja meg. A felhasználó bejelentkezését követően felhasználó szerepkörétől függően lehetővé válik az oltásra váró páciensek adatainak kezelése: páciensek listájának megjelenítése, új páciens adatainak felvétele és módosítása. További feladata a vakcinák, oltási események, oltási szövődmények, és az oltás helyszínek adatainak kezelése (táblázatos megjelenítés, szerkesztés, új adat létrehozása).

## Az alkalmazás telepítése

Az **[str-fullstack-oltopont](https://github.com/petert360/str-fullstack-oltopont)** repository clone készítése:

`git clone https://github.com/petert360/str-fullstack-oltopont.git`

Az alkalmazás függőségeinek telepítése az NPM segítségével:

`npm install`

## Az alkalmazás konfigurálása

A `base.service.ts` állományban meg kell adni az API végpont elérési útvonalát.

### Az egyes entitások részletei

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

## Az alkalmazás indítása

A megadott Docker Container indítása és inicializálása.

## A végpontok dokumentációja

Végpontok dokumentációja Swagger segítségével történt, elérése a backend oldalon az alábbi végponton:

`/api-docs`

## Linkek

[Oltópont alkalmazás user story](https://github.com/petert360/str-fullstack-oltopont/blob/main/README.md)
