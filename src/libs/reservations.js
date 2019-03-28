import axios from 'axios';

export const createReservation = (user_name, place, date, time, number, request, userId) => {
    console.log(user_name, place, date, time, number, request, userId);
    axios.post("http://13.125.251.45:3000/v1/reservations",
        {
            "user_name": user_name,
            "place": place,
            "date": date,
            "time": time,
            "number": number,
            "request": request,
            "userId": userId
        })
        .catch((error) => console.log("reservation erorr : ", error));
};
