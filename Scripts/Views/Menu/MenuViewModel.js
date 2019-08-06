class MenuViewModel
{
    constructor($location)
    {
        this.Location = $location;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    ColapseClick() 
    {
        $('#sidebar').toggleClass('active');
    }
    
}

app.component('menu',
{
    templateUrl: './Scripts/Views/Menu/MenuView.html',
    controller: MenuViewModel,
    controllerAs: "vm"
});




