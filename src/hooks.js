export function getSession(request) {
	try {
		let acceptedLanguage = request.headers['accept-language'].split(',')[0];
		return { acceptedLanguage };
	} catch (error) {
		return {};
	}
}
