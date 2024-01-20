export class Sastojak {
    sastojakId: number;
    naziv: string;
    kategorija: string;
  
    constructor(sastojakId: number, naziv: string, kategorija: string) {
      this.sastojakId = sastojakId;
      this.naziv = naziv;
      this.kategorija = kategorija;
    }
  }