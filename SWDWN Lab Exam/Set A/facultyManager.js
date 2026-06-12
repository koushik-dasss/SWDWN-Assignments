class FacultyManager{
    constructor(){
        this.faculties = [];
    }
    addFaculty(name){
        this.faculties.push(name);
    }
    getFaculties(){
        return this.faculties;
    }
}
const facultyManager = new FacultyManager();
module.exports = facultyManager;