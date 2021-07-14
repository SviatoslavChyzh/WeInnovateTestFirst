import { Injectable } from '@angular/core';
import { orderBy, uniqBy, filter, reject } from 'lodash';

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
        .map((item: any) => {
          return {name: item.name, skill: item.skill};
      });

      result = [...result, pair];
    });

    return result;
  }

  matchBySkillDevelopers(listOfMatchingDevs: any) {
    // {name: 'Slava', language: 'TypeScript', skill: 'S'},
    // {name: 'Gabor', language: 'TypeScript', skill: 'J'},
    // {name: 'Senior', language: 'TypeScript', skill: 'S'},
    // {name: 'Junior', language: 'TypeScript', skill: 'J'},
    let results: any[] = [];
    for (let i = 0; i < listOfMatchingDevs.length - 1; i++) {
      // This is where you'll capture that last value
      for (let j = i + 1; j < listOfMatchingDevs.length; j++) {
        if (listOfMatchingDevs[i].skill !== listOfMatchingDevs[j].skill) {
          results.push([listOfMatchingDevs[i].name, listOfMatchingDevs[j].name]);
        }
      }
    }
    console.log(results);

    return results;
  }
}
