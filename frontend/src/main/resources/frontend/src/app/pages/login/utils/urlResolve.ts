import {Role} from "app/auth/model/user/role"
export function urlResolver(userRole:Role) : String{
    switch (userRole) {
        case Role.Admin:
            return 'admin'
            break;
        case Role.Student:
            return 'student'
            break

        case Role.Lecturer:
            return 'lecturer'
            break 

        case Role.Hod:
            return 'hod'
            break
        case Role.TechOfficer:
            return 'tech-officer'
            break
        default:
            return ''
            break;
    }
}