import axios from "axios";

// export const getPlacesData1 = async (sw,ne) =>{
//     try {
//         const { data:{data} } = await axios.get(URL,{
//           params: {
//             bl_latitude: sw.lat,
//             tr_latitude: ne.lat,
//             bl_longitude: sw.lng,
//             tr_longitude: ne.lng,
//           },
//           headers: {
//             'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//             'x-rapidapi-key': '881c863eaemsh21534f10c861d82p18c82bjsna7906c6048f3'
//           }
//         });
        
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

const URL = "http://localhost:8800/api/pins"


export const getPlacesData = async () =>{
    try {
        const { data:{data} } = await axios.get(URL,{
          params: {
            bl_latitude: '36',
            tr_latitude: '42',
            bl_longitude: '26',
            tr_longitude: '45',
          }
        });
        
        return data;
    } catch (error) {
        console.log(error);
    }
}