import {setYear, parseISO} from 'date-fns' 4k (gzipped:1.8k)
export function getFutureData ( data:string): Date {
    return setYear(parseISO(date), new Date().getFullYear()+ 1)}
