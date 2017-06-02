import { Customer } from './customer';
import { ObjectFormatter } from './formatutils';

 class InternetCustomer extends Customer {
     constructor(id, name, address, credit, statud, blogUrl) {
         super(...arguments);

         this.blogUrl = blogUrl;
     }

     format() {
         let formattedMessage =  ObjectFormatter.format(this).toUpperCase();

         return formattedMessage;
     }
 }

 export { InternetCustomer };
