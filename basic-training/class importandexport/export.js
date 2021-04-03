export class NomeJogador {
    constructor (name) {
        this._name = this._capitalize(name)
    }

    set name(string) {
        this.name = this._capitalize(string)
    }

    get name(){
        return this._name
    }

    _capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}` 
    }
}

export class TimeJogador {
    constructor (time) {
        this._time = this._capitalize(time)
    }

    set time(string) {
        this.time = this._capitalize(string)
    }

    get time(){
        return this._time
    }

    _capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}` 
    }
}

export class IdadeJogador {
    constructor (age) {
        this._age = this._capitalize(age)
    }

    set age(string) {
        this.age = this._capitalize(string)
    }

    get age(){
        return this._age
    }

    _capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}` 
    }
}
