const data = [
    {id: 1, title: "Everything, Everywhere, All At Once", year: "2022"},
    {id: 2, title: "Babylon", year: "2022"},
    {id: 3, title: "Godzilla - King of the Monsters", year: "2019"},
];

export function getAll(){
    return Promise.resolve(data);
}