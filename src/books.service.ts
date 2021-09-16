import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

getbooks(){
  return [{
    title: "oru kudayum kujupengalum",
    body: "Muttathu varkey"
  },
  {
    title: "Aarachar",
    body: "KR Meera"
  },
   {
    title: "Oru deshathinte kadha",
    body: "SK POttakkadu"
  },
   {
    title: "Ghasakkinte Ithihasam",
    body: "OV Vijayan"
  }
  ]
}

getfavs(){
  return[  {
    title: "oru kudayum kujupengalum",
    body: "Muttathu varkey"
  },
  {
    title: "Aarachar",
    body: "KR Meera"
  }


]
}
  

  

    
    
    



}
