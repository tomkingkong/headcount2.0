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
    const s = search.toUpperCase();
    return !this.stats[s] ? undefined : this.stats[s];
  }

  findAllMatches = (search) => {
    const arr = Object.keys(this.stats).map(key => this.stats[key]);
    if (!search) {
      return arr;
    } else {
      const s = search.toUpperCase();
      return (
        arr
        .filter(key => key.location.includes(s))
      );
    }
  }
}
