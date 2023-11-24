import axios from 'axios'

class CoasterService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/coasters`
        })
    }

    getCoasters() {
        return this.api.get('/getAllCoasters')
    }

    getCoasterDetails(coaster_id) {
        return this.api.get(`/getOneCoaster/${coaster_id}`)
    }

    saveCoaster(coasterData) {
        return this.api.post(`/saveCoaster`, coasterData)
    }
}

const coastersService = new CoasterService()

export default coastersService



