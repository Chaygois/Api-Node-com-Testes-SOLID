import { expect,test } from "vitest"
import{getFutureData} from "../utils/get-future-date"
test ('increases date with one year' , ()=> {
    const year = new Date ().getFullYear()
    newFunction();

    function newFunction() {
        expect(getFutureData('${year}23-08-10').getFullYear()).toEqual(2024);
    }
})
;/*Receives "2023-8-10" and return "2025-08-10" */