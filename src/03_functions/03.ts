import {student, StudentType} from "../02_objects/02";

debugger
export const sum = (a: number, b: number) => {
    return a + b;
};

const res = sum(sum(1, 2), sum(1, 4));

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
   return student.address.city.title === cityName;
}
