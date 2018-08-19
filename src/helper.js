export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = (data) => {
    return data.reduce((scrubObj, school) => {
      let name = school.Location.toUpperCase();
      if (!scrubObj[name]) {
        scrubObj[name] = {
          location: name, 
          stats: {}
        };
      }
      scrubObj[name].stats[school.TimeFrame] = (Math.round(1000*school.Data)/1000) || 0;
      return scrubObj;
    }, {});
  }

  findByName = (search) => {
    if (!search) return;
    const srch = search.toUpperCase();
    return !this.stats[srch] ? undefined : this.stats[srch];
  }

  findAllMatches = (search) => {
    const array = Object.values(this.stats);
    return !search ? array : array.filter(key => key.location.includes(search.toUpperCase()));
  }

  findAverage = (district) => {
    const years = Object.values(this.stats[district].stats);
    return Math.round(1000*years.reduce((sum, num) => sum + num)/years.length)/1000;
  }

  compareDistrictAverages = (district1, district2) => {
    const dist1 = district1.toUpperCase();
    const dist2 = district2.toUpperCase();
    const val1 = this.findAverage(dist1);
    const val2 = this.findAverage(dist2);
    const compared = Math.round(1000*val1/val2)/1000 === Infinity ? 0 : Math.round(1000*val1/val2)/1000;

    return {
      [dist1]: val1,
      [dist2]: val2, 
      "compared": compared
    };
  }
}
