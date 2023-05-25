export class User {

    /**
     * 
     * @param {Like<User>} userDataLike
     */
    constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
        this.id = id;
        this.avatar = avatar;
        this.balance = balance;
        this.firstName = firstName;
        this.gender = gender;
        this.isActive = isActive;
        this.lastName = lastName;
    }
}