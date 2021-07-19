# Az **str-fullstack-oltopont** alkalmazás dokumentációja

## Az alkalmazás célja

Az alkalmazás egy kórházi oltópont adminisztrációs felületét valósítja meg. Feladatai többek között az előjegyzett, illetve az oltópontra érkezett páciensek adatainak kezelése, a személyzet számára az aktuális napi páciens lista megjelenítése, módosítása (pl. megadott szempontok szerinti szűrés, rendezés, páciens adatok részleteinek megjelenítése, páciens adat felvétel-törlés-módosítás). További feladata statisztikák megjelenítése, mint például a napi forgalom: várható ill. megérkezett páciensek, beadott oltások száma.

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
    personalId: string = ''; 
    dob: Date = new Date();
    phone: string = '';
    email: string = '';
    vaccine: Vaccine = new Vaccine;
    vaccinations: Vaccination[] = []; 
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
    reported: Date = new Date(); 
    description: string = '';
}
```

## Az alkalmazás indítása

A megadott Docker Container indítása és inicializálása.

## A végpontok dokumentációja

Végpontok dokumentációja Swagger segítségével.

## Linkek

[Oltópont alkalmazás user story](https://github.com/petert360/str-fullstack-oltopont/blob/main/README.md)
