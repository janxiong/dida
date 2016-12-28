import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './hero';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[], args: string): any{
  	if  (args==''){return allHeroes}
  	if (allHeroes==null) {
      return null;
    }
    return allHeroes.filter(hero => {
    	if(hero.name)
    	{ return hero.name.toLocaleLowerCase()==args.toLocaleLowerCase()};
    	if(hero.shift)
    	 {return hero.shift.toLocaleLowerCase()==args.toLocaleLowerCase()};
    	});
  }
}