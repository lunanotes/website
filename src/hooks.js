export function getSession(request) {
	let acceptedLanguage = request.headers['accept-language'].split(',')[0];
	return { acceptedLanguage };
}
