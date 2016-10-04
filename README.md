# React Workshop for fiskeridirektoratet

[Lenke til presentasjon](https://docs.google.com/a/miles.no/presentation/d/1GNajmITWln4kKOYfo-HE36p0Ls3O5J2FHtbBeVcC2o0/edit?usp=sharing)

## Oppsett og installering

1. Klone repoet
```
$ git clone https://github.com/miles-no/react-workshop.git
```
2. Gå til repoet
```
$ cd react-workshop
```
3. Installer avhengigheter
```
$ npm install
```
4. Kjør koden i utviklingsmodus
```
$ npm run start
```
5. Gå til http://localhost:3000/

## Om oppgaven

Oppgaven går ut på å gradvis bygge ut en enkel bildevisning, med thumbnails som kan trykkes på for å få en detaljert visning. Til slutt skal vi kunne endre tittelen på bildet.

### Mockdata
Vi skal bruke mock-data som ligger i  src/data/mock.js

### Koden
Koden ligger i src/js-mappen. Det er her du skal skrive kode underveis.

### Løsninger
Løsningene ligger i solutions-mappen. Se her om du står fast og dobbeltsjekk gjerne før du går videre på neste oppgave.

## Oppgave 1.

Nå skriver det ikke ut noe thumbnails-bilder fordi images i ImageGallery.jsx er en tom array. Endre dette til å skrive ut bildene fra mock-data istedenfor og bruk Thumbnail.jsx som komponent.

Tips: map-metoden
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Oppgave 2

Lag en detaljert visning som viser det 1. bildet i bilde-arrayen. Visningen kan returnere
```
<div className="image-preview">
   <h2>{tittel-tekst}</h2>
   <img alt={[alt-tekst]} src={[src-tekst]} />
 </div>
```

## Oppgave 3

Legg på en klikk-handler på Thumbnails-knappen, slik at bildet man velger er det som blir forhåndsvist.

Tips:
Du kan godt bare sende med data som ble valgt som et objekt fra Thumbnail.jsx
```
onClick() {
  this.props.onClick({ src: this.props.src, alt: this.props.alt, title: this.props.title });
}
```

## Oppgave 4

Legg på en klikk-handler på tittelen på bildet i detaljvisningen som muliggjør å redigere tittelen. Når tittelen endres, blir det også oppdatert in real time på det tilhørende thumbnail-kortet.

Tips:
- Denne oppgaven er litt kompleks ved at den medfører flere ting. Lag gjerne en liten "kravspek" over hva som må endres før du starter.
- For å få dette til, bør du skrive om Thumbnail.jsx til å fortelle ImageGallery hvilken id-den har fremfor å lage et objekt. Her kan du bruke idx fra map-funksjonen.
```
const images = this.state.imageArr.map((image, idx) => {
  return <Thumbnail {...image} key={idx} onClick={this.onClick} id={idx} />;
});
```
- Tenk også på hvordan mockdata må brukes for å kunne gjøre endringer på de...
