import { Routes } from '@angular/router';
import { StoreMainComponent } from "./views/store-main/store-main.component"
import { UserRegisterPageComponent } from "./views/user-register-page/user-register-page.component"

export const routes: Routes = [{
    path: "",
    component: StoreMainComponent
},
{
    path: "userRegister",
    component: UserRegisterPageComponent
}
];
