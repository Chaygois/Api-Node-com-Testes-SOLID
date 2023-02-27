
import { expect,test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureData } from './utils/get-future-date'

 test ('create an appointment', ()=> { 
const startsAt = getFutureData ('2023-08-10')
const endsAt = getFutureData ('2023-08-09')

    const appointment = new Appointment ({
    customer:'John Doe',
    startsAt,
    endsAt
    })
    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.custoner).toEqual('John Doe')
    })
    test ('canot  create an appointment with and date before stard date'), ()=> {
        const startsAt = new Date()
        const endsAt = new Date()

        endsAt.setDate(startsAt.getDate()+2)
    endsAt.setDate(endsAt.getDate()+1)
        expect (() => new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt,
        }).toThrow())}
        test ('canot  create an appointment with start  date before now'), ()=> {
            const startsAt = new Date()
            const endsAt = new Date()
    
            endsAt.setDate(startsAt.getDate()-1)
        endsAt.setDate(endsAt.getDate()+3)}