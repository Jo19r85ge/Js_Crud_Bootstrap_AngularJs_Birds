class RoomsViewModel
{
    constructor()
    {
        this.Code = 0;
        this.Color = "";
        this.Adapt = "";
        this.Project = "";
        this.Rooms = [];
    }

    CreateRoom()
    {
        let room = new Room();
        room.Code = this.Code;
        room.Color = this.Color;
        room.Adapt = this.Adapt;
        room.Project = this.Project;
        this.Rooms.push(room);
    }
}

app.component('rooms',
{
    templateUrl: './Scripts/Views/Rooms/RoomsView.html',
    controller: RoomsViewModel,
    controllerAs: "vm"
});