import {MammalType} from '../enum/mammal-type';

export interface Mammal{
    readonly type:MammalType;
    walk():void;
}