class UsersViewModel
{
    constructor()
    {
        this.Name = "";
        this.Surname1 = "";
        this.Car = "";
        this.Email = "";
        this.Users = [];
    }

    CreateUser()
    {
        let user = new User();
        user.Name = this.Name;
        user.Surname1 = this.Surname1;
        user.Car = this.Car;
        user.Email = this.Email;
        this.Users.push(user);
    }
}

app.component('users',
{
    templateUrl: './Scripts/Views/Users/UsersView.html',
    controller: UsersViewModel,
    controllerAs: "vm"
});