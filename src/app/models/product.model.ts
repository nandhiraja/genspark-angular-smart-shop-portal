import { producerUpdateValueVersion } from "@angular/core/primitives/signals";

export class ProductModel{

    constructor(
       
       
        public id =0,
        public title:string ="",
        public description:string ="",
        public price=0,
        public category:string ="",
        public rating=0.0,
        public brand:string ="",
        public discountPercentage=0.0,
        public warrantyInformation:string ="",
        public shippingInformation: string="",
        public availabilityStatus: string="",
        public thumbnail :string =""
        

        

    )
    { }
}