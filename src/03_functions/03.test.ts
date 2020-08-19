import {StudentType} from "../02_objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
});

test("new tech skill shoild be added to student", () => {

    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined();

});


test("student should be active", () => {

    expect(student.isActive).toBe(false);

    addSkill(student, "JS");

    makeStudentActive(student);

    expect(student.isActive).toBe(true)

});

test("does student live in city", () => {

    let result1 = doesStudentLiveIn(student, "Moskow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false)
    expect(result2).toBe(true)

});




export default 1


