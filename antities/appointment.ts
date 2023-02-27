export interface AppointmentProps {
    customer:string
startsAt: Date
endsAt: Date }

export class Appointment {
    toThrow(): any {
        throw new Error('Method not implemented.')
    }
    static customer(customer: any) {
        throw new Error('Method not implemented.')
    }
    private props: AppointmentProps

   get custoner () {
    return this.props.customer 
}
get startsAt (){
    return this.props.startsAt
}
get endsAt (){
    return this.props.endsAt
}
constructor (props: AppointmentProps) {
    const { startsAt, endsAt} = props
    if (endsAt < startsAt) {
        throw new Error ('Invalid and date')
}
this.props = props 
}}
