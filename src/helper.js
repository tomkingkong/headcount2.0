export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = (data) => {
    return data.reduce((uniqueObj, school) => {
      if (!uniqueObj[school.Location]) {
        uniqueObj[school.Location] = [];
      }
      uniqueObj[school.Location].push(school);
      return uniqueObj;
    }, {});
  }
}
