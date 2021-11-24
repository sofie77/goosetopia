import { Igoose } from "./goose";
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class GooseService{
    getGeese() : Igoose[]{
    return[
        {
        "gooseName": "Oscar",
        "colour": "Blue",
        "happiness": 10,
        "job": "Software Engineer",
        "imageUrl": "assets/images/blue.jpg",
        "salary": 40
        },
        {
        "gooseName": "Betty",
        "colour": "White",
        "happiness": 5,
        "job": "Dancer",
        "imageUrl": "assets/images/rr_impress.jpg",
        "salary": 60
        },
        {
        "gooseName": "Mr. Honk",
        "colour": "White",
        "happiness": 7,
        "job": "Accountant",
        "imageUrl": "assets/images/goose2.jpg",
        "salary": 7
        },
        {
        "gooseName": "Jolinda",
        "colour": "Snow",
        "happiness": 9,
        "job": "Swimmer",
        "imageUrl": "assets/images/snow2.jpg",
        "salary": 1000
        }

    ]   
    }
    
}