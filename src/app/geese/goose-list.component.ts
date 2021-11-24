import { Component, OnInit } from "@angular/core";
import { Igoose } from "./goose";
import { GooseService } from "./goose.service";


@Component({
    selector: "pm-geese",
    templateUrl: './goose-list.component.html',
    styleUrls: ['./goose-list.component.css']

})
export class GooseListComponent implements OnInit {   
pageTitle: string = "Goose List";
imageWidth: number = 50;
imageMargin: number = 2;
showImage: boolean = false;
filteredGeese: Igoose[] = [];
geese: Igoose[] = [];

private _listFilter : string = '';
get listFilter(): string {
    return this._listFilter;
} 
set listFilter(value: string){
    this._listFilter = value;
    console.log('in setter:', value);
    this.filteredGeese = this.performFilter(value);
}



constructor(private gooseService: GooseService){}

performFilter(filterBy: string): Igoose[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.geese.filter((goose:Igoose) =>
    goose.gooseName.toLocaleLowerCase().includes(filterBy));
}
toggleImage(): void{
    this.showImage = !this.showImage;
}
ngOnInit(): void{
    this.geese = this.gooseService.getGeese();
    this.filteredGeese = this.geese;
}
}