
import { expect,test } from 'vitest'
import { Appointment } from './appointment'

 test ('create an appointment', ()=> { 
     const startsAt = new Date ()
    const endsAt = new Date ()
    endsAt.setDate(endsAt.getDate()+1)
    
    const appointment = new Appointment ({
    customer:'John Doe',
    startsAt,
    endsAt
    })
    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.custoner).toEqual('John Doe')
    })
    test ('canot  create an appointment with start  date before now'), ()=> {
        const startsAt = new Date()
        const endsAt = new Date()
        endsAt.setDate(endsAt.getDate() -1)
        expect (() => new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt,
        }).toThrow())}