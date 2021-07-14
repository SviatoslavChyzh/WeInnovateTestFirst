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
    let result: string[] = [];
    result = this.matchDevelopers(listOfMatchingDevs);
    listOfMatchingDevs.forEach((dev: any) => {
      this.matchDevelopers(listOfMatchingDevs).forEach(item => {

        result.push();
      });
    });


    // listOfMatchingDevs.forEach((item: any) => {
    //   let pair: any = reject(listOfMatchingDevs, ['skill', item.skill])
    //     .map((item: any) => {
    //       return {name: item.name, skill: item.skill};
    //     });
    //
    //   result = [...result, item, pair[0]];
    // });

    console.log(result);

    return result;
  }
}
