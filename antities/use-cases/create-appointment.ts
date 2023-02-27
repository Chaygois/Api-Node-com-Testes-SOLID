import { Appointment } from "../appointment";
interface CreateAppointmentRequest {
    customer: string;
    startsAt: Date;
    endsAt:Date;
}
type CreateAppointResponse = Appointment
export class CreateAppointment {
    async execute ({
        customer,
        startsAt,
         endsAt
    }: CreateAppointmentRequest ):Promise<CreateAppointResponse> {
            const appointment = new Appointment ({
                customer,
                startsAt,
                endsAt
                })
            return appointment
            }
        }
