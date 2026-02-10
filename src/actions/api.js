// import axios from "axios";


// // const baseUrl = "https://localhost:44333/api/Dcandidate"
// const baseurl = "https://localhost:44333/api/dcandidate"

// export default {
//     dCandidate(url = baseurl + 'dcandidate/'){
//         return {
//             fetchAll : () => axios.get(url),
//             fetchById : id => axios.get(url+id),
//             create : newRecord => axios.post(url,newRecord),
//             update : (id,updateRecord) => axios.put(url+id,updateRecord),
//             delete : id=> axios.delete(url + id)
//         }
//     }
// }

import axios from "axios";

const baseUrl = "https://localhost:44333/api/DCandidate/";

// export default {
//   dCandidate() {
//     return {
//       fetchAll: () => axios.get(baseUrl),
//       fetchById: id => axios.get(baseUrl + id),
//       create: newRecord => axios.post(baseUrl, newRecord),
//       update: (id, updateRecord) =>
//         axios.put(baseUrl + id, updateRecord),
//       delete: id => axios.delete(baseUrl + id)
//     };
//   }
// };

export default {
    dCandidate() {
      return {
        fetchAll: () => axios.get(baseUrl),
        fetchById: id => axios.get(baseUrl + id),
        create: newRecord => axios.post(baseUrl, newRecord),
        update: (id, updateRecord) => axios.put(baseUrl + id, updateRecord),
        delete: id => axios.delete(baseUrl + id)
      };
    }
  };
  