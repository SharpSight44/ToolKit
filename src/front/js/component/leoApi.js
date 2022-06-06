export async function getDinner() {
	const response = await fetch(
		process.env.BACKEND_URL + "/api/dinner"
		);
		const payload = await response.json();
		
		return payload
	}
export async function getFridate() {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/fridate"
            );
            const payload = await response.json();
            
            return payload
        }
 export async function getDessert() {
            const response = await fetch(
            process.env.BACKEND_URL + "/api/dessert"
                );
                const payload = await response.json();
                
                return payload
            }
 export async function getStar() {
                const response = await fetch(
                    "https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/star"
                    );
                    const payload = await response.json();
                    
                    return payload.results
                }

                
export async function getYelpp() {
	const response = await fetch(
		"https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/leo"
		);
		const payload = await response.json();
		
		return payload
	}


	export async function getKarin() {
		const response = await fetch(
			"https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/karin"
			);
			const payload = await response.json();
			
			return payload
		}
		export async function getErin() {
			const response = await fetch(
				"https://3001-sharpsight4-dinnerdated-qwx34bf30wb.ws-us46.gitpod.io/api/erin"
				);
				const payload = await response.json();
				
				return payload
			}
            API_KEY = 'YvZ1UtZpTS4MZLRlm_TfmS5QbZH8ce05UpqsVzd1HXw3e08JboJRoFCz6iW7MJXW6-WzXzgsKeLLGxDiQohJaI8RfaMI-8A-3qG_6QL1sc_iU1Al19J1ki5I72qbYnYx'
            HEADERS = {'Authorization': 'Bearer %s' % API_KEY}
            
            @api.route('/leo', methods=['GET'])
            def handle_leo():
                
                
                r =requests.get('https://api.yelp.com/v3/businesses/vu6PlPyKptsT6oEq50qOzA', headers=HEADERS)
                run = r.json()
                
                return jsonify(run), 200
            
            @api.route('/karin', methods=['GET'])
            def handle_karin():
                
                
                r =requests.get('https://api.yelp.com/v3/businesses/s47-lounge-miami', headers=HEADERS)
                run = r.json()
                
                return jsonify(run), 200
            
            
            @api.route('/erin', methods=['GET'])
            def handle_erin():
                
                
                r =requests.get('https://api.yelp.com/v3/businesses/salt-and-straw-coconut-grove-2?osq=ice+cream', headers=HEADERS)
                run = r.json()
                
                return jsonify(run), 200
                   