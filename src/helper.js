export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = (data) => {
    return data.reduce((uniqueObj, school) => {
      let name = school.Location.toUpperCase();
      if (!uniqueObj[name]) {
        uniqueObj[name] = {location: name, stats: {}};
      }
      uniqueObj[name].stats[school.TimeFrame] = (Math.round(1000*school.Data)/1000) || 0;
      return uniqueObj;
    }, {});
  }

  findByName = (search) => {
    if (!search) return;
    let s = search.toUpperCase();
    return !this.stats[s] ? undefined : this.stats[s];
  }
}
