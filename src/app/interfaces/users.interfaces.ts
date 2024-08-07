export interface users{
    id?: number;
    names: string;
    lastName: string;
    secondLastName: string;
    username: string;
    password?: string;
    roles: string;
    creation?:string;
    update?:string;
    Active?:boolean;
    photoUser?:string;
    photoUserString?:string;
    // address: {
    //     street: string;
    //     suite: string;
    //     city: string;
    //     zipcode: string;
    //     geo: {
    //         lat: string;
    //         lng: string;
    //     }
    // }
    // phone: string;
    // website: string;
    // company: {
    //     name: string;
    //     catchPhrase: string;
    //     bs: string;
    // }
}
