import { Injectable } from '@angular/core';
import { orderBy, uniqBy, filter } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SortDevsService {

  constructor() { }

  sortDevs(devList: any) {
    devList = orderBy(devList, 'language');
    console.log(devList);


    return devList;

  }

  matchDevelopers(listOfMatchingDevs: any) {
    //  ['Spider', 'Mug'],
    //  ['Slava', 'Gabor'],

    // {name: 'Slava', language: 'TypeScript'},
    // {name: 'Gabor', language: 'TypeScript'},
    // {name: 'Mug', language: 'Java'},
    // {name: 'Spider', language: 'Java'},

    const names = listOfMatchingDevs.map((item: any) => item.name);
    let result: string[] = [];
    const listOfLangs = uniqBy(listOfMatchingDevs, 'language').map((item: any) => item.language);

    listOfLangs.forEach((item, index) => {
      let pair: any = filter(listOfMatchingDevs, {'language': item})
        .map((item: any) => item.name);

      result = [...result, pair];
    });

    console.log(result);

    return result;
  }
}
