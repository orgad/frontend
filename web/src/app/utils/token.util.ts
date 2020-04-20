import { Injectable, NgModule } from '@angular/core'

@Injectable()   @NgModule()
export default class TokenUtil {    
    private name: string = 'jwt-token'
    getToken(): string {
        return localStorage.getItem(this.name)
    }

    setToken(token: string): void {
        localStorage.setItem(this.name, token)
    }
}