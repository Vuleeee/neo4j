import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Dish } from './models/dish';
import { Sastojak } from './models/sastojak';
@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = ''; 
  private dataSubject = new Subject<any>();
  private dataSubject2 = new Subject<any>();
  private dataSubject3 = new Subject<any>();
  private dataSubject4 = new Subject<any>();
  private dataSubject5 = new Subject<any>();
  constructor(private http: HttpClient) {}

  fetchData(){
    const httpObservable = this.http.get('http://localhost:3000/jela-po-rejtingu');
    httpObservable.subscribe(
      (data) => {
        console.log('jela po rejtingu dobijena');
        this.dataSubject.next(data);
      
      },
      (error) => {
        console.error('Error:', error);
      
      },
      () => {
        console.log('Request completed');
       
      }
    );
    }
    fetchData2(){
    const httpObservable2 = this.http.get('http://localhost:3000/sastojci');
    httpObservable2.subscribe(
      (data2) => {
        console.log('sastojci dobijena');
        this.dataSubject2.next(data2);
        
      },
      (error) => {
        console.error('Error:', error);
       
      },
      () => {
        console.log('Request completed sastojci');
      }
    );
    }
    fetchData3(kategorija: string){
    const httpObservable3 = this.http.get(`http://localhost:3000/jela/${kategorija}`);
    httpObservable3.subscribe(
      (data3) => {
        console.log('jelo meso Received data:', data3);
        this.dataSubject3.next(data3);
        
      },
      (error) => {
        console.error('Error:', error);
       
      },
      () => {
        console.log('Request completed kategorije sastojci');
      }
    );
  }
  fetchData4(sastojci: string){
    console.log("sastojci za vracanje jela", sastojci);
    const params = new HttpParams().set('sastojci', sastojci);
    console.log("sastojci za vracanje  params", params);
    const httpObservable4 = this.http.get(`http://localhost:3000/jela-po-sastojcima/${sastojci}`);
    httpObservable4.subscribe(
      (data4) => {
        console.log('sva jela:', data4);
        this.dataSubject4.next(data4);
        
      },
      (error) => {
        console.error('Error:', error);
       
      },
      () => {
        console.log('Request completed kategorije sastojci');
      }
    );
  }
  fetchData5(jelo: Dish){

 
    const httpObservable5 = this.http.post('http://localhost:3000/dodaj-jelo', {jelo});
    httpObservable5.subscribe(
      (data5) => {
        console.log('sva jela:', data5);
        this.dataSubject5.next(data5);
        
      },
      (error) => {
        console.error('Error:', error);
       
      },
      () => {
        console.log('Request completed dodavanje');
      }
    );
  }
  getDataSubject() {
    return this.dataSubject.asObservable();
  }

  getDataSubject2() {
    return this.dataSubject2.asObservable();
  }
  getDataSubject3() {
    return this.dataSubject3.asObservable();
  }
  getDataSubject4() {
    return this.dataSubject4.asObservable();
  }
  dodajJelo(data: Dish): Dish {

    return data;
  }
  getTop3Dishes(data2: Dish[]): Dish[] {
  const sortedData = data2.sort((a, b) => b.rejting.low - a.rejting.low);
  const top3 = sortedData.slice(0, 3);

  return top3;
  }
  getKategorije(data: Sastojak[]): Sastojak[] {
  
   return data;
   }

   getJelaPoKategoriji(data3: Dish[]): Dish[] {
    console.log("jelo vraceno na servis", data3)
   return data3;
   }
   getJelaPoSastojcima(data4: Dish[]): Dish[] {
    console.log("jelo vraceno na servis", data4)
   return data4;
   }
}