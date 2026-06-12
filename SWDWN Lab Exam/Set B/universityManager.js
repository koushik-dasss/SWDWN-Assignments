class UniversityManager{
    constructor(){
        this.universities = [];
    }
    addUniversity(name){
        this.universities.push(name);
    }
    getUniversities(){
        return this.universities;
    }
}
const universityManager = new UniversityManager();
module.exports = universityManager;