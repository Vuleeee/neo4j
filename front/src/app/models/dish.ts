export class Dish {
    jeloId: number;
    naziv: string;
    opis: string;
    rejting:{ low: number; high: number };
    nacinPripreme: string;
    sastojci: string;
  
    constructor(jeloId: number, naziv: string, opis: string, rejting: { low: number; high: number }, sastojci: string, nacinPripreme: string) {
      this.jeloId = jeloId;
      this.naziv = naziv;
      this.opis = opis;
      this.rejting = rejting;
      this.sastojci = sastojci;
      this.nacinPripreme = nacinPripreme;
    }
  }