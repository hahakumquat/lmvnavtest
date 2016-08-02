var credentials ={

	credentials: {
		// Replace placeholder below by the Consumer Key and Consumer Secret you got from
		// http://developer.autodesk.com/ for the production server
	    client_id: process.env.ClientId,
	    client_secret: process.env.ClientSecret,
            scope: "data:read",
	    grant_type: 'client_credentials'
	},
	// If you which to use the Autodesk View & Data API on the staging server, change this url
	BaseUrl: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

credentials.Authentication =credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'

module.exports =credentials ;
