import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
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
errorMessage: string = '';
sub!: Subscription;

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
    this.sub = this.gooseService.getGeese().subscribe({
        next: geese => {
            this.geese = geese;
            this.filteredGeese = this. geese;
        },
        error: err => this.errorMessage = err
    });
    
}
ngOnDestroy() {
    this.sub.unsubscribe();
}
/* onRatingClicked(message: string); void{
    this.pageTitle='goose list ' + Message;
} */
}